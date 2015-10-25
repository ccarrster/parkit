<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Park It - Home</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
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
<style>

</style>
</head>
<body>
<div id="home">
    <div id="title"><img src="ParkItLogo600px-01.png" width="250px" /></div>
    <div id="slug">Finding you a parking lot.</div>
    <div id="gmap"></div>
    <!--<iframe src="https://www.google.com/maps/d/embed?mid=zidwzf_Y1bJQ.k3LXZ26ZQ0-I&hl=en_US" width="640" height="480"></iframe>-->
    <div id="home-button" style="position: relative">
        <div style="float:left; padding-left: 20px;"><a href="details.php"><button class="circular-button">Choose destination</button></a></div>
        <div style="float:right; padding-right: 20px;"><a href="park-now.php"><button class="circular-button">Park Near Here</button></a></div>
    </div>
</div>
</body>