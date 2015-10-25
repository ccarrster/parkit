<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Timer | Park It</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
   	<script src="jquery.countdown360.js" type="text/javascript" charset="utf-8"></script>
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

</head>


<body>
	<div class="nav-menu">
	    <a onclick="window.history.back()"><i class="fa fa-chevron-left" style="font-size:22px"></i></a>
	    <div class="title">You arrived!</div>
	    <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
	</div>   
	<div id="container">
		<div style="height:38px"></div>
		<div id="countdown"></div>
		<script type="text/javascript" charset="utf-8">

	 	var countdown =  $("#countdown").countdown360({
   	 	radius      : 125,
     	seconds     : <?= $_GET['time']*3600 ?>,
     	fontColor   : '#FFFFFF',
     	autostart   : false,
     	onComplete  : function () { console.log('done') }
	   });
		countdown.start();
	  </script>
	</div>
	<form action="main.php"><button class="show-more">Stop Timer</button></form>
<style>
	#countdown {
		margin: 25px;
	}
</style>
</body>
</html>
