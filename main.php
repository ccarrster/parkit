<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Park It - Home</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">


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
<div id="home">
    <div id="title"><h1>Park it!</h1></div>
    <div id="slug">Finding you a parking lot.</div>
    <div id="gmap"></div>
    <!--<iframe src="https://www.google.com/maps/d/embed?mid=zidwzf_Y1bJQ.k3LXZ26ZQ0-I&hl=en_US" width="640" height="480"></iframe>-->
    <div id="home-button" style="position: relative">
        <div style="float:left; padding-left: 10px;"><button>Park Later</button></div>
        <div style="float:right; padding-right: 10px;">
            <form  action="park-now.php">
                <input type="submit" value="Park Now">
            </form>
        </div>
    </div>
</div>
</body>