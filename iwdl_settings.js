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
// Version 0.1
//

// Where are the clientraw files
settings["clientraw_dir"] = "/iwdl";

//Refresh period for live weather in seconds; 15 secs x 120 times = 30 minutes
//The number of refreshes is limited to prevent draining the battery if the page is still
//active in safari (even when the iPhone is turned off).
settings["refresh"]     =  "15";
settings["num_refresh"] = "120";

//Language to use; a file named iwdl_lang_<language>.js must exist.
settings["lang"] = "en";

//What to display on the live screen
//The numbers correspond with the ones in iwdl_lang_en.js
settings["live_screen"] = [4, 5, 6, 7, 12, 13, 79, 127, 73, 3, 1, 2, 44, 45];
settings["min_max"]     = [47, 46, 76, 75, 78, 77, 111, 110, 129, 128, 132, 131, 11, 133, 113];

// Possible settings for hour graphs:
// temp_out, humid_out, rain, baro, wind_speed, wind_dir, solar_wm, solar_uv, temp_in
settings["hour_graphs"] = [ "temp_out", "humid_out", "baro", "rain", 
                            "solar_wm", "solar_uv", "wind_speed", "wind_dir", "temp_in"];



//////////////////////////////////////////////////////////////////////////////////////////////////
//
// No need to edit below
//
//////////////////////////////////////////////////////////////////////////////////////////////////

// where does graph data start, en how many are there
var gsettings = new Array;
gsettings["wind_speed"] = [   1, 20 ];
gsettings["temp_out"]   = [  21, 20 ];
gsettings["rain"]       = [  41, 20 ];
gsettings["baro"]       = [ 439, 20 ];
gsettings["timestamps"] = [ 459, 20 ];
gsettings["solar_wm"]   = [ 491, 20 ];
gsettings["solar_uv"]   = [ 511, 20 ];
gsettings["wind_dir"]   = [ 536, 20 ];
gsettings["humid_out"]  = [ 611, 20 ];
gsettings["temp_in"]    = [ 636, 20 ];
