"use strict";
var headers = ["OBJECTID","NAME","ADDRESS","CLASS","PERMIT_HRS","SURFACE","ABBREV","ACCESSIBLE","MOTORCYCLE","PERMIT","TWOH_FREE","HOURLY","RESERVED","DESCR","CAPACITY","AREA_M","CreationDate","Creator","EditDate","Editor"];
var data = [["1","Caroline South Lot (Motorcycle Parking)","71 CAROLINE ST S","Motorcycle Parking","","PAVED","CS","N","Y","N","N","N","N","No Permit Required","","78.6670405224816","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461695", "-80.523542"],
["2","Perimeter Lot (2h Free Parking)","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","404.366615872282","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463690", "-80.520696"],
["3","Regina Lot (Motorcycle Parking)","30 REGINA ST S","Motorcycle Parking","","PAVED","R","Y","N","Y","N","N","N","Motorcycle Permit Parking Mon-Fri 8am-6pm","","30.2389826064734","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463690", "-80.520696", "81"],
["4","Alexandra Lot","87 CAROLINE ST S","Permit Parking","","PAVED","A","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm; Overnight Permits March-November Only","16 Permit","471.365902574981","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461331", "-80.522918"],
["5","Clay & Glass Gallery","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","156.597602008483","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.465426", "-80.528111"],
["6","Caroline North Lot","41 CAROLINE ST S","Permit Parking","","PAVED","CN","N","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm; Overnight Permits; 24h Permits","101 Permit","3211.26850192457","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.462772", "-80.523830"],
["7","Perimeter Lot","31 CAROLINE ST N","Permit Parking","","PAVED","PI","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","","3316.08276771885","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.465426", "-80.528111"],
["8","City Centre Lot","100 REGINA ST S","2 Hour Free Parking","","PAVED","CC","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","1538.4150868122","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463246", "-80.520150", "217"],
["9","Caroline South Lot","71 CAROLINE ST S","Permit Parking","","PAVED","CS","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","96 Permit","3038.19602808147","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461695", "-80.523542"],
["10","City Centre Lot (Reserved)","100 REGINA ST S","Reserved Parking","","PAVED","CC","Y","N","Y","N","N","Y","Permit Parking Mon-Fri 8am-5pm","","3436.81965070008","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463246", "-80.520150", "217"],
["12","Dupont Lot","35 ALBERT ST","Permit Parking","","PAVED","D","Y","N","Y","N","N","N","Permit Parking Mon-Fri 9am-5pm","118 Permit and Pay and Display (combined with adjacent lot)","2651.30689847705","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.466099", "-80.524361"],
["13","Dupont Lot (Pay and Display)","35 ALBERT ST","Paid Hourly Parking","","PAVED","D","Y","N","N","N","N","N","Pay & Display Machine  Mon-Sat 9am-9pm $2.50/hr","118 Permit and Pay and Display (combined with adjacent lot)","1704.18271444346","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.466099", "-80.524361", "169"],
["14","Library Lot","35 ALBERT ST","Permit Parking and Paid Hourly Parking","","PAVED","L","Y","N","Y","N","Y","N","Permit Parking Mon-Fri 9am-5pm; Pay & Display Machine Mon-Sat 9am-9pm $2.50/hr","30 Permit","920.911388642049","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.466099", "-80.524361", "26"],
["15","William Lot","29 WILLIAM ST E","Permit Parking","","PAVED","W","N","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","30 Permit","849.393954923728","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463048", "-80.519826"],
["16","Herbert Lot","35 WILLIAM ST E","Permit Parking","","PAVED","H","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","12 Permit","403.133682909431","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463135", "-80.519729"],
["17","Willow Lot","21 WILLOW ST","Permit Parking","","PAVED","WL","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","14 Permit","408.269442137848","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464747", "-80.517774"],
["18","Bauer Lot","80 FATHER DAVID BAUER DR","Permit Parking","","UNPAVED","B","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","180 Permit","3367.07875850926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463588", "-80.537591", "67"],
["19","Station Lot (2h Free Parking)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm;  Overnight Parking Permitted in Park It and Leave It Spaces Only","95 Permit and Two-Hour No Charge","1520.53185227677","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464635", "-80.520634", "301"],
["20","Station Lot (Permit)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","95 Permit and Two-Hour No Charge","353.07004981622","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464635", "-80.520634", ""],
["21","Station Lot (Paul Puncher)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Paul Puncher Permit Parking Mon-Fri 8am-6pm","95 Permit and Two-Hour No Charge","671.545299078318","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464635", "-80.520634", "301"],
["22","Station Lot","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm; 'S' Permit","95 Permit and Two-Hour No Charge","910.787729804766","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464635", "-80.520634", "301"],
["23","Waterloo Town Square (North)","45 ERB ST W","2 Hour Free Parking","","PAVED","WTSN","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","270 Two-Hour No Charge","9532.75144315115","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.464681", "-80.524465", "1780"],
["24","Waterloo Town Square (South) (Agreement)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","2739.43341814157","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461526", "-80.522775", "1260"],
["25","Waterloo Town Square (South)","70 CAROLINE ST S","Permit Parking","","PAVED","WTSS","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","1385.57905578433","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461526", "-80.522775"],
["26","Waterloo Town Square (South) (Free Parking)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","7976.82903621438","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.461526", "-80.522775"],
["27","Regina Lot","30 REGINA ST S","Permit Parking","","PAVED","R","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","121 Permit","3420.05810846608","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463690", "-80.520696"],
["28","Museum Lot","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1660.16849397926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463842", "-80.526502"],
["29","Museum Lot (2h Free Parking)","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1386.02731806557","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo", "43.463842", "-80.526502"]];

var uwlots = {
  "meta":{
    "requests":1,
    "timestamp":1445714115,
    "status":200,
    "message":"Request successful",
    "method_id":1823,
    "method":{
      
    }
  },
  "data":[
    {
      "lot_name":"C",
      "latitude":43.467536,
      "longitude":-80.538379,
      "capacity":807,
      "current_count":278,
      "percent_filled":34,
      "last_updated":"2015-10-24T15:15:05-04:00"
    },
    {
      "lot_name":"N",
      "latitude":43.47491,
      "longitude":-80.544559,
      "capacity":252,
      "current_count":133,
      "percent_filled":53,
      "last_updated":"2015-10-24T15:14:13-04:00"
    },
    {
      "lot_name":"W",
      "latitude":43.474777,
      "longitude":-80.547579,
      "capacity":184,
      "current_count":81,
      "percent_filled":44,
      "last_updated":"2015-10-24T15:12:08-04:00"
    },
    {
      "lot_name":"X",
      "latitude":43.477526,
      "longitude":-80.545492,
      "capacity":630,
      "current_count":184,
      "percent_filled":29,
      "last_updated":"2015-10-24T15:14:54-04:00"
    }
  ]
};

var weather = 
{
  "meta":{
    "requests":2,
    "timestamp":1445714356,
    "status":200,
    "message":"Request successful",
    "method_id":1451,
    "method":{
      
    }
  },
  "data":{
    "latitude":43.4738,
    "longitude":-80.5576,
    "elevation_m":334.4,
    "observation_time":"2015-10-24T12:15:00-04:00",
    "temperature_current_c":8.5,
    "humidex_c":8.6,
    "windchill_c":11.2,
    "temperature_24hr_max_c":11.2,
    "temperature_24hr_min_c":5.3,
    "precipitation_15min_mm":0,
    "precipitation_1hr_mm":-1999.6,
    "precipitation_24hr_mm":0.2,
    "relative_humidity_percent":91.6,
    "dew_point_c":7.2,
    "wind_speed_kph":0.4,
    "wind_direction_degrees":null,
    "pressure_kpa":101.8,
    "pressure_trend":"falling",
    "incoming_shortwave_radiation_wm2":44
  }
};

var weatherTemp = weather.data.temperature_current_c;
var weatherWind = weather.data.wind_speed_kph;
var weatherPercip = weather.data.precipitation_15min_mm;
class Lot {

}

var allLots = [];



for(var j = 0; j < data.length; j++){
	var aLot = new Lot();
	aLot.address = data[j][2];
	aLot.capacity = data[j][14];
	aLot.name = data[j][1];
	aLot.source = "city";
	aLot.type = data[j][3];
	aLot.latitude = data[j][20];
	aLot.longitude = data[j][21];
	aLot.accessable = data[j][7];

	if(typeof data[j][22] !== 'undefined' && data[j][22] != ""){
		aLot.infractions = data[j][22];
	}
	allLots.push(aLot);
}

for(var k = 0; k < uwlots.data.length; k++){
	var lot = uwlots.data[k];
	var aLot = new Lot();
	aLot.name = lot.lot_name;
	aLot.latitude = lot.latitude;
	aLot.longitude = lot.longitude;
	aLot.capacity = lot.capacity;
	aLot.current_count = lot.current_count;
	aLot.type = "uw";
	aLot.source = "uw";
	allLots.push(aLot);
}
//console.log(allLots);

var currentLat = 43.463645;
var currentLon = -80.5278047;

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}


function compare(a, b) {
  if (a.distance < b.distance) {
    return -1;
  }
  if (a.distance > b.distance) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

function getAllLots(lat, lon){
	var distanceResult = [];
	for(var i = 0; i < allLots.length; i++){
		var lotDistance = distance(currentLat, currentLon, parseFloat(allLots[i].latitude), parseFloat(allLots[i].longitude), "K");
		allLots[i].distance = lotDistance;
		distanceResult.push(allLots[i]);
	}
	distanceResult.sort(compare);
	return distanceResult;
}

function getClosestFreeLot(lat, lon){
	var lots = getAllLots(lat, lon);
	for(var i = 0; i < lots.length; i++){
		if (lots[i].type.toLowerCase().indexOf("free") != -1){
		    return lots[i];
		}
	}
}

function getClosestNonPermitOnlyLots(lat, lon){
	var lots = getAllLots(lat, lon);
	for(var i = 0; i < lots.length; i++){
		if (lots[i].type.toLowerCase().indexOf("free") != -1){
		    return lots[i];
		}
	}
}

function getClosestNonReservedLots(lat, lon){
	var closestLots = [];
	var lots = getAllLots(lat, lon);
	for(var i = 0; i < lots.length; i++){
		if (lots[i].type.toLowerCase().indexOf("reserved") == -1 && lots[i].type.toLowerCase().indexOf("motorcycle") == -1){
		    closestLots.push(lots[i]);
		    if(closestLots.length >= 7){
		    	return closestLots;
		    }
		}
	}
	return closestLots;
}

//var closestFree = getClosestFreeLot(currentLat, currentLon);
//var nonReserved = getClosestNonReservedLots(currentLat, currentLon);
