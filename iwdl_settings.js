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
// Settings for the iWDL iPhone webapp
// By Sietse Visser (sietse@sietse.nl)
// Version 0.6
//

// Where are the clientraw files
settings["clientraw_dir"] = "/iwdl";

//What units to use
//temp:   c f
//wind:   kn mph kmh ms
//rain:   mm in
//baro:   hpa hg
//time:   24 12
//height: ft m
settings["temp"]   = "c";
settings["wind"]   = "kmh";
settings["rain"]   = "mm";
settings["baro"]   = "hpa";
settings["height"] = "ft";
settings["time"]   = "24";

//Language to use; a file named iwdl_lang_<language>.js must exist.
// Possible languages: en nl dk
settings["lang"] = "en";

//Refresh period for live weather in seconds; 15 secs x 120 times = 30 minutes
//The number of refreshes is limited to prevent draining the battery if the page is still
//active in safari (even when the iPhone is turned off).
settings["refresh"]     =  15;
settings["num_refresh"] = 120;

//What to display on the live screen
//The numbers correspond with the ones in iwdl_lang_en.js
settings["home"]        = [4, 5, 6, 7, 3, 1];
settings["live_screen"] = [4, 5, 6, 7, 12, 13, 79, 127, 73, 3, 1, 2, 44, 45];
settings["min_max"]     = [47, 46, 76, 75, 78, 77, 111, 110, 129, 128, 132, 131, 11, 133, 113];

// Possible settings for hour graphs:
// temp_out, humid_out, rain, baro, wind_speed, wind_gust, wind_dir, solar_wm
settings["hour_graphs"] = [ "temp_out", "humid_out", "baro", "rain", "solar_wm",
                            "wind_speed", "wind_gust", "wind_dir" ];

//Possible settings for day graphs:
//temp_out, humid_out, rain, baro, wind_speed, wind_dir, solar_wm, solar_uv, temp_in
settings["day_graphs"] = [ "temp_out", "humid_out", "baro", "rain", "solar_wm", "solar_uv",  
                           "wind_speed", "wind_dir", "temp_in" ];

//Possible settings for week graphs:
//temp_out, humid_out, baro, wind_speed, wind_dir, solar_wm, solar_uv
settings["week_graphs"] = [ "temp_out", "humid_out", "baro", "wind_speed", "wind_dir",
                            "solar_wm", "solar_uv" ];

//Possible settings for month graphs:
//temp_high, temp_low, humid_out, rain, baro, wind_speed, wind_dir, rain_year
settings["month_graphs"] = [ "temp_high", "temp_low", "humid_out", "baro", "rain",
                             "wind_speed", "wind_dir", "rain_year" ];
