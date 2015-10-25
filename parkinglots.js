var headers = ["OBJECTID","NAME","ADDRESS","CLASS","PERMIT_HRS","SURFACE","ABBREV","ACCESSIBLE","MOTORCYCLE","PERMIT","TWOH_FREE","HOURLY","RESERVED","DESCR","CAPACITY","AREA_M","CreationDate","Creator","EditDate","Editor"];
<<<<<<< HEAD
var data = [
    "1","Caroline South Lot (Motorcycle Parking)","71 CAROLINE ST S","Motorcycle Parking","","PAVED","CS","N","Y","N","N","N","N","No Permit Required","","78.6670405224816","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "2","Perimeter Lot (2h Free Parking)","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","404.366615872282","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "3","Regina Lot (Motorcycle Parking)","30 REGINA ST S","Motorcycle Parking","","PAVED","R","Y","N","Y","N","N","N","Motorcycle Permit Parking Mon-Fri 8am-6pm","","30.2389826064734","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "4","Alexandra Lot","87 CAROLINE ST S","Permit Parking","","PAVED","A","N","N","Y","N","N","N",""Permit Parking Mon-Fri 8am-6pm; Overnight Permits March-November Only"","16 Permit","471.365902574981","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "5","Clay & Glass Gallery","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","156.597602008483","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "6","Caroline North Lot","41 CAROLINE ST S","Permit Parking","","PAVED","CN","N","Y","Y","N","N","N",""Permit Parking Mon-Fri 8am-6pm; Overnight Permits; 24h Permits"","101 Permit","3211.26850192457","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "7","Perimeter Lot","31 CAROLINE ST N","Permit Parking","","PAVED","PI","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","","3316.08276771885","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "8","City Centre Lot","100 REGINA ST S","2 Hour Free Parking","","PAVED","CC","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","1538.4150868122","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "9","Caroline South Lot","71 CAROLINE ST S","Permit Parking","","PAVED","CS","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","96 Permit","3038.19602808147","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "10","City Centre Lot (Reserved)","100 REGINA ST S","Reserved Parking","","PAVED","CC","Y","N","Y","N","N","Y","Permit Parking Mon-Fri 8am-5pm","","3436.81965070008","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "11","Temporary Lot A","","2 Hour Free Parking","","Asphalt","TA","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","","1944.6203266943","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "12","Dupont Lot","35 ALBERT ST","Permit Parking","","PAVED","D","Y","N","Y","N","N","N","Permit Parking Mon-Fri 9am-5pm","118 Permit and Pay and Display (combined with adjacent lot)","2651.30689847705","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "13","Dupont Lot (Pay and Display)","35 ALBERT ST","Paid Hourly Parking","","PAVED","D","Y","N","N","N","N","N","Pay & Display Machine  Mon-Sat 9am-9pm $2.50/hr","118 Permit and Pay and Display (combined with adjacent lot)","1704.18271444346","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "14","Library Lot","35 ALBERT ST","Permit Parking and Paid Hourly Parking","","PAVED","L","Y","N","Y","N","Y","N",""Permit Parking Mon-Fri 9am-5pm; Pay & Display Machine Mon-Sat 9am-9pm $2.50/hr"","30 Permit","920.911388642049","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "15","William Lot","29 WILLIAM ST E","Permit Parking","","PAVED","W","N","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","30 Permit","849.393954923728","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "16","Herbert Lot","35 WILLIAM ST E","Permit Parking","","PAVED","H","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","12 Permit","403.133682909431","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "17","Willow Lot","21 WILLOW ST","Permit Parking","","PAVED","WL","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","14 Permit","408.269442137848","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "18","Bauer Lot","80 FATHER DAVID BAUER DR","Permit Parking","","UNPAVED","B","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","180 Permit","3367.07875850926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "19","Station Lot (2h Free Parking)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N",""2 Hour Free Parking Mon-Fri 8am-5pm;  Overnight Parking Permitted in Park It and Leave It Spaces Only"","95 Permit and Two-Hour No Charge","1520.53185227677","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "20","Station Lot (Permit)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","95 Permit and Two-Hour No Charge","353.07004981622","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "21","Station Lot (Paul Puncher)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Paul Puncher Permit Parking Mon-Fri 8am-6pm","95 Permit and Two-Hour No Charge","671.545299078318","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "22","Station Lot","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N",""2 Hour Free Parking Mon-Fri 8am-5pm; ""S"" Permit"","95 Permit and Two-Hour No Charge","910.787729804766","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "23","Waterloo Town Square (North)","45 ERB ST W","2 Hour Free Parking","","PAVED","WTSN","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","270 Two-Hour No Charge","9532.75144315115","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "24","Waterloo Town Square (South) (Agreement)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","2739.43341814157","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "25","Waterloo Town Square (South)","70 CAROLINE ST S","Permit Parking","","PAVED","WTSS","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","1385.57905578433","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "26","Waterloo Town Square (South) (Free Parking)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","7976.82903621438","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "27","Regina Lot","30 REGINA ST S","Permit Parking","","PAVED","R","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","121 Permit","3420.05810846608","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "28","Museum Lot","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1660.16849397926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "29","Museum Lot (2h Free Parking)","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1386.02731806557","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo",
    "30","Temporary Parking Lot B","","2 Hour Free Parking","","UNPAVED","TB","N","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","","883.638430588569","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"
];
=======
var data = [["1","Caroline South Lot (Motorcycle Parking)","71 CAROLINE ST S","Motorcycle Parking","","PAVED","CS","N","Y","N","N","N","N","No Permit Required","","78.6670405224816","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["2","Perimeter Lot (2h Free Parking)","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","404.366615872282","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["3","Regina Lot (Motorcycle Parking)","30 REGINA ST S","Motorcycle Parking","","PAVED","R","Y","N","Y","N","N","N","Motorcycle Permit Parking Mon-Fri 8am-6pm","","30.2389826064734","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["4","Alexandra Lot","87 CAROLINE ST S","Permit Parking","","PAVED","A","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm; Overnight Permits March-November Only","16 Permit","471.365902574981","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["5","Clay & Glass Gallery","31 CAROLINE ST N","2 Hour Free Parking","","PAVED","PI","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","156.597602008483","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["6","Caroline North Lot","41 CAROLINE ST S","Permit Parking","","PAVED","CN","N","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm; Overnight Permits; 24h Permits","101 Permit","3211.26850192457","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["7","Perimeter Lot","31 CAROLINE ST N","Permit Parking","","PAVED","PI","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","","3316.08276771885","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["8","City Centre Lot","100 REGINA ST S","2 Hour Free Parking","","PAVED","CC","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm","","1538.4150868122","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["9","Caroline South Lot","71 CAROLINE ST S","Permit Parking","","PAVED","CS","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","96 Permit","3038.19602808147","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["10","City Centre Lot (Reserved)","100 REGINA ST S","Reserved Parking","","PAVED","CC","Y","N","Y","N","N","Y","Permit Parking Mon-Fri 8am-5pm","","3436.81965070008","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["11","Temporary Lot A","","2 Hour Free Parking","","Asphalt","TA","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","","1944.6203266943","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["12","Dupont Lot","35 ALBERT ST","Permit Parking","","PAVED","D","Y","N","Y","N","N","N","Permit Parking Mon-Fri 9am-5pm","118 Permit and Pay and Display (combined with adjacent lot)","2651.30689847705","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["13","Dupont Lot (Pay and Display)","35 ALBERT ST","Paid Hourly Parking","","PAVED","D","Y","N","N","N","N","N","Pay & Display Machine  Mon-Sat 9am-9pm $2.50/hr","118 Permit and Pay and Display (combined with adjacent lot)","1704.18271444346","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["14","Library Lot","35 ALBERT ST","Permit Parking and Paid Hourly Parking","","PAVED","L","Y","N","Y","N","Y","N","Permit Parking Mon-Fri 9am-5pm; Pay & Display Machine Mon-Sat 9am-9pm $2.50/hr","30 Permit","920.911388642049","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["15","William Lot","29 WILLIAM ST E","Permit Parking","","PAVED","W","N","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","30 Permit","849.393954923728","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["16","Herbert Lot","35 WILLIAM ST E","Permit Parking","","PAVED","H","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","12 Permit","403.133682909431","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["17","Willow Lot","21 WILLOW ST","Permit Parking","","PAVED","WL","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","14 Permit","408.269442137848","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["18","Bauer Lot","80 FATHER DAVID BAUER DR","Permit Parking","","UNPAVED","B","N","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","180 Permit","3367.07875850926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["19","Station Lot (2h Free Parking)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm;  Overnight Parking Permitted in Park It and Leave It Spaces Only","95 Permit and Two-Hour No Charge","1520.53185227677","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["20","Station Lot (Permit)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-5pm","95 Permit and Two-Hour No Charge","353.07004981622","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["21","Station Lot (Paul Puncher)","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","N","N","N","Paul Puncher Permit Parking Mon-Fri 8am-6pm","95 Permit and Two-Hour No Charge","671.545299078318","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["22","Station Lot","20 REGINA ST S","Permit Parking and 2 Hour Free Parking","","PAVED","S","Y","N","Y","Y","N","N","2 Hour Free Parking Mon-Fri 8am-5pm; 'S' Permit","95 Permit and Two-Hour No Charge","910.787729804766","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["23","Waterloo Town Square (North)","45 ERB ST W","2 Hour Free Parking","","PAVED","WTSN","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","270 Two-Hour No Charge","9532.75144315115","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["24","Waterloo Town Square (South) (Agreement)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","2739.43341814157","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["25","Waterloo Town Square (South)","70 CAROLINE ST S","Permit Parking","","PAVED","WTSS","Y","Y","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","1385.57905578433","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["26","Waterloo Town Square (South) (Free Parking)","70 CAROLINE ST S","2 Hour Free Parking","","PAVED","WTSS","Y","Y","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","324 Two-Hour No Charge and Permit","7976.82903621438","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["27","Regina Lot","30 REGINA ST S","Permit Parking","","PAVED","R","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","121 Permit","3420.05810846608","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["28","Museum Lot","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","Y","N","N","N","Permit Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1660.16849397926","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["29","Museum Lot (2h Free Parking)","82 ERB ST","Permit Parking and 2 Hour Free Parking","","PAVED","M","Y","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","81 Permit and Two-Hour No Charge","1386.02731806557","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"],
["30","Temporary Parking Lot B","","2 Hour Free Parking","","UNPAVED","TB","N","N","N","Y","N","N","2 Hour Free Parking Mon-Fri 8am-6pm","","883.638430588569","2015-09-23T15:33:13.915Z","OpenData_Waterloo","2015-09-23T15:33:13.915Z","OpenData_Waterloo"]];

>>>>>>> 47aefe3235b062b5010bbcb7739f1010f9a3d44b
