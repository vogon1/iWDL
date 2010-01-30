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
// Version 0.4
//


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
unitnames["mph"]  = "mi/h";
unitnames["kmh"]  = "km/h";
unitnames["ms"]   = "m/s";
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
var cr_fields = new Array;
var texts = new Array;
var cr, crh, cre, crd;

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

function getClientRaw(file) {
    var cr = makeSyncRequest(file);
    cr = cr.split(' ');
    if (cr[0] != '12345') return false;

    return cr;
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function check_convert(val, units) {
	var ret = new Array();
	ret["val"] = val;
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
			ret["val"] = roundNumber(1.1507794 * val, 1);
			if (unitnames["mph"]) ret["units"] = unitnames["mph"];
		}
		if (settings["wind"] == "kmh") {
			ret["val"] = roundNumber(1.852 * val, 1);
			if (unitnames["kmh"]) ret["units"] = unitnames["kmh"];
		}
		if (settings["wind"] == "ms") {
			ret["val"] = roundNumber(1.852 * 3600 / 1000 * val, 1);
			if (unitnames["ms"]) ret["units"] = unitnames["ms"];
		}
		break;
	case "mm":
		if (settings["rain"] == "in") {
			ret["val"] = roundNumber(0.0393700787 * val, 3);
			if (unitnames["in"]) ret["units"] = unitnames["in"];
		}
		break;
	case "hpa":
		if (settings["baro"] == "hg") {
			ret["val"] = roundNumber(val / 33.86388158, 2);
			if (unitnames["hg"]) ret["units"] = unitnames["hg"];
		}
		break;
	case "ft":
		ret["val"] = (Math.round(val * 1.0).toFixed(0));
		if (settings["height"] == "m") {
			ret["val"] = (Math.round(val / 3.2808399).toFixed(0));
			if (unitnames["m"]) ret["units"] = unitnames["m"];
		}
		break;
	}
	return ret;
}

function updateiWdl() {
    cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");

    var station_time = cr[32].split("-");
    $("#cr_32").html(station_time[1].replace(/_/g, " "));
    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var newval = conv["val"];
        var val = $("#cr_" + fields[i]).html();
        if (newval != val) {
            $("#cr_" + fields[i]).html(newval);
        }
    }
}

function dispIwdl() {
    var str;
    cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    str = "<ul class='rounded'>";

    var station_time = cr[32].split("-");
    var descr = cr[49].replace(/_/g, " ");

    // Extra Tag Cleanup
    descr = descr.replace(/Ã¸/g,'ø');
    descr = descr.replace(/Ã¥/g,'å');
    descr = descr.replace(/Ã¦/g,'æ');

    str = str + "<li class='iwdl'>";
    str = str + "<table width='100%'>";
    str = str + "  <tr>";
    str = str + "    <td align='center' width='100%'>" + station_time[0].replace(/_/g, " ") + " -"; 
    str = str + "    <span id='cr_32'> " + station_time[1].replace(/_/g, " ") + "</span></td>";
    str = str + "  </tr>";
    str = str + "  <tr>";
    str = str + "    <td colspan='2' align='center' width='100%'>" + descr + "</td>"; 
    str = str + "  </tr>";
    str = str + "</table>";
    str = str + "</li>";

    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var val = conv["val"];
        var units = conv["units"];

        if (crtogr[fields[i]])
            str = str + "<li class='arrow iwdl'><a href=#graphs_" + fields[i] + ">";
        else
            str = str + "<li class='iwdl'>";
        str = str + "<div class='iwdl left w50 fltleft'>" + cr_fields[fields[i]][0] + "</div>";
        str = str + "<div class='iwdl right w25 fltleft black'>"  + val + "</div>";
        str = str + "<div class='iwdl left  w25 fltleft'>"  + units + "</div>";
        str = str + "<div style='clear: both'</div>";
       if (crtogr[fields[i]]) 	str = str + "</a>";
        str = str + "</li>";
    }
    str = str + "</ul>";

    $('#iwdl').append(str);
}

function dispMinMax() {
    var str;
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    str = "<ul class='metal'>";

    var station_time = cr[32].split("-");

    str = str + "<li class='iwdl'>";
    str = str + "<table width='100%'>";
    str = str + "  <tr>";
    str = str + "    <td align='center' width='100%'>" + station_time[0].replace(/_/g, " ") + "</td>"; 
    str = str + "  </tr>";
    str = str + "</table>";
    str = str + "</li>";

    var fields = settings["min_max"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var conv = check_convert(cr[fields[i]], cr_fields[fields[i]][1]);
        var val = conv["val"];
        var units = conv["units"];
        str = str + "<li class='iwdl'>";
        str = str + "<table width='100%'>";
        str = str + "  <tr>";
        str = str + "    <td align='left' width='50%' class='iwdl'>" + cr_fields[fields[i]][0] + "</td>"; 
        str = str + "    <td align='right' width='25%' class='iwdlright'>" + val + "</td>";
        str = str + "    <td align='left' width='25%' class='iwdl'> " + units + "</td>";
        str = str + "  </tr>";
        str = str + "</table>";
        str = str + "</li>";
    }
    str = str + "</ul>";
    $('#minmaxinfo').html(str);
}

function dispGraph(grtype, graph, div) {
    // Make the placeholder
	var gr, cr;
	switch (grtype) {
	case "h":
		grlist = ghsettings[graph];
		cr = crh;
		break;
	case "d":
		grlist = gdsettings[graph];
		cr = cre;
		break;
	case "w":
		grlist = gwsettings[graph];
		cr = crd;
		break;
	case "m":
		grlist = gmsettings[graph];
		cr = crd;
		break;
	}
    var o = jQT.getOrientation();
    str = "<ul class='metal'>";
    str = str + "<li class='iwdl'>" + texts["gr" + grtype + "_" + graph] + "<br>";
    if (o == 'profile')
    	str = str + "<div id='" + div + "_" + grtype + "graph_" + graph + "' style='width:280px;height:100px;'></div>";
    else
    	str = str + "<div id='" + div + "_" + grtype + "graph_" + graph + "' style='width:430px;height:100px;'></div>";
    str = str + "</li>";
    str = str + "</ul>";
    $("#" + div).append(str);
	
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
        	var conv = check_convert(cr[l], units);
            vals[s] = conv["val"];
            s++;
        }
    }
    var d1 = [];
    for (var j = 0, len = vals.length; j < len; j++)
        d1.push([j - len + 1, vals[j]]);

    $.plot($("#" + div + "_" + grtype + "graph_" + graph), [ d1 ]);
}

function dispHourGraphs() {
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    if (!crh) crh = getClientRaw(settings["clientraw_dir"] + "/clientrawhour.txt");

    $('#hgraphsinfo').html("");
    var graphs = settings["hour_graphs"]
    for (var i = 0, len=graphs.length; i < len; ++i) {
        dispGraph("h", graphs[i], "hgraphsinfo");
    }
}

function dispDayGraphs() {
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    if (!cre) cre = getClientRaw(settings["clientraw_dir"] + "/clientrawextra.txt");

    $('#dgraphsinfo').html("");
    var graphs = settings["day_graphs"]
    for (var i = 0, len=graphs.length; i < len; ++i) {
        dispGraph("d", graphs[i], "dgraphsinfo");
    }
}

function dispWeekGraphs() {
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    if (!crd) crd = getClientRaw(settings["clientraw_dir"] + "/clientrawdaily.txt");

    $('#wgraphsinfo').html("");
    var graphs = settings["week_graphs"]
    for (var i = 0, len=graphs.length; i < len; ++i) {
        dispGraph("w", graphs[i], "wgraphsinfo");
    }
}

function dispMonthGraphs() {
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    if (!crd) crd = getClientRaw(settings["clientraw_dir"] + "/clientrawdaily.txt");

    $('#mgraphsinfo').html("");
    var graphs = settings["month_graphs"]
    for (var i = 0, len=graphs.length; i < len; ++i) {
        dispGraph("m", graphs[i], "mgraphsinfo");
    }
}

function dispTypeGraphs(type) {
    if (!cr) cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    if (!crd) crd = getClientRaw(settings["clientraw_dir"] + "/clientrawdaily.txt");
    if (!crh) crh = getClientRaw(settings["clientraw_dir"] + "/clientrawhour.txt");
    if (!cre) cre = getClientRaw(settings["clientraw_dir"] + "/clientrawextra.txt");

    $('#graphsinfo_' + type).html("");
    var graphs = crtogr[type];
    if (graphs[0][0]) dispGraph("h", graphs[0][0], "graphsinfo_" + type);
    if (graphs[1][0]) dispGraph("d", graphs[1][0], "graphsinfo_" + type);
    if (graphs[2][0]) dispGraph("w", graphs[2][0], "graphsinfo_" + type);
    if (graphs[3][0]) dispGraph("m", graphs[3][0], "graphsinfo_" + type);
    if (graphs[3][1]) dispGraph("m", graphs[3][1], "graphsinfo_" + type);
}

function setTexts() {
    for ( var t in texts ){
        $("[iwdltxt=" + t + "]").html(texts[t]);
    }
}

function startIwdl() {
    $(document).ready(function(e){
        loadjsfile("iwdl_lang_" + settings["lang"] + ".js"); 
        loadjsfile("lib/jquery.flot.min.js");
        loadjsfile("lib/jquery.timers.js");
        setTexts();
        dispIwdl();

        $('#iwdl').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
            	updateiWdl();
                $(document).everyTime(settings["refresh"] + "s", "iwdlTimer", function(i) { updateiWdl(); }, settings["num_refresh"]);
            }
            if (info.direction == 'out') $(document).stopTime("iwdlTimer");
        });

        $('#minmax').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispMinMax();
            }
        });

        $('#ghour').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispHourGraphs();
            }
        });
        $('#gday').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispDayGraphs();
            }
        });
        $('#gweek').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispWeekGraphs();
            }
        });
        $('#gmonth').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispMonthGraphs();
            }
        });

        $('#graphs_1').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(1);
            }
        });
        $('#graphs_2').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(2);
            }
        });
        $('#graphs_3').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(3);
            }
        });
        $('#graphs_4').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(4);
            }
        });
        $('#graphs_5').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(5);
            }
        });
        $('#graphs_6').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(6);
            }
        });
        $('#graphs_7').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(7);
            }
        });
        $('#graphs_12').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(12);
            }
        });
        $('#graphs_79').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(79);
            }
        });
        $('#graphs_127').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispTypeGraphs(127);
            }
        });
        $(function(){
            $('body').bind('turn', function(event, info){
            	  var curr = $(".current").attr("id");
           		  switch (curr) {
           		  case "ghour"     : dispHourGraphs()(1);  break;
           		  case "gday"      : dispDayGraphs()(1);   break;
           		  case "gweek"     : dispWeekGraphs()(1);  break;
           		  case "gmonth"    : dispMonthGraphs()(1); break;
           		  case "graphs_1"  : dispTypeGraphs(1);    break;
           		  case "graphs_2"  : dispTypeGraphs(2);    break;
           		  case "graphs_3"  : dispTypeGraphs(3);    break;
           		  case "graphs_4"  : dispTypeGraphs(4);    break;
           		  case "graphs_5"  : dispTypeGraphs(5);    break;
           		  case "graphs_6"  : dispTypeGraphs(6);    break;
           		  case "graphs_7"  : dispTypeGraphs(7);    break;
           		  case "graphs_12" : dispTypeGraphs(12);   break;
           		  case "graphs_79" : dispTypeGraphs(79);   break;
           		  case "graphs_127": dispTypeGraphs(127);  break;
            	  }
            });
            
        });
    });
}

startIwdl();
