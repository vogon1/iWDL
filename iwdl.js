// This file is part of iWDL
//
// iWDL is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// iWDL is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with iWDL.  If not, see <http://www.gnu.org/licenses/>.

//
// Main javascript file
// By Sietse Visser (sietse@sietse.nl)
// Version 0.7
//

//
// The clientraw fieldlist and the unit type
//
var cr_fields = new Array;
cr_fields[  0] = new Array("Header"                     ,  "");
cr_fields[  1] = new Array("Avg Speed"                  ,  "kn");
cr_fields[  2] = new Array("Gusts"                      ,  "kn");
cr_fields[  3] = new Array("WindDir"                    ,  "deg");
cr_fields[  4] = new Array("Out Temp"                   ,  "c");
cr_fields[  5] = new Array("Out Hum"                    ,  "%");
cr_fields[  6] = new Array("Baro"                       ,  "hpa");
cr_fields[  7] = new Array("RainDay"                    ,  "mm");
cr_fields[  8] = new Array("RainMon"                    ,  "mm");
cr_fields[  9] = new Array("RainYear"                   ,  "mm");
cr_fields[ 10] = new Array("RainRate"                   ,  "mm");
cr_fields[ 11] = new Array("MaxRainRate"                ,  "mm");
cr_fields[ 12] = new Array("In Temp"                    ,  "c");
cr_fields[ 13] = new Array("In Hum"                     ,  "%");
cr_fields[ 14] = new Array("Soil Temp"                  ,  "c");
cr_fields[ 15] = new Array("Forecast Icon"              ,  "Icon 1");
cr_fields[ 16] = new Array("WMR968 Extra Temp"          ,  "c");
cr_fields[ 17] = new Array("WMR968 Extra Hum"           ,  "%");
cr_fields[ 18] = new Array("WMR968 Extra Sensor"        ,  "Number");
cr_fields[ 19] = new Array("Yesterday Rain"             ,  "mm");
cr_fields[ 20] = new Array("Extra Temp Sensor 1"        ,  "c");
cr_fields[ 21] = new Array("Extra Temp Sensor 2"        ,  "c");
cr_fields[ 22] = new Array("Extra Temp Sensor 3"        ,  "c");
cr_fields[ 23] = new Array("Extra Temp Sensor 4"        ,  "c");
cr_fields[ 24] = new Array("Extra Temp Sensor 5"        ,  "c");
cr_fields[ 25] = new Array("Extra Temp Sensor 6"        ,  "c");
cr_fields[ 26] = new Array("Extra Hum Sensor 1"         ,  "%");
cr_fields[ 27] = new Array("Extra Hum Sensor 2"         ,  "%");
cr_fields[ 28] = new Array("Extra Hum Sensor 3"         ,  "%");
cr_fields[ 29] = new Array("Hour"                       ,  "Time");
cr_fields[ 30] = new Array("Minute"                     ,  "Time");
cr_fields[ 31] = new Array("Seconds"                    ,  "Time");
cr_fields[ 32] = new Array("Station Name"               ,  "");
cr_fields[ 33] = new Array("Dallas Lightning Count"     ,  "Number");
cr_fields[ 34] = new Array("Solar Reading"              ,  "Number");
cr_fields[ 35] = new Array("Day"                        ,  "Time");
cr_fields[ 36] = new Array("Month"                      ,  "Time");
cr_fields[ 37] = new Array("WMR968 Battery 1"           ,  "%");
cr_fields[ 38] = new Array("WMR968 Battery 2"           ,  "%");
cr_fields[ 39] = new Array("WMR968 Battery 3"           ,  "%");
cr_fields[ 40] = new Array("WMR968 Battery 4"           ,  "%");
cr_fields[ 41] = new Array("WMR968 Battery 5"           ,  "%");
cr_fields[ 42] = new Array("WMR968 Battery 6"           ,  "%");
cr_fields[ 43] = new Array("WMR968 Battery 7"           ,  "%");
cr_fields[ 44] = new Array("WindChill"                  ,  "c");
cr_fields[ 45] = new Array("Humidex"                    ,  "c");
cr_fields[ 46] = new Array("Max Day Temp"               ,  "c");
cr_fields[ 47] = new Array("Min Day Temp"               ,  "c");
cr_fields[ 48] = new Array("Icon Type"                  ,  "Icon 2");
cr_fields[ 49] = new Array("Weather Desc"               ,  "");
cr_fields[ 50] = new Array("Baro Trend"                 ,  "hpa");
cr_fields[ 51] = new Array("Windspeed Hour  1"          ,  "kn");
cr_fields[ 52] = new Array("Windspeed Hour  2"          ,  "kn");
cr_fields[ 53] = new Array("Windspeed Hour  3"          ,  "kn");
cr_fields[ 54] = new Array("Windspeed Hour  4"          ,  "kn");
cr_fields[ 55] = new Array("Windspeed Hour  5"          ,  "kn");
cr_fields[ 56] = new Array("Windspeed Hour  6"          ,  "kn");
cr_fields[ 57] = new Array("Windspeed Hour  7"          ,  "kn");
cr_fields[ 58] = new Array("Windspeed Hour  8"          ,  "kn");
cr_fields[ 59] = new Array("Windspeed Hour  9"          ,  "kn");
cr_fields[ 60] = new Array("Windspeed Hour 10"          ,  "kn");
cr_fields[ 61] = new Array("Windspeed Hour 11"          ,  "kn");
cr_fields[ 62] = new Array("Windspeed Hour 12"          ,  "kn");
cr_fields[ 63] = new Array("Windspeed Hour 13"          ,  "kn");
cr_fields[ 64] = new Array("Windspeed Hour 14"          ,  "kn");
cr_fields[ 65] = new Array("Windspeed Hour 15"          ,  "kn");
cr_fields[ 66] = new Array("Windspeed Hour 16"          ,  "kn");
cr_fields[ 67] = new Array("Windspeed Hour 17"          ,  "kn");
cr_fields[ 68] = new Array("Windspeed Hour 18"          ,  "kn");
cr_fields[ 69] = new Array("Windspeed Hour 19"          ,  "kn");
cr_fields[ 70] = new Array("Windspeed Hour 20"          ,  "kn");
cr_fields[ 71] = new Array("Max Wind Gust"              ,  "kn");
cr_fields[ 72] = new Array("DewPoint Temp"              ,  "c");
cr_fields[ 73] = new Array("Cloud Height"               ,  "ft");
cr_fields[ 74] = new Array("Date"                       ,  "");
cr_fields[ 75] = new Array("Max Humidex"                ,  "c");
cr_fields[ 76] = new Array("Min Humidex"                ,  "c");
cr_fields[ 77] = new Array("Max Windchill"              ,  "c");
cr_fields[ 78] = new Array("Min Windchill"              ,  "c");
cr_fields[ 79] = new Array("UV"                         ,  " ");
cr_fields[ 80] = new Array("Hr Windspeed  1"            ,  "kn");
cr_fields[ 81] = new Array("Hr Windspeed  2"            ,  "kn");
cr_fields[ 82] = new Array("Hr Windspeed  3"            ,  "kn");
cr_fields[ 83] = new Array("Hr Windspeed  4"            ,  "kn");
cr_fields[ 84] = new Array("Hr Windspeed  5"            ,  "kn");
cr_fields[ 85] = new Array("Hr Windspeed  6"            ,  "kn");
cr_fields[ 86] = new Array("Hr Windspeed  7"            ,  "kn");
cr_fields[ 87] = new Array("Hr Windspeed  8"            ,  "kn");
cr_fields[ 88] = new Array("Hr Windspeed  9"            ,  "kn");
cr_fields[ 89] = new Array("Hr Windspeed 10"            ,  "kn");
cr_fields[ 90] = new Array("Hr Temp  1"                 ,  "c");
cr_fields[ 91] = new Array("Hr Temp  2"                 ,  "c");
cr_fields[ 92] = new Array("Hr Temp  3"                 ,  "c");
cr_fields[ 93] = new Array("Hr Temp  4"                 ,  "c");
cr_fields[ 94] = new Array("Hr Temp  5"                 ,  "c");
cr_fields[ 95] = new Array("Hr Temp  6"                 ,  "c");
cr_fields[ 96] = new Array("Hr Temp  7"                 ,  "c");
cr_fields[ 97] = new Array("Hr Temp  8"                 ,  "c");
cr_fields[ 98] = new Array("Hr Temp  9"                 ,  "c");
cr_fields[ 99] = new Array("Hr Temp 10"                 ,  "c");
cr_fields[100] = new Array("Hr Rain  1"                 ,  "mm");
cr_fields[101] = new Array("Hr Rain  2"                 ,  "mm");
cr_fields[102] = new Array("Hr Rain  3"                 ,  "mm");
cr_fields[103] = new Array("Hr Rain  4"                 ,  "mm");
cr_fields[104] = new Array("Hr Rain  5"                 ,  "mm");
cr_fields[105] = new Array("Hr Rain  6"                 ,  "mm");
cr_fields[106] = new Array("Hr Rain  7"                 ,  "mm");
cr_fields[107] = new Array("Hr Rain  8"                 ,  "mm");
cr_fields[108] = new Array("Hr Rain  9"                 ,  "mm");
cr_fields[109] = new Array("Hr Rain 10"                 ,  "mm");
cr_fields[110] = new Array("Max Heat Index"             ,  "c");
cr_fields[111] = new Array("Min Heat Index"             ,  "c");
cr_fields[112] = new Array("Heat Index"                 ,  "c");
cr_fields[113] = new Array("Max Avg Speed"              ,  "kn");
cr_fields[114] = new Array("Lightning Last Min"         ,  "Number");
cr_fields[115] = new Array("Lightning Last Time Hour"   ,  "Time");
cr_fields[116] = new Array("Lightning Last Time Min"    ,  "Time");
cr_fields[117] = new Array("Wind Avg Dir"               ,  "deg");
cr_fields[118] = new Array("Nexstorm Dist"              ,  "");
cr_fields[119] = new Array("NextStorm Bearing"          ,  "deg");
cr_fields[120] = new Array("Extra Temp Sensor 7"        ,  "c");
cr_fields[121] = new Array("Extra Temp Sensor 8"        ,  "c");
cr_fields[122] = new Array("Extra Hum Sensor 4"         ,  "%");
cr_fields[123] = new Array("Extra Hum Sensor 5"         ,  "%");
cr_fields[124] = new Array("Extra Hum Sensor 6"         ,  "%");
cr_fields[125] = new Array("Extra Hum Sensor 7"         ,  "%");
cr_fields[126] = new Array("Extra Hum Sensor 8"         ,  "%");
cr_fields[127] = new Array("SolarWM"                    ,  "W/m&sup2;");
cr_fields[128] = new Array("Max Indoor Temp"            ,  "c");
cr_fields[129] = new Array("Min Indoor Temp"            ,  "c");
cr_fields[130] = new Array("Apparent Temp"              ,  "c");
cr_fields[131] = new Array("Max Baro"                   ,  "hpa");
cr_fields[132] = new Array("Min Baro"                   ,  "hpa");
cr_fields[133] = new Array("Max Gust"                   ,  "kn");
cr_fields[134] = new Array("Max Gust Last Hour Time"    ,  "Time");
cr_fields[135] = new Array("Max Gust Today Time"        ,  "Time");
cr_fields[136] = new Array("Max Apparent Temp"          ,  "c");
cr_fields[137] = new Array("Min Apparent Temp"          ,  "c");
cr_fields[138] = new Array("Max Dewpt"                  ,  "c");
cr_fields[139] = new Array("Min Dewpt"                  ,  "c");
cr_fields[140] = new Array("Max Gust In Lst Min"        ,  "kn");
cr_fields[141] = new Array("Current Year"               ,  "Time");
cr_fields[142] = new Array("THSWS"                      ,  "");
cr_fields[143] = new Array("Temp Trend (Logic)"         ,  "bool");
cr_fields[144] = new Array("Humidity Trend (Logic)"     ,  "bool");
cr_fields[145] = new Array("Humidex Trend (Logic)"      ,  "bool");
cr_fields[146] = new Array("Hr Wind Dir  1"             ,  "deg");
cr_fields[147] = new Array("Hr Wind Dir  2"             ,  "deg");
cr_fields[148] = new Array("Hr Wind Dir  3"             ,  "deg");
cr_fields[149] = new Array("Hr Wind Dir  4"             ,  "deg");
cr_fields[150] = new Array("Hr Wind Dir  5"             ,  "deg");
cr_fields[151] = new Array("Hr Wind Dir  6"             ,  "deg");
cr_fields[152] = new Array("Hr Wind Dir  7"             ,  "deg");
cr_fields[153] = new Array("Hr Wind Dir  8"             ,  "deg");
cr_fields[154] = new Array("Hr Wind Dir  9"             ,  "deg");
cr_fields[155] = new Array("Hr Wind Dir 10"             ,  "deg");
cr_fields[156] = new Array("Leaf Wetness"               ,  "c");
cr_fields[157] = new Array("Soil moisture"              ,  "c");
cr_fields[158] = new Array("10 Min Avg Wind Speed"      ,  "kn");
cr_fields[159] = new Array("Wet bulb temperature"       ,  "c");
cr_fields[160] = new Array("Latitude (- = S Hemispher)" ,  "");
cr_fields[161] = new Array("Longitude (- EAST of GMT)"  ,  "");
cr_fields[162] = new Array("9am reset rain total"       ,  "mm");
cr_fields[163] = new Array("Midnight reset rain total"  ,  "mm");
cr_fields[164] = new Array("Record End (WD Ver)"        ,  "");

// where does hourly graph data start, en how many are there
var ghsettings = new Array;
ghsettings["wind_speed"] = [[   1, 60 ]];
ghsettings["wind_gust"]  = [[  61, 60 ]];
ghsettings["wind_dir"]   = [[ 121, 60 ]];
ghsettings["temp_out"]   = [[ 181, 60 ]];
ghsettings["humid_out"]  = [[ 241, 60 ]];
ghsettings["baro"]       = [[ 301, 60 ]];
ghsettings["rain"]       = [[ 361, 60 ]];
ghsettings["solar_wm"]   = [[ 421, 60 ]];

// where does daily graph data start, en how many are there
var gdsettings = new Array;
gdsettings["wind_speed"] = [[   1, 20 ], [ 562, 4]];
gdsettings["temp_out"]   = [[  21, 20 ], [ 566, 4]];
gdsettings["rain"]       = [[  41, 20 ], [ 570, 4]];
gdsettings["baro"]       = [[ 439, 20 ], [ 574, 4]];
gdsettings["timestamps"] = [[ 459, 20 ], [ 578, 4]];
gdsettings["solar_wm"]   = [[ 491, 20 ], [ 582, 4]];
gdsettings["solar_uv"]   = [[ 511, 20 ], [ 586, 4]];
gdsettings["wind_dir"]   = [[ 536, 20 ], [ 590, 4]];
gdsettings["humid_out"]  = [[ 611, 20 ], [ 631, 4]];
gdsettings["temp_in"]    = [[ 636, 20 ], [ 656, 4]];

//where does weekly graph data start, en how many are there
var gwsettings = new Array;
gwsettings["temp_out"]   = [[ 233, 28 ]];
gwsettings["baro"]       = [[ 261, 28 ]];
gwsettings["humid_out"]  = [[ 289, 28 ]];
gwsettings["wind_dir"]   = [[ 317, 28 ]];
gwsettings["wind_speed"] = [[ 345, 28 ]];
gwsettings["solar_wm"]   = [[ 373, 28 ]];
gwsettings["solar_uv"]   = [[ 401, 28 ]];

//where does monthly graph data start, en how many are there
var gmsettings = new Array;
gmsettings["temp_high"]  = [[   1, 31 ]];
gmsettings["temp_low"]   = [[  32, 31 ]];
gmsettings["rain"]       = [[  63, 31 ]];
gmsettings["baro"]       = [[  94, 31 ]];
gmsettings["wind_speed"] = [[ 125, 31 ]];
gmsettings["wind_dir"]   = [[ 156, 31 ]];
gmsettings["humid_out"]  = [[ 199, 31 ]];
gmsettings["rain_year"]  = [[ 187, 12 ]];

// Graph names mapped to a clientraw field
var grtocr = new Array;
grtocr["wind_speed"] =   1;
grtocr["wind_gust"]  =   2;
grtocr["wind_dir"]   =   3;
grtocr["temp_out"]   =   4;
grtocr["humid_out"]  =   5;
grtocr["baro"]       =   6;
grtocr["rain"]       =   7;
grtocr["solar_wm"]   = 127;
grtocr["solar_uv"]   =  79;
grtocr["temp_in"]    =  12;
grtocr["temp_high"]  =  46;
grtocr["temp_low"]   =  47;
grtocr["rain_year"]  =   7;

// What are the unit names
var unitnames = new Array;
unitnames["c"]    = "&deg;C";
unitnames["f"]    = "&deg;F";
unitnames["kn"]   = "Kn";
unitnames["mph"]  = "mph";
unitnames["kmh"]  = "km/h";
unitnames["ms"]   = "m/s";
unitnames["deg"]  = "&deg;";
unitnames["abbr"] = " ";
unitnames["mm"]   = "mm";
unitnames["in"]   = "in";
unitnames["hpa"]  = "hPa";
unitnames["hg"]   = "Hg";
unitnames["ft"]   = "Ft";
unitnames["m"]    = "m";

// For which field in clientraw do we have which graphs?
var crtogr = new Array;
crtogr[  1] = [
                [ "wind_speed" ],
                [ "wind_speed" ],
                [ "wind_speed" ],
                [ "wind_speed" ]
              ];
crtogr[  2] = [
               [ "wind_gust" ],
               [  ],
               [  ],
               [  ]
             ];
crtogr[  3] = [
               [ "wind_dir" ],
               [ "wind_dir" ],
               [ "wind_dir" ],
               [ "wind_dir" ]
             ];
crtogr[  4] = [
               [ "temp_out" ],
               [ "temp_out" ],
               [ "temp_out" ],
               [ "temp_high", "temp_low" ]
             ];
crtogr[  5] = [
               [ "humid_out" ],
               [ "humid_out" ],
               [ "humid_out" ],
               [ "humid_out" ]
             ];
crtogr[  6] = [
               [ "baro" ],
               [ "baro" ],
               [ "baro" ],
               [ "baro" ]
             ];
crtogr[  7] = [
               [ "rain" ],
               [ "rain" ],
               [  ],
               [ "rain" ]
             ];
crtogr[ 12] = [
               [  ],
               [ "temp_in" ],
               [  ],
               [  ]
             ];
crtogr[ 79] = [
               [  ],
               [ "solar_uv" ],
               [ "solar_uv" ],
               [  ]
             ];
crtogr[127] = [
               [ "solar_wm" ],
               [ "solar_wm" ],
               [ "solar_wm" ],
               [  ]
             ];


var config = 'iwdl_settings.js'
var settings = new Array;
var texts = new Array;
var cr_fieldnames = new Array();
var cr, crh, cre, crd;
var jQT;
var orientation = '0';
var station = 'Weather station';

function crAsyncDone(data, status) {
	var now = new Date();
	now = now.getTime();
	cr = data.split(" ");
	getClientRaw.crlast = now;
	updateiWdl();
}

function AsyncClientRaw() {
	var now = new Date();
	now = now.getTime();
	if (typeof getClientRaw.crlast == 'undefined') getClientRaw.crlast = 0;
	// Don't fetch it more often than once every 5 secs
	if (getClientRaw.crlast + 5000 < now) {
		$.ajax({
	      url: settings["clientraw_dir"] + "/clientraw.txt",
	      async: true,
	      success: crAsyncDone
	     });
	}
}

function makeSyncRequest(url) {
    var data = $.ajax({
      url: url,
      async: false
     }).responseText;

    return data;
}

function loadjsfile(filename){
	var code = makeSyncRequest(filename);
	eval(code);
}

function getClientRaw(files) {
	var now = new Date();
	now = now.getTime();
	for (var i = 0; i < files.length; i++) {
		switch (files[i]) {
		case "cr":
			if (typeof getClientRaw.crlast == 'undefined') getClientRaw.crlast = 0;
			// Don't fetch it more often than once every 5 secs
			if (getClientRaw.crlast + 5000 < now) {
				cr = makeSyncRequest(settings["clientraw_dir"] + "/clientraw.txt").split(" ");
				if (cr[0] != '12345') alert("Cannot read clientraw.txt; make sure the path in iwdl_settings.js is correct");
				getClientRaw.crlast = now;
			}
			break;
		case "ecr":
			if (typeof getClientRaw.ecrlast == 'undefined') getClientRaw.ecrlast = 0;
			// Don't fetch it more often than once every minute
			if (getClientRaw.ecrlast + 60000 < now) {
				cre = makeSyncRequest(settings["clientraw_dir"] + "/clientrawextra.txt").split(" ");
				getClientRaw.ecrlast = now;
			}
			break;
		case "hcr":
			if (typeof getClientRaw.hcrlast == 'undefined') getClientRaw.hcrlast = 0;
			// Don't fetch it more often than once every minute
			if (getClientRaw.hcrlast + 60000 < now) {
				crh = makeSyncRequest(settings["clientraw_dir"] + "/clientrawhour.txt").split(" ");
				getClientRaw.hcrlast = now;
			}
			break;
		case "dcr":
			if (typeof getClientRaw.dcrlast == 'undefined') getClientRaw.dcrlast = 0;
			// Don't fetch it more often than once every 5 minutes
			if (getClientRaw.dcrlast + 300000 < now) {
				crd = makeSyncRequest(settings["clientraw_dir"] + "/clientrawdaily.txt").split(" ");
				getClientRaw.dcrlast = now;
			}
			break;
		}
	}
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function check_convert(val, units) {
	var ret = new Array();
	ret["val"] = val + '';
	ret["units"] = units;
	if (unitnames[units]) ret["units"] = unitnames[units];

	switch (units) {
	case "c":
		if (settings["temp"] == "f") {
			ret["val"] = roundNumber((1.8 * val) + 32.0, 1);
			if (unitnames["f"]) ret["units"] = unitnames["f"];
		}
		break;
	case "kn":
		if (settings["wind"] == "mph") {
			ret["val"] = roundNumber(1.1507794 * val, 1) + '';
			if (unitnames["mph"]) ret["units"] = unitnames["mph"];
		}
		if (settings["wind"] == "kmh") {
			ret["val"] = roundNumber(1.852 * val, 1) + '';
			if (unitnames["kmh"]) ret["units"] = unitnames["kmh"];
		}
		if (settings["wind"] == "ms") {
			ret["val"] = roundNumber(0.514444 * val, 1) + '';
			if (unitnames["ms"]) ret["units"] = unitnames["ms"];
		}
		break;
	case 'deg':
		if (settings["wdir"] == "abbr") {
			var windlabel = new Array("N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW");
			ret["val"] = windlabel[Math.floor(((parseInt(val) + 11) / 22.5) % 16 )];
			if (texts["wdir_" + ret["val"]]) ret["val"] = texts["wdir_" + ret["val"]];
			if (unitnames["abbr"]) ret["units"] = unitnames["abbr"];
		}
		break;
	case "mm":
		if (settings["rain"] == "in") {
			ret["val"] = roundNumber(0.0393700787 * val, 3) + '';
			if (unitnames["in"]) ret["units"] = unitnames["in"];
		}
		break;
	case "hpa":
		if (settings["baro"] == "hg") {
			ret["val"] = roundNumber(val / 33.86388158, 2) + '';
			if (unitnames["hg"]) ret["units"] = unitnames["hg"];
		}
		break;
	case "ft":
		ret["val"] = (Math.round(val * 1.0).toFixed(0)) + '';
		if (settings["height"] == "m") {
			ret["val"] = (Math.round(val / 3.2808399).toFixed(0)) + '';
			if (unitnames["m"]) ret["units"] = unitnames["m"];
		}
		break;
	}
	return ret;
}

function updateiWdl() {
    getClientRaw(["cr"]);

    var station_time = cr[32].replace(/_/g, " ").split("-");
    var mystation, time;
    if (station_time.length > 2) {
    	time = station_time[station_time.length - 1];
    	delete station_time[station_time.length - 1];
    	mystation = station_time.join("-").replace(/-$/, "");
    } else {
        mystation = station_time[0];
        time = station_time[1];
    }

    if (mystation) station = mystation;

    if ($("#hm_station").html() != station) $("[iwdltxt=hm_station]").html(station);

    var descr = cr[49].replace(/_/g, " ");
    // Extra Tag Cleanup
    descr = descr.replace(/Ã¸/g,'ø');
    descr = descr.replace(/Ã¥/g,'å');
    descr = descr.replace(/Ã¦/g,'æ');

    // Translate
    var descrs = descr.split("/");
    if (descrs[0]) {
        if (texts[descrs[0]])
            descr = texts[descrs[0]];
        else
            descr = descrs[0];
    }
    if (descrs[1]) {
        if (texts[descrs[1]])
            time += " / " + texts[descrs[1]];
        else
            time += " / " + descrs[1];
    }
    
    if ($("#il_time").html() != time) $("#il_time").html(time);
    if ($("#il_descr").html() != descr) $("#il_descr").html(descr);

    if ($("#hm_time").html() != time) $("#hm_time").html(time);
    if ($("#hm_descr").html() != descr) $("#hm_descr").html(descr);

    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var newval = conv["val"];
        var val = $("#cr_" + fields[i]).html();
        if (newval != val) {
            $("#cr_" + fields[i]).html(newval);
        }
    }

    var fields = settings["min_max"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var newval = conv["val"];
        var val = $("#mmcr_" + fields[i]).html();
        if (newval != val) {
            $("#mmcr_" + fields[i]).html(newval);
        }
    }

    var fields = settings["home"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var newval = conv["val"];
        var val = $("#hmcr_" + fields[i]).html();
        if (newval != val) {
            $("#hmcr_" + fields[i]).html(newval);
        }
    }
}

function dispHome() {
    var str = '';
    str += "<table width='100%'>";
    str += "<tr>";
    str += "<td align='center' width='100%' class='head'>";
    str += "<span class='iwdl black' id='hm_time'></span>";
    str += "</td></tr>";
    str += "<tr>";
    str += "<td align='center' width='100%' id='hm_descr' class='head'></td>"; 
    str += "</tr>";
    str += "</table>";

    str += "<br><table width='100%'><tr><td align='center' style='iwdl black w100'>";

    var str2 = "";
    var fields = settings["home"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(0, cr_fields[fields[i]][1]);
        var units = conv["units"];
        if (str2) {
        	if (i % 3 == 0)
        		str2 += "<br>";
        	else
                str2 += "<span class='iwdl black'> / </span>";
        }
        str2 += "<span class='iwdl black' id='hmcr_" + fields[i] + "'></span><span txtunits='" + cr_fields[fields[i]][1] + "' class='iwdl black'>" + units + "</span>";
    }
    str2 += "</td></tr></table>";
    str += str2;
    $("#home_display").html(str);
}

function dispIwdl() {
    var str;
    str = "<ul class='rounded'>";

    str += "<li class='iwdl'>";
    str += "<table width='100%'>";
    str += "<tr>";
    str += "<td align='center' width='100%' class='head'>";
    str += "<span class='iwdl black' id='il_time'></span>";
    str += "</tr>";
    str += "<tr>";
    str += "<td align='center' width='100%' id='il_descr' class='head'></td>"; 
    str += "</tr>";
    str += "</table>";
    str += "</li>";

    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(0, cr_fields[fields[i]][1]);
        var units = conv["units"];

        if (crtogr[fields[i]]) {
            str += "<li class='arrow iwdl'>";
        	str += "<a href='#graphs_" + fields[i] + "'>";
	    } else {
	        str += "<li class='iwdl'>";
	    }
        str += "<table width='100%'><tr>" + 
                       "<td class='iwdl left  w50'><span crtxt='" + fields[i] + "'>" + cr_fieldnames[fields[i]] + "</span></td>" +
                       "<td class='iwdl right w25 black'><span id='cr_" + fields[i] + "'></span></td>" +
                       "<td class='iwdl left  w25' txtunits='" + cr_fields[fields[i]][1] + "'>" + units + "</td>" +
                    "</tr></table>";
        if (crtogr[fields[i]]) str += "</a>";
        str += "</li>";
    }
    str += "</ul>";

    return str;
}

function dispMinMax() {
    var str;
    str = "<ul class='rounded'>";

    var station_time = cr[32].split("-");

    str += "<li class='iwdl'>";
    str += "<table width='100%'>";
    str += "  <tr>";
    str += "    <td align='center' width='100%'>" + station_time[0].replace(/_/g, " ") + "</td>"; 
    str += "  </tr>";
    str += "</table>";
    str += "</li>";

    var fields = settings["min_max"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(0, cr_fields[fields[i]][1]);
        var units = conv["units"];
        str += "<li class='iwdl'>";
        str += "<table width='100%'>";
        str += "  <tr>";
        str += "    <td align='left'  class='iwdl left  w50'><span crtxt='" + fields[i] + "'>" + cr_fieldnames[fields[i]] + "</span></td>"; 
        str += "    <td align='right' class='iwdl right w25 black'><span id='mmcr_" + fields[i] + "'></span>";
        str += "    <td align='left'  class='iwdl left  w25' txtunits='" + cr_fields[fields[i]][1] + "'> " + units + "</td>";
        str += "  </tr>";
        str += "</table>";
        str += "</li>";
    }
    str += "</ul>";
    return str;
}

function dispSettings() {
	var str = '';
	var selected;

	str += "<form><ul class='edit rounded'>"
	str += "<h1 iwdltxt='settings'>" + texts["settings"] + "</h1>";

    str += "<li class='arrow'><select id='settings_temp' onChange='javascript: settingsChange(\"temp\", \"settings_temp\")'>";
    if (settings["temp"] == "c") selected = 'selected'; else selected = '';
    str += "<option value='c'" + selected + ">"    + texts["set_temp"] + ": &deg;C</option>";
    if (settings["temp"] == "f") selected = 'selected'; else selected = '';
	str += "<option value='f'" + selected + ">"    + texts["set_temp"] + ": &deg;F</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_wind' onChange='javascript: settingsChange(\"wind\", \"settings_wind\")'>";
    if (settings["wind"] == "kn") selected = 'selected'; else selected = '';
	str += "<option value='kn'" + selected + ">"   + texts["set_wind"] + ": kn</option>";
    if (settings["wind"] == "kmh") selected = 'selected'; else selected = '';
	str += "<option value='kmh'" + selected + ">"  + texts["set_wind"] + ": km/h</option>";
    if (settings["wind"] == "mph") selected = 'selected'; else selected = '';
	str += "<option value='mph'" + selected + ">"  + texts["set_wind"] + ": mp/h</option>";
    if (settings["wind"] == "ms") selected = 'selected'; else selected = '';
	str += "<option value='ms'" + selected + ">"   + texts["set_wind"] + ": m/s</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_wdir' onChange='javascript: settingsChange(\"wdir\", \"settings_wdir\")'>";
    if (settings["wdir"] == "deg") selected = 'selected'; else selected = '';
	str += "<option value='deg'" + selected + ">"  + texts["set_wdir"] + ": &deg;</option>";
    if (settings["wdir"] == "abbr") selected = 'selected'; else selected = '';
	str += "<option value='abbr'" + selected + ">" + texts["set_wdir"] + ": abbr</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_rain' onChange='javascript: settingsChange(\"rain\", \"settings_rain\")'>";
    if (settings["rain"] == "mm") selected = 'selected'; else selected = '';
	str += "<option value='mm'" + selected + ">"  + texts["set_rain"] + ": mm</option>";
    if (settings["rain"] == "in") selected = 'selected'; else selected = '';
	str += "<option value='in'" + selected + ">"  + texts["set_rain"] + ": inch</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_baro' onChange='javascript: settingsChange(\"baro\", \"settings_baro\")'>";
    if (settings["baro"] == "hpa") selected = 'selected'; else selected = '';
	str += "<option value='hpa'" + selected + ">" + texts["set_baro"] + ": hpa</option>";
    if (settings["baro"] == "hg") selected = 'selected'; else selected = '';
	str += "<option value='hg'" + selected + ">"  + texts["set_baro"] + ": hg</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_height' onChange='javascript: settingsChange(\"height\", \"settings_height\")'>";
    if (settings["height"] == "ft") selected = 'selected'; else selected = '';
	str += "<option value='ft'" + selected + ">"  + texts["set_height"] + ": ft</option>";
    if (settings["height"] == "m") selected = 'selected'; else selected = '';
	str += "<option value='m'" + selected + ">"   + texts["set_height"] + ": m</option>";
	str += "</select></li>";

    str += "<li class='arrow'><select id='settings_lang' onChange='javascript: settingsChange(\"lang\", \"settings_lang\")'>";
    if (settings["lang"] == "en") selected = 'selected'; else selected = '';
	str += "<option value='en'" + selected + ">"  + texts["set_lang"] + ": en</option>";
    if (settings["lang"] == "nl") selected = 'selected'; else selected = '';
	str += "<option value='nl'" + selected + ">"  + texts["set_lang"] + ": nl</option>";
    if (settings["lang"] == "dk") selected = 'selected'; else selected = '';
	str += "<option value='dk'" + selected + ">"  + texts["set_lang"] + ": dk</option>";
    if (settings["lang"] == "no") selected = 'selected'; else selected = '';
	str += "<option value='no'" + selected + ">"  + texts["set_lang"] + ": no</option>";
    if (settings["lang"] == "se") selected = 'selected'; else selected = '';
	str += "<option value='se'" + selected + ">"  + texts["set_lang"] + ": se</option>";
	str += "</select></li>";

    str += "</ul></form>";
    return str;
	
}

function dispGraph(grtype, graph) {
	var gr, cr, type;
	var ticks = null;
	switch (grtype.substr(0,1)) {
	case "h":
		type = 'h';
		grlist = ghsettings[graph];
	    getClientRaw(["hcr"]);
		cr = crh;
		break;
	case "d":
		type = 'd';
		grlist = gdsettings[graph];
	    getClientRaw(["ecr"]);
		cr = cre;
		break;
	case "w":
		type = 'w';
		grlist = gwsettings[graph];
	    getClientRaw(["dcr"]);
		cr = crd;
		break;
	case "m":
		type = 'm';
		grlist = gmsettings[graph];
	    getClientRaw(["dcr"]);
		cr = crd;
		break;
	}

    var width = "280px";
    if (orientation != 0) width = "430px";
    $("#graphsinfo" + "_" + grtype + "_graph_" + graph).css({'width': width});

    // Make the graph
    var units = cr_fields[grtocr[graph]][1];

    // make single array
    var s = 0;
    var vals = new Array;
    for (k = 0; k < grlist.length; k++) {
        var gr = grlist[k];
        var start = gr[0];
        var length = gr[1];
        for (var l = start; l < start+length; l++) {
        	// don't convert if units is abbr
        	if (units == 'deg')
        		vals[s] = cr[l];
        	else {
	        	var conv = check_convert(cr[l], units);
	            vals[s] = conv["val"];
        	}
            s++;
        }
    }
    var d1 = [];
    for (var j = 0, len = vals.length; j < len; j++) {
    	if (type == 'w')
    		d1.push([(j - len + 1)/4, vals[j]]);
    	else
    		d1.push([j - len + 1, vals[j]]);
    }

    var options = {
    	xaxis: {
    	   ticks: ticks
        }
    }

    $.plot($("#graphsinfo" + "_" + grtype + "_graph_" + graph), [ d1 ], options);
}

function getGraphDescr(graph, type) {
	var descr = "<span crtxt='" + grtocr[graph] + "'>" + cr_fieldnames[grtocr[graph]] + "</span>" +
	            " <span txtunits='" + cr_fields[grtocr[graph]][1] + "'>" + check_convert(0, cr_fields[grtocr[graph]][1])["units"] + "</span>";
	switch (type) {
	case "h": descr += " (<span iwdltxt='last_60m'>" + texts["last_60m"] + "</span>)"; break;
	case "d": descr += " (<span iwdltxt='last_24h'>" + texts["last_24h"] + "</span>)"; break;
	case "w": descr += " (<span iwdltxt='last_7d'>"  + texts["last_7d"] + "</span>)"; break;
	case "m":
		if (graph == "rain_year")
			descr += " (<span iwdltxt='last_12m'>" + texts["last_12m"] + "</span>)";
		else
			descr += " (<span iwdltxt='last_31d'>" + texts["last_31d"] + "</span>)";
		break;
	}
	return descr;
}

function graphTimeTpl(graphs, type) {
    var str = "<ul class='rounded'>";
    for (var i = 0, len=graphs.length; i < len; ++i) {
        str += "<li class='iwdl'>" + getGraphDescr(graphs[i], type) + "<br>";
    	str += "<div id='graphsinfo" + "_" + type + "_graph_" + graphs[i] + "' style='width:280px;height:100px;'></div>";
        str += "</li>";
    }
    str += "</ul>";
    return str;
}

function graphTypeTpl(type) {
    var graphs = crtogr[type];
    var str = "<ul class='rounded'>";
    for (var i = 0, ilen=graphs.length; i < ilen; ++i) {
        for (var j = 0, jlen=graphs[i].length; j < jlen; ++j) {
        	if (graphs[i][j]) {
        		var t;
        		if (i == 0) t = "h";
        		if (i == 1) t = "d";
        		if (i == 2) t = "w";
        		if (i == 3) t = "m";
		        str += "<li class='iwdl'>" + getGraphDescr(graphs[i][j], t) + "<br>";
		    	str += "<div id='graphsinfo" + "_" + t + i + j + "_graph_" + graphs[i][j] + "' style='width:280px;height:100px;'></div>";
		        str += "</li>";
        	}
        }
    }
    str += "</ul>";
    return str;
}

function dispTimeGraphs(type) {
	var graphs = new Array();
	switch (type) {
	case "h": graphs = settings["hour_graphs"];  break;
	case "d": graphs = settings["day_graphs"];   break;
	case "w": graphs = settings["week_graphs"];  break;
	case "m": graphs = settings["month_graphs"]; break;
	}
    for (var i = 0, len=graphs.length; i < len; ++i) {
        dispGraph(type, graphs[i]);
    }
}

function dispTypeGraphs(type) {
    var graphs = crtogr[type];
    if (graphs[0][0]) dispGraph("h00", graphs[0][0]);
    if (graphs[1][0]) dispGraph("d10", graphs[1][0]);
    if (graphs[2][0]) dispGraph("w20", graphs[2][0]);
    if (graphs[3][0]) dispGraph("m30", graphs[3][0]);
    if (graphs[3][1]) dispGraph("m31", graphs[3][1]);
}

function setTexts(what) {
	if (what == 'iwdl' || what == 'all') {
	    for (var t in texts ){
	        $("[iwdltxt=" + t + "]").html(texts[t]);
	    }
	}

	if (what == 'cr' || what == 'all') {
	    var done = new Array;
	    for (var i = 0, len = settings["home"].length; i < len; ++i) {
	    	done[i] = 1;
	    	$("[crtxt=" + i + "]").html(cr_fieldnames[i]);
	    }
	    for (var i = 0, len = settings["live_screen"].length; i < len; ++i) {
	    	if (!done[i]) {
	    		$("[crtxt=" + i + "]").html(cr_fieldnames[i]);
	    		done[i] = 1;
	    	}
	    }
	    for (var i = 0, len = settings["min_max"].length; i < len; ++i) {
	    	if (!done[i]) {
	    		$("[crtxt=" + i + "]").html(cr_fieldnames[i]);
	    		done[i] = 1;
	    	}
	    }
	}
}

function setUnits() {
    var conv;
    var lst = new Array('c', 'kn', 'deg', 'hpa', 'mm', 'ft');
    for (i = 0; i < lst.length; i++) {
	    conv = check_convert(0, lst[i]);
	    $("[txtunits=" + lst[i] + "]").html(conv["units"]);
    }
}

function addDiv(name, content) {
	var dv = '';
	dv += "<div id='" + name + "'>";
    dv += "<div class='toolbar'>";
    dv += "<h1>" + station + "</h1>";
    dv += "<a href='#' class='back' iwdltxt='back'>Back</a>";
    dv += "</div>";
    dv += content;
    dv += "</div>";
    $("#body").append(dv);
}

function localiser() {
    if ($("#map_text").html()) return;

    var lng = 0;
	var lat = 0;
	if (cr[160] == '0' && cr[161] == '0') {
		if (settings['longitude']) lng = -settings['longitude'];
		if (settings['latitude'])  lat = settings['latitude'];
	} else {
		lng = -(parseFloat(cr[161]));
		lat = parseFloat(cr[160]);
	}

	if (lng || lat) {
	    var myLatlng = new google.maps.LatLng(lat, lng);
	    var myOptions = {
	      zoom: 5,
	      center: myLatlng,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	    var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: station
	    });

	    var geocoder = new google.maps.Geocoder();
	    var latlng = new google.maps.LatLng(lat, lng);
	    if (geocoder) {
	        geocoder.geocode({'latLng': latlng}, function(results, status) {
	          if (status == google.maps.GeocoderStatus.OK) {
	            if (results[3]) {
                  $("#map_text").html("<center>" + texts["station_location"] + ":<br>" +results[3].formatted_address + "</center>");
	            }
	          } else {
	          }
	        });
	    }
	} else {
		$("#map_canvas").html(texts["unknown_location"]);
	}
}

function settingsChange(which, newval) {
	var nw = $("#" + newval).val();
	settings[which] = nw;
	if (navigator.userAgent.toLowerCase().indexOf('iphone') != -1) {
		jQT.dbDeleteRow("settings", "setting", "'" + which + "'");
		jQT.dbInsertRows({"addRow": [ { "table": "settings", "property": [ { "name": "setting", value: which }, { "name": "value", "value": nw } ] } ] });
    }
	if (which == "lang") {
    	// Load language file
        loadjsfile("iwdl_lang_" + settings["lang"] + ".js");
        setTexts('all');
        $("#settings_content").html(dispSettings());
	}
	setUnits();
	updateiWdl();
}

function startIwdl() {
    jQT = new $.jQTouch({
        addGlossToIcon: false,
        startupScreen: 'iwdl_startup.png',
        statusBar: 'black',
    });
    $(document).ready(function(e){
    	if (!settings["clientraw_dir"]) {
    		alert("No iwdl_settings.js, please rename iwdl_settings.js.sample to iwdl_settings.js and make necessary changes");
    	}
    	if (navigator.userAgent.toLowerCase().indexOf('iphone') != -1) {
	    	// Open database
	    	jQT.dbOpen("iwdl", "1.0","Settings", 5000);
	    	jQT.dbCreateTables({ "createTables" : [ { "table": "settings", "property": [ {"name": "setting", "type": "text"},
	    	                                                                             {"name": "value", "type": "text" } ] } ] } );
	    	jQT.dbSelectAll("settings", function(result) {
	    		for (var i = 0; i < result.rows.length; i++) {
	    			var row = result.rows.item(i);
	    			if (row['setting'] == "lang" && settings["lang"] != row['value']) {
	    			    settings[row['setting']] = row['value'];
	    		    	// Load language file
	    		        loadjsfile("iwdl_lang_" + settings["lang"] + ".js");
	    		        setTexts('all');
	    			} else {
	    			    settings[row['setting']] = row['value'];
	    			}
	    		}
	    		setUnits();
	    		updateiWdl();
	            addDiv("settings", "<div id='settings_content'>" + dispSettings() + "</div>");
	    	});
    	} else {
        	// Load language file
            loadjsfile("iwdl_lang_" + settings["lang"] + ".js"); 
            addDiv("settings", "<div id='settings_content'>" + dispSettings() + "</div>");
    	}

    	// Load language file
        loadjsfile("iwdl_lang_" + settings["lang"] + ".js"); 

        getClientRaw(["cr"]);
        dispHome();
        updateiWdl();

        addDiv("live_weather", dispIwdl());
        addDiv("min_max",      dispMinMax());

		setUnits();
        updateiWdl();
 
        if (document.height >= 450) {
        	$("#filler").css({'height': 49 });
        } else {
        	$("#filler").css({'height': 8 });
        }
        
        $(document).everyTime(settings["refresh"] + "s", "iwdlTimer", function(i) { updateiWdl(); }, settings["num_refresh"]);

        var lst = ["hour", "day", "week", "month"];
        for (var i = 0; i < lst.length; i++) {
        	var tm = lst[i];
            addDiv(tm, graphTimeTpl(settings[tm + "_graphs"],  tm.substr(0, 1)));
        	$("#" + tm).bind('pageAnimationEnd', function(event, info){
                if (info.direction == 'in') dispTimeGraphs($(this).attr("id").substr(0, 1));
                if (info.direction == 'in') $(document).stopTime("iwdlTimer");
            });
        };

        for (var i = 0; i < settings["live_screen"].length; i++) {
        	var gr = settings["live_screen"][i];
            if (crtogr[gr]) {
	            addDiv("graphs_" + gr, graphTypeTpl(gr));
	        	$("#graphs_" + gr).bind('pageAnimationEnd', function(event, info){
	                if (info.direction == 'in') dispTypeGraphs($(this).attr("id").replace(/graphs_/, ""));
	                if (info.direction == 'in') $(document).stopTime("iwdlTimer");
	            });
            }
        }

        $('#live_weather').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
            	AsyncClientRaw();
            	$(document).stopTime("iwdlTimer");
                $(document).everyTime(settings["refresh"] + "s", "iwdlTimer", function(i) { AsyncClientRaw(); }, settings["num_refresh"]);
            }
        });
        $('#home').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
            	AsyncClientRaw();
            	$(document).stopTime("iwdlTimer");
            	$(document).everyTime(settings["refresh"] + "s", "iwdlTimer", function(i) { AsyncClientRaw(); }, settings["num_refresh"]);
            }
        });

        setTexts('iwdl');

        $(function(){
            $('body').bind('turn', function(event, info){
            	  var curr = $(".current").attr("id");
           		  switch (curr) {
           		  case "hour"      : ;
           		  case "day"       : ;
           		  case "week"      : ;
           		  case "month"     : dispTimeGraphs(curr.substr(0, 1));   break;
           		  case "graphs_1"  : ;
           		  case "graphs_2"  : ;
           		  case "graphs_3"  : ;
           		  case "graphs_4"  : ;
           		  case "graphs_5"  : ;
           		  case "graphs_6"  : ;
           		  case "graphs_7"  : ;
           		  case "graphs_12" : ;
           		  case "graphs_79" : ;
           		  case "graphs_127": dispTypeGraphs(curr.replace(/graphs_/, "")); break;
            	  }
            });
            
        });

        $('#map').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                localiser();
            }
        });
    });
}

startIwdl();
