<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Park Now| Park It</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />

    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
        function initialize() {
            var mapCanvas = document.getElementById('gmap');
            var mapOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <style>

    </style>
</head>
<body>
<div id="park-now">
    <div class="title">Park Now</div>
    <div class="parkIt"><button>ParkIt!</button></div>
    <div class="lot-name"><strong>lot name</strong></div>
    <div class="lot-address">lot address</div>
    <div class="lot-rate">lot rate</div>
    <div class="lot-distance">__ km away</div>
    <div id="gmap"></div>
    <button class="show-more">Show more &raquo;</button>
</div>
</body>