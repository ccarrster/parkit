<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigate To Lot | Park It</title>

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
<div id="navigate">
    <div class="nav-menu">
        <a onclick="window.history.back()"><i class="fa fa-chevron-left" style="font-size:22px"></i></a>
        <div class="title">Arrived At Lot!</div>
        <a href="main.php"><i class="fa fa-home" style="font-size:22px"></i></a>
    </div>
    <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2895.8601686635648!2d-80.52576599999998!3d43.463516399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1445726543503" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <button class="show-more">Select other lots</button>
</div>
</body>