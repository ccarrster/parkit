<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Park Now| Park It</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="jquery.countdown360.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script src="test.js"></script>


    <script>
        var currentLat = 43.463645;
        var currentLon = -80.5278047;
        <?php if (isset($_GET['id'])) { ?>
            var closestFree = getClosestNonReservedLots(currentLat, currentLon)[<?= $_GET['id'] ?>];
        <?php } else { ?>
            var closestFree = getClosestFreeLot(currentLat, currentLon);
        <?php } ?>
    </script>
</head>
<body>
<div id="park-now">
    <div class="nav-menu">
        <a onclick="window.history.back()"><i class="fa fa-chevron-left" style="font-size:22px"></i></a>
        <div class="title"></div>
        <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
    </div>
    <div id="gmap"></div>
    <a href="navigate-to-lot.php"><button class="circular-button parkIt">Directions</button></a>
    <div class="lot-details">
        <div id="lot-details-1">
            <div style="font-weight: bold;">Parking lot Details</div>
            <div class="lot-address"></div>
        </div>
        <div id="lot-details-2">
            <div class="lot-rate"><i class="fa fa-usd"></i> <span></span></div>
            <div class="lot-distance"><i class="fa fa-location-arrow"></i> <span></span> away</div>
            <div class="lot-time"><i class="fa fa-clock-o"></i> NO PARKING 3:00am - 6:00am</div>
            <i class="fa fa-wheelchair" style="display:none;"></i>
            <img src="security_camera.jpg" height="15px" style="margin-bottom:0px" />
         <div class="lot-capacity"><span class="capacity1">Capacity: <span class="capacity"></span></span> <span class="infractions1">Infractions: <span class="infraction"></span></span></div>
        </div>
    </div>
    <div class="show-more"><a href="details.php"><div style="width:100%">Select other lots<i class="fa fa-chevron-right"></i></div></a></div>
</div>
<script>
    $(document).ready(function() {
        console.log(closestFree);
        $(".title").text(closestFree.name);
        $(".lot-address").text(closestFree.address);
        $(".lot-rate span").text(closestFree.type);
        $(".lot-distance span").text(Math.round(closestFree.distance * 1000)+"m");

        if (isNaN(parseInt(closestFree.capacity))) {
            $(".lot-capacity .capacity1").hide();
        } else {
            $(".lot-capacity .capacity").text(parseInt(closestFree.capacity));
        }

        if (closestFree.infractions == undefined) {
            $(".lot-capacity .infractions1").hide();
        } else
        {
            $(".lot-capacity .infraction").text(closestFree.infractions);
        }

        if (closestFree.accessable == 'Y') {
            $(".fa-wheelchair").show();
        } 
    });
</script>
<script>
    function initialize() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var mapCanvas = document.getElementById('gmap');
        var mapOptions = {
            center: new google.maps.LatLng(43.463645, -80.5278047),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        directionsDisplay.setMap(map);
        var myLatLng = {lat: 43.463645, lng: -80.5278047};
        var lot = getClosestFreeLot(43.463645, -80.5278047);
        var other = {lat: parseFloat(lot.latitude), lng: parseFloat(lot.longitude)};

        directionsService.route({
            origin: myLatLng,
            destination: other,
            travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
</script>
</body>