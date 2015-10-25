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

    <script>
        var currentLat = 43.463645;
        var currentLon = -80.5278047;
        var nonReserved = getClosestNonReservedLots(currentLat, currentLon);
    </script>
</head>
<body>
<div class="nav-menu">
    <a onclick="window.history.back()"><i class="fa fa-chevron-left" style="font-size:22px"></i></a>
    <div class="title">Lots Near You</div>
    <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
</div>
<?php date_default_timezone_set('America/Toronto'); ?>
<div id="date">
	<div style="font-weight:bold; font-size:125%;"><i class="fa fa-calendar"></i> <?= date( 'M d h:00 a') ?></div>
	tap here to change time
</div>
<div id="alldetails"></div>
<script>
console.log(nonReserved);
for(var i = 0; i < nonReserved.length; i++){
	var lot = nonReserved[i];
	$('#alldetails').append(
		'<a href="park-now.php?id=' + i + '"><div id="details'+i+'" class="list">' +
			'<div class="lot-details">' +
				'<i class="fa fa-info-circle" style="float: right; padding:15px 10px 15px 10px;"></i>' + 
				'<div class="lot-name"></div>' +
				'<div class="lot-addr"></div>' +
				'<div class="lot-distance"></div>' + 
<?php /*				'<div class="lot-address"></div>' +
				'<div class="lot-rate"><i class="fa fa-usd"></i> <span></span></div>' +
				'<div class="lot-distance"><i class="fa fa-location-arrow"></i> <span></span> away</div>' +
				'<div class="lot-time"><i class="fa fa-clock-o"></i> NO PARKING 3:00am - 6:00am</div>' +
				'<i class="fa fa-wheelchair" style="display:none;"></i>' +
				'<i class="fa fa-video-camera"></i>' +
				'<div class="lot-capacity">Capacity: <span></span></div>' +
			'</div>' +
			'<button class="show-more">Select other lots</button>' + */ ?>
		'</div></a>'
	);

	 //$(document).ready(function() {
	 	$("#details"+i+" .lot-name").text(lot.name);
        $("#details"+i+" .lot-addr").text(lot.address);
        $("#details"+i+" .lot-rate span").text(lot.type);
        $("#details"+i+" .lot-distance").text(Math.round(lot.distance * 1000)+"m");
        $("#details"+i+" .lot-capacity span").text(parseInt(lot.capacity));
        if (lot.accessable == 'Y') {
            $("#details"+i+" .fa-wheelchair").show();
        } 
    //});
}
</script>
<script>
   
</script>
</body>