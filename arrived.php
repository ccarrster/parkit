<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigate To Lot | Park It</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
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
    <div class="title">Arrived At Lot!</div>
    <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
</div>    
<div id="navigate">
    <form action="countdown.php">
        <div style="text-align:center"><h3>I bought <input id="time" name="time" type="number" min="0" value="1" size="number" maxlength="2"> hour(s) </h3></div>
        <button class=" circular-button timer" type="submit"><h1>Set Timer</h1></button>
    </form>
    <div style="text-align:center"><h3>Parking Rate: $2.50/hour</h3></div>
    <button class="show-more">Report Lot as Full!</button>
    <div class="report-prob">
        <div style="text-align: center;">Lot is full<br />
        <button class="circular-button" onclick="location = 'main.php'">Confirm</button></div>
        <div class="slidedown"><i class="fa fa-chevron-down"></i></div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $(".show-more").click(function() {
            $(".report-prob").animate({'bottom':'0px'},100);
        });
        $(".slidedown").click(function() {
            $(".report-prob").animate({'bottom':'-150px'},100);
        });
    });
</script>
</body>