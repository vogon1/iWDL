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
// Language file for iWDL
// By Sietse Visser (sietse@sietse.nl)
// Version 0.4
//

texts["about"]          = "About";
texts["live_weather"]   = "Live weather";
texts["min_max"]        = "Min / Max";
texts["back"]           = "Back";
texts["graphs"]         = "Graphs";

texts["graphmenu"]      = "Graph menu";
texts["ghour"]          = "Hour graphs";
texts["gday"]           = "Day graphs";
texts["gweek"]          = "Week graphs";
texts["gmonth"]         = "Month graphs";


texts["grh_wind_speed"] = "Wind speed (last 60 minutes)";
texts["grh_temp_out"]   = "Temp out (last 60 minutes)";
texts["grh_baro"]       = "Barometer (last 60 minutes)";
texts["grh_rain"]       = "Rain (last 60 minutes)";
texts["grh_solar_wm"]   = "Solar WM (last 60 minutes)";
texts["grh_wind_dir"]   = "Wind direction (last 60 minutes)";
texts["grh_wind_gust"]  = "Wind gust (last 60 minutes)";
texts["grh_humid_out"]  = "Humidity out (last 60 minutes)";

texts["grd_wind_speed"] = "Wind speed (last 24 hours)";
texts["grd_temp_out"]   = "Temp out (last 24 hours)";
texts["grd_baro"]       = "Barometer (last 24 hours)";
texts["grd_rain"]       = "Rain (last 24 hours)";
texts["grd_solar_wm"]   = "Solar WM (last 24 hours)";
texts["grd_solar_uv"]   = "Solar UV (last 24 hours)";
texts["grd_wind_dir"]   = "Wind direction (last 24 hours)";
texts["grd_humid_out"]  = "Humidity out (last 24 hours)";
texts["grd_temp_in"]    = "Temp in (last 24 hours)";

texts["grw_temp_out"]   = "Temp out (last 7 days)";
texts["grw_baro"]       = "Barometer (last 7 days)";
texts["grw_humid_out"]  = "Humidity out (last 7 days)";
texts["grw_wind_dir"]   = "Wind direction (last 7 days)";
texts["grw_wind_speed"] = "Wind speed (last 7 days)";
texts["grw_solar_wm"]   = "Solar WM (last 7 days)";
texts["grw_solar_uv"]   = "Solar UV (last 7 days)";

texts["grm_temp_high"]  = "Temp high (last 31 days)";
texts["grm_temp_low"]   = "Temp low (last 31 days)";
texts["grm_baro"]       = "Barometer (last 31 days)";
texts["grm_rain"]       = "Rain (last 31 days)";
texts["grm_wind_speed"] = "Wind speed (last 31 days)";
texts["grm_wind_dir"]   = "Wind direction (last 31 days)";
texts["grm_humid_out"]  = "Humidity out (last 31 days)";
texts["grm_rain_year"]  = "Rain year (last 12 months)";

texts["graphs_wavg"]    = "Graphs avg wind";
texts["graphs_wgust"]   = "Graphs gust wind";
texts["graphs_wdir"]    = "Graphs wind dir";
texts["graphs_tempout"] = "Graphs temp out";
texts["graphs_humout"]  = "Graphs hum out";
texts["graphs_baro"]    = "Graphs baro";
texts["graphs_rain"]    = "Graphs rain";
texts["graphs_tempin"]  = "Graphs temp in";
texts["graphs_solaruv"] = "Graphs solar UV";
texts["graphs_solarwm"] = "Graphs solar WM";


//
// The clientraw fieldlist and the unit type
//
cr_fields[  0] = new Array("Header"                     ,  "");
cr_fields[  1] = new Array("Avg Speed"                  ,  "kn");
cr_fields[  2] = new Array("Gusts"                      ,  "kn");
cr_fields[  3] = new Array("WindDir"                    ,  "&deg;");
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
cr_fields[117] = new Array("Wind Avg Dir"               ,  "&deg;");
cr_fields[118] = new Array("Nexstorm Dist"              ,  "");
cr_fields[119] = new Array("NextStorm Bearing"          ,  "&deg;");
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
cr_fields[135] = new Array("Max Gust Today"             ,  "Time");
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
cr_fields[146] = new Array("Hr Wind Dir  1"             ,  "&deg;");
cr_fields[147] = new Array("Hr Wind Dir  2"             ,  "&deg;");
cr_fields[148] = new Array("Hr Wind Dir  3"             ,  "&deg;");
cr_fields[149] = new Array("Hr Wind Dir  4"             ,  "&deg;");
cr_fields[150] = new Array("Hr Wind Dir  5"             ,  "&deg;");
cr_fields[151] = new Array("Hr Wind Dir  6"             ,  "&deg;");
cr_fields[152] = new Array("Hr Wind Dir  7"             ,  "&deg;");
cr_fields[153] = new Array("Hr Wind Dir  8"             ,  "&deg;");
cr_fields[154] = new Array("Hr Wind Dir  9"             ,  "&deg;");
cr_fields[155] = new Array("Hr Wind Dir 10"             ,  "&deg;");
cr_fields[156] = new Array("Leaf Wetness"               ,  "c");
cr_fields[157] = new Array("Soil moisture"              ,  "c");
cr_fields[158] = new Array("10 Min Avg Wind Speed"      ,  "kn");
cr_fields[159] = new Array("Wet bulb temperature"       ,  "c");
cr_fields[160] = new Array("Latitude (- = S Hemispher)" ,  "");
cr_fields[161] = new Array("Longitude (- EAST of GMT)"  ,  "");
cr_fields[162] = new Array("9am reset rain total"       ,  "mm");
cr_fields[163] = new Array("Midnight reset rain total"  ,  "mm");
cr_fields[164] = new Array("Record End (WD Ver)"        ,  "");
