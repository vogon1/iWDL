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
// Version 1.0
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

var records = new Array;
// order is clientraw field, month, ytd, alltime
records["temp_high"]     = [   4,  61, 187, 313 ];
records["temp_low"]      = [   4,  67, 193, 319 ];
records["wind_avg"]      = [   1, 109, 235, 361 ];
records["wind_gust"]     = [   2,  73, 199, 325 ];
records["rain_rate"]     = [  10,  79, 205, 331 ];
records["daily_rain"]    = [   7,  97, 223, 349 ];
records["hour_rain"]     = [   7, 104, 229, 355 ];
records["baro_low"]      = [   6,  85, 211, 337 ];
records["baro_high"]     = [   6,  91, 217, 343 ];
records["soil_high"]     = [  14, 121, 247, 373 ];
records["soil_low"]      = [  14, 127, 253, 379 ];
records["grass_high"]    = [   4, 181, 307, 433 ];
records["windchill"]     = [  44, 133, 259, 385 ];
records["heatindex"]     = [ 112, 175, 301, 427 ];
records["warmest_day"]   = [   4, 151, 277, 403 ];
records["coldest_night"] = [   4, 157, 283, 409 ];
records["coldest_day"]   = [   4, 163, 289, 415 ];
records["warmest_night"] = [   4, 169, 295, 421 ];
records["solar"]         = [ 127, 660, 672, 684 ];
records["uv"]            = [  79, 666, 678, 690 ];

var record_disp = new Array;
record_disp["temp"]  = [ "temp_high", "temp_low", "warmest_day", "coldest_day", "warmest_night", "coldest_night" ];
record_disp["wind"]  = [ "wind_avg", "wind_gust" ];
record_disp["rain"]  = [ "rain_rate", "hour_rain", "daily_rain" ];
record_disp["baro"]  = [ "baro_high", "baro_low" ];
record_disp["soil"]  = [ "soil_high", "soil_low" ];
record_disp["grass"] = [ "grass_high" ];
record_disp["solar"] = [ "solar" ];
record_disp["uv"]    = [ "uv" ];

var config = 'iwdl_settings.js'
var settings = new Array;
var texts = new Array;
var cr_fieldnames = new Array();
var cr, crh, cre, crd;
var jQT;
var orientation = '0';
var station = 'Weather station';
var isIphone = (navigator.userAgent.toLowerCase().indexOf('iphone') != -1 || navigator.userAgent.toLowerCase().indexOf('ipod') != -1);

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

function getForecast() {
    if ($("#fc").html() != "") return;

    if (settings["forecast"] == "yr.no") {
        var q = "";
        q += "http://query.yahooapis.com/v1/public/yql?q=";
        q += encodeURIComponent("select * from xml where url='http:www.yr.no/sted/" + encodeURI(settings["yr.no"]) + "/forecast.xml'");
        q += "&format=json&callback=?";
        $.getJSON(q, function(fc) {
            var i = 0;
            var date = '';
            var str;
            while (i < 30 && fc.query.results.weatherdata.forecast.tabular.time[i]) {
                var t = fc.query.results.weatherdata.forecast.tabular.time[i];
                var dt = t.from.replace(/T.*/, "");
                var stime = t.from.replace(/.*T/, "");
                var etime = t.to.replace(/.*T/, "");
                var p = t.period;
                var sym = t.symbol.number;
                if (sym.length == 1) sym = '0' + sym;
                var c_temp = check_convert(t.temperature.value, 'c');
                var c_wind = check_convert(t.windSpeed.mps / 0.514444, 'kn');
                var c_wdir = check_convert(t.windDirection.deg, 'deg');
                var c_baro = check_convert(t.pressure.value, 'hpa');
    
                if (i == 0)
                    str = "<table class='w100'><tr><td></td><td></td><td class='center'>" + c_temp.units + "</td><td class='center'>" + 
                      c_wdir.units + "</td><td class='center'>" + c_wind.units + "</td><td class='center'>" + c_baro.units + "</td><td>";

                stime = stime.replace(/:.*$/, "");
                etime = etime.replace(/:.*$/, "");
    
                if (date != dt) {
                	var ndate = dt.replace(/-0/, "-");
                	var sp_date = ndate.split(/-/);
                    var elms = ndate.split(/[- :]/);
                    var jsdt = new Date();
                    jsdt.setFullYear(parseInt(elms[0]));
                    jsdt.setMonth(parseInt(elms[1].replace(/^0/, "")-1));
                    jsdt.setDate(parseInt(elms[2].replace(/^0/, "")));
                    var day = '?';
                    switch (jsdt.getDay()) {
                    case 0: day = texts['Sunday']; break;
                    case 1: day = texts['Monday']; break;
                    case 2: day = texts['Tuesday']; break;
                    case 3: day = texts['Wednesday']; break;
                    case 4: day = texts['Thursday']; break;
                    case 5: day = texts['Friday']; break;
                    case 6: day = texts['Saturday']; break;
                    }

                    var daydate = dt + ' ' + day;
                    switch (settings["date_day"]) {
                    case "day":
                    	daydate = day;
                    	break;
                    case "date":
                    	daydate = dt;
                    	break;
                    case "day-date":
                        daydate = day + ' ' + dt;
                    	break;
                    case "date-day":
                        daydate = dt + ' ' + day;
                    	break;
                    }

                    str += "<tr><td colspan='6' class='iwdl_bg left'>" + daydate + "</tr>";
                    date = dt;
                }
                str += "<tr><td class='iwdl'>" + stime + "-" + etime;
                if (p == "0") { if (sym == "01" || sym == "02" || sym == "03" || sym == "05" || sym == "06" || sym == "07" || sym == "08") sym += "n"; }
                if (p == "1") { if (sym == "01" || sym == "02" || sym == "03" || sym == "05" || sym == "06" || sym == "07" || sym == "08") sym += "d"; }
                if (p == "2") { if (sym == "01" || sym == "02" || sym == "03" || sym == "05" || sym == "06" || sym == "07" || sym == "08") sym += "d"; }
                if (p == "3") { if (sym == "01" || sym == "02" || sym == "03" || sym == "05" || sym == "06" || sym == "07" || sym == "08") sym += "n"; }
                str += "</td>";
                str += "<td><img src='http://fil.nrk.no/yr/grafikk/sym/b38/" + sym + ".png' width='28'></td>";
                str += "<td align='center' class='iwdl black'>" + c_temp.val + "</td>";
                str += "<td align='center' class='iwdl black'>" + c_wdir.val + "</td>";
                str += "<td align='center' class='iwdl black'>" + c_wind.val + "</td>";
                str += "<td align='center' class='iwdl black'>" + c_baro.val + "</td>";
                str += "</tr>";
                i++;
            }
            str += "</table>";
            $("#fc").html(str);
            var link = "<center><a target='_blank' href='" + fc.query.results.weatherdata.credit.link.url + "'>Forecast by yr.no</a>";
            link += " <span class='iwdl'>" + settings["yr.no"] + "</span><br>";
            link += " <span class='iwdl'>" + fc.query.results.weatherdata.meta.lastupdate.replace(/T/, " ") + "</span>";
            link += "</center>";
            $("#fcref").html(link);

            // set background color
            $(".iwdl_bg").css("background", settings["bgcolor"]); 
        });
    } else {
        $("#fc").html("<iframe frameborder='no' scrolling='auto' width='275px' height='200px' src='" + settings["forecast_url"] + "'></iframe>");
        $("#fcref").html("<center>" + settings["forecast_from"] + "</center>");
    }

};

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

    var mystation, time;

    if (settings["station_type"] && settings["station_type"] == 'meteohub') {
    	// station - time is spit by _, not -
        var station_time = cr[32].replace(/_/g, " ").split(" ");
        time = station_time[station_time.length - 1];
        delete station_time[station_time.length - 1];
        mystation = station_time.join("-").replace(/-$/, "");
    } else {
        var station_time = cr[32].replace(/_/g, " ").split("-");
        if (station_time.length > 2) {
            time = station_time[station_time.length - 1];
            delete station_time[station_time.length - 1];
            mystation = station_time.join("-").replace(/-$/, "");
        } else {
            mystation = station_time[0];
            time = station_time[1];
        }
    }

    if (settings["station_name"])
        station = settings["station_name"];
    else
        if (mystation)
            station = mystation;

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

    	if ((fields[i] == 44 || fields[i] == 45) && settings["humchill"] == 'toggle') {
			var t = parseInt(cr[4]);
    		if (fields[i] == 44 && t >= 17) {
    			// toggle to humidex
    			settings["live_screen"][i] = 45;
    			$("[crtxt=44]").attr("crtxt", "45");
    			$("#cr_44").attr("id", "cr_45");
    			$("[crtxt=45]").html(cr_fieldnames[45]);
    		}
    		if (fields[i] == 45 && t < 17) {
    			// toggle to windchill
    			settings["live_screen"][i] = 44;
    			$("[crtxt=45]").attr("crtxt", "44");
    			$("#cr_45").attr("id", "cr_44");
    			$("[crtxt=44]").html(cr_fieldnames[44]);
    		}
    	}

    	if ((fields[i] == 44 || fields[i] == 112) && settings["heatchill"] == 'toggle') {
			var t = parseInt(cr[4]);
    		if (fields[i] == 44 && t >= 17) {
    			// toggle to heatindex
    			settings["live_screen"][i] = 112;
    			$("[crtxt=44]").attr("crtxt", "112");
    			$("#cr_44").attr("id", "cr_112");
    			$("[crtxt=112]").html(cr_fieldnames[112]);
    		}
    		if (fields[i] == 112 && t < 17) {
    			// toggle to windchill
    			settings["live_screen"][i] = 44;
    			$("[crtxt=112]").attr("crtxt", "44");
    			$("#cr_112").attr("id", "cr_44");
    			$("[crtxt=44]").html(cr_fieldnames[44]);
    		}
    	}

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
	// The live field
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

    // Now the toolbar
    var w = 'w33';
    if (settings["radar"]) {
    	addDiv("radar", "<iframe id='radarframe' frameborder='no' scrolling='auto' width='275px' height='200px' src=''></iframe>");
    	w = 'w25';
    }
    if (settings["webcam"]) {
    	addDiv("webcam", "<iframe id='webcamframe' frameborder='no' scrolling='auto' width='275px' height='200px' src=''></iframe>");
    	w = 'w25';
    }
    if (settings["radar"] && settings["webcam"]) w = 'w20';

    str = "<table class='w100'>";
    str += "<tr>";
    str += "<td class='center " + w + "' id='tap_mapbutton'>";
   	str += "<img border='0' src='data:image/png;base64,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%3D'>";
	str += "</td>";
	if (settings["radar"]) {
	    str += "<td class='center " + w + "' id='tap_radarbutton'>";
	   	str += "<img border='0' src='data:image/png;base64,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%3D%3D'>";
		str += "</td>";
	}
	if (settings["webcam"]) {
	    str += "<td class='center " + w + "' id='tap_webcambutton'>";
	   	str += "<img border='0' src='data:image/png;base64,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%3D%3D'>";
		str += "</td>";
	}
	str += "<td class='center " + w + "' id='tap_settings'>";
	str += "<img src='data:image/png;base64,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%3D'>";
	str += "</td>";
	str += "<td class='center " + w + "' id='tap_about'>";
	str += "<img src='data:image/png;base64,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%3D%3D'>";
	str += "</td>";
	str += "</tr>";
	str += "</table>";
	$("#toolbar").append(str);
}

function dispIwdl() {
    var str = '';

    str += "<ul class='rounded'>";

    str += "<li class='iwdl iwdl_bg'>";
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

function dispToday() {
    var str;
    str = "<ul class='rounded'>";

    var station_time = cr[32].split("-");

    str += "<li class='iwdl iwdl_bg'>";
    str += "<table width='100%'>";
    str += "  <tr>";
    str += "    <td width='100%'iwdltxt='rec_today'>Records today</td>"; 
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

function dispRec(which) {
    var str;
    str = "<ul class='rounded'>";
    str += "<li class='iwdl iwdl_bg'>";
    str += "<table width='100%'>";
    str += "  <tr>";
    str += "    <td width='100%' iwdltxt='rec_" + which + "'>" + texts["rec_" + which] + "</td>"; 
    str += "  </tr>";
    str += "</table>";
    str += "</li>";
    str += "</ul>";

    getClientRaw(["cr", "ecr"]);

    var items = settings["records"];
    for ( var i=0, len=items.length; i<len; ++i ) {
        var fields = record_disp[items[i]];
        str += "<ul class='rounded'>";
    	str += "<li class='iwdl'>";
    	str += "<table width='100%'><tr><td class='iwdl iwdl_bg black center' colspan='3'><b>" + texts[items[i]] + "</b></td></tr></table>";
    	str += "</li>";
        for ( var j=0, len2=fields.length; j<len2; ++j ) {
            str += "<li class='iwdl'><table width='100%'>";
        	if (fields[j] == '') {
        		str += "<tr><td class='iwdl w50'>&nbsp;</td><td class='iwdl w25'>&nbsp;</td><td class='iwdl w25'>&nbsp;</td></tr>";
        	} else {
        		var cr_field = records[fields[j]][0];
        		var r_start;
        		switch (which) {
        		  case 'month':   r_start = records[fields[j]][1]; break;
        		  case 'year':    r_start = records[fields[j]][2]; break;
        		  case 'alltime': r_start = records[fields[j]][3]; break;
        		}
                str += "<tr><td class='iwdl black' colspan='3'>";
                switch(fields[j]) {
                  case "temp_high":     str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                  case "temp_low":      str += texts["min"] + " " + cr_fieldnames[cr_field]; break;
                  case "warmest_day":   str += texts["warmest_day"]; break;
                  case "coldest_day":   str += texts["coldest_day"]; break;
                  case "warmest_night": str += texts["warmest_night"]; break;
                  case "coldest_night": str += texts["coldest_night"]; break;
                  case "wind_avg":      str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                  case "wind_avg_dir":  break;
                  case "wind_gust":     str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                  case "wind_gust_dir": break;
                  case "rain_rate":     str += texts["rain_rate"]; break;
                  case "hour_rain":     str += texts["rain_hour"]; break;
                  case "daily_rain":    str += texts["rain_day"]; break;
                  case "baro_high":     str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                  case "baro_low":      str += texts["min"] + " " + cr_fieldnames[cr_field]; break;
                  case "soil_high":     str += texts["max"]; break;
                  case "soil_low":      str += texts["min"]; break;
                  case "grass_high":    str += texts["max"]; break;
                  case "solar":         str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                  case "uv":            str += texts["max"] + " " + cr_fieldnames[cr_field]; break;
                }
                str += "</td></tr>";
                str += "<tr><td class='iwdl w50'>" + cre[r_start+5] + "-"  + cre[r_start+4] + "-" + cre[r_start+3] + " ";
                str += cre[r_start+1] + ":" + cre[r_start+2] + "</td>";
                var conv = check_convert(cre[r_start], cr_fields[cr_field][1]);
                str += "<td class='iwdl w25 right black'>" + conv['val'] + "</td>";
                str += "<td class='iwdl w25'>" + conv['units'] + "</td></tr>";
                str += "</table></li>";
        	}
        }
        str += "</ul>";
    }

    return str;
}

function dispSettings() {
    var str = '';
    var selected;

    str += "<form><ul class='edit rounded'>"
    str += "<li class='iwdl_bg'><h3 iwdltxt='settings'>" + texts["settings"] + "</h3></li>";

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
    for (var i = 0, l = settings["all_langs"].length; i < l; i++) {
    	lang = settings["all_langs"][i];
        if (settings["lang"] == lang) selected = 'selected'; else selected = '';
        str += "<option value='" + lang + "'" + selected + ">"  + texts["set_lang"] + ": " + lang + "</option>";
    }
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

    var width = "292px";
    if (orientation != 0) width = "452px";
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
            // don't convert if units is abbr for degrees
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

    if (graph == 'wind_dir') {
	    options.yaxis = {
	    			min:   0,
	    			max: 360,
	    			ticks: [ [  0, check_convert(  0, "deg").val],
	    			         [ 90, check_convert( 90, "deg").val],
	    			         [180, check_convert(180, "deg").val],
	    			         [270, check_convert(270, "deg").val],
	    			         [360, check_convert(  0, "deg").val]
	    			       ]
	    		}
    } else {
	    if (graph == 'solar_uv' || graph == 'solar_wm' || graph == 'rain' || graph == 'wind_speed' || graph == 'wind_gust')
	    	options.yaxis = { min: 0 };
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
        str += "<li class='iwdl'><table class='w100 iwdl_marpad0'><tr><td class='iwdl_bg iwdl_marpad0'>" + getGraphDescr(graphs[i], type) + "</td></tr></table>";
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
                str += "<li class='iwdl'><table class='w100 iwdl_marpad0'><tr><td class='iwdl_bg iwdl_marpad0'>" + getGraphDescr(graphs[i][j], t) + "</td></tr></table>";
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
        $("[iwdltxt]").each(function() {
            $(this).html(texts[$(this).attr("iwdltxt")]);
        });
        $("#r_today").remove();
        $("#r_month").remove();
        $("#r_year").remove();
        $("#r_alltime").remove();
        addDiv("r_today",      dispToday());
        addDiv("r_month",      dispRec('month'));
        addDiv("r_year",       dispRec('year'));
        addDiv("r_alltime",    dispRec('alltime'));
    }

    if (what == 'cr' || what == 'all') {
        var done = new Array;
        for (var i = 0, len = settings["home"].length; i < len; ++i) {
            done[settings["home"][i]] = 1;
            $("[crtxt=" + settings["home"][i] + "]").html(cr_fieldnames[settings["home"][i]]);
        }
        for (var i = 0, len = settings["live_screen"].length; i < len; ++i) {
            if (!done[settings["live_screen"][i]]) {
                $("[crtxt=" + settings["live_screen"][i] + "]").html(cr_fieldnames[settings["live_screen"][i]]);
                done[settings["live_screen"][i]] = 1;
            }
        }
        for (var i = 0, len = settings["min_max"].length; i < len; ++i) {
            if (!done[settings["min_max"][i]]) {
                $("[crtxt=" + settings["min_max"][i] + "]").html(cr_fieldnames[settings["min_max"][i]]);
                done[settings["min_max"][i]] = 1;
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
    
    // Meteohub uses - for east of GMT, Weather Display uses - for west of GMT
    if (settings['longitude']) {
    	if (settings["station_type"] && settings["station_type"] == 'meteohub')
    		lng = settings['longitude'];
    	else
    		lng = -settings['longitude'];
        lat = settings['latitude'];
    } else {
    	if (settings["station_type"] && settings["station_type"] == 'meteohub')
    		lng = parseFloat(cr[161]);
    	else
    		lng = -(parseFloat(cr[161]));
        lat = parseFloat(cr[160]);
    }

    if (lng || lat || settings["location"]) {
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

        if (!settings["location"]) {
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(lat, lng);
            if (geocoder) {
                geocoder.geocode({'latLng': latlng}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                      $("#map_text").html("<center>" + texts["station_location"] + ":<br>" +results[1].formatted_address + "</center>");
                    }
                  } else {
                      $("#map_text").html("<center>" + texts["station_location"] + ":<br>" + " ( not found ) " + "</center>");
                  }
                });
            }
        } else {
            $("#map_text").html("<center>" + settings["location"] + "</center>");
        }
    } else {
        $("#map_canvas").html(texts["unknown_location"]);
    }
}

function settingsChange(which, newval) {
    var nw = $("#" + newval).val();
    settings[which] = nw;
    if (isIphone) {
        jQT.dbDeleteRow("settings", "setting", "'" + which + "'");
        jQT.dbInsertRows({"addRow": [ { "table": "settings", "property": [ { "name": "setting", value: which }, { "name": "value", "value": nw } ] } ] });
    }
    if (which == "lang") {
        // Load language file
        loadjsfile("iwdl_lang_" + settings["lang"] + ".js");
        setTexts('all');
        $("#settings_content").html(dispSettings());
    }
    $("#fc").html("");
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
        updateiWdl();
        if (isIphone) {
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
                addDiv("settings", "<div id='settings_content'>" + dispSettings() + "</div>");
            });
        } else {
            // Load language file
            loadjsfile("iwdl_lang_" + settings["lang"] + ".js"); 
            addDiv("settings", "<div id='settings_content'>" + dispSettings() + "</div>");
        }

        // Load language file
        loadjsfile("iwdl_lang_" + settings["lang"] + ".js"); 

        getClientRaw(["cr", "ecr"]);
        dispHome();
        updateiWdl();

        addDiv("live_weather", dispIwdl());
        addDiv("r_today",      dispToday());
        addDiv("r_month",      dispRec('month'));
        addDiv("r_year",       dispRec('year'));
        addDiv("r_alltime",    dispRec('alltime'));

        setUnits();
        updateiWdl();
 
        if (document.height >= 460) {
            $("#filler").css({'height': 51 });
        } else {
            $("#filler").css({'height': 7 });
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

        $('#forecast').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                $(document).stopTime("iwdlTimer");
                getForecast();
            }
        });

        $('#radar').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                $(document).stopTime("iwdlTimer");
                $("#radarframe").attr("src", settings["radar"]);
            }
        });

        $('#webcam').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                $(document).stopTime("iwdlTimer");
                $("#webcamframe").attr("src", settings["webcam"]);
            }
        });

        $("#tap_mapbutton").bind('click', function(event) {
            $(document).stopTime("iwdlTimer");
            jQT.goTo("#map", "slideup");
        });
        
        $("#tap_radarbutton").bind('click', function(event) {
            $(document).stopTime("iwdlTimer");
            jQT.goTo("#radar", "slideup");
        });
        
        $("#tap_webcambutton").bind('click', function(event) {
            $(document).stopTime("iwdlTimer");
            jQT.goTo("#webcam", "slideup");
        });
        
        $("#tap_settings").bind('click', function(event) {
            $(document).stopTime("iwdlTimer");
            jQT.goTo("#settings", "slideup");
        });
        
        $("#tap_about").bind('click', function(event) {
            $(document).stopTime("iwdlTimer");
            jQT.goTo("#about", "swap");
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

        // Set bg color
        $(".iwdl_bg").css("background", settings["bgcolor"]);
    });
}

startIwdl();
