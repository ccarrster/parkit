<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigate To Lot | Park It</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <script src="test.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
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

</head>
<body>
<div id="navigate">
    <div class="nav-menu">
        <a onclick="window.history.back()"><i class="fa fa-chevron-left" style="font-size:22px"></i></a>
        <div class="title">Navigating To Lot</div>
        <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
    </div>
    <div id="gmap"></div>
    <div><a href="arrived.php">Arrive</a></div>
    <div class="show-more"><a href="details.php"><div style="width:100%">Select other lots<i class="fa fa-chevron-right"></i></div></a></div>
</div>
</body>