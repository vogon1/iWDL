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
// Version 0.1
//

var config = 'iwdl_settings.js'
var settings = new Array;
var cr_fields = new Array;
var texts = new Array;

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

function updateiWdl() {
    var cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");

    var station_time = cr[32].split("-");
    $("#cr_32").html(station_time[1]);
    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        var val = $("#cr_" + fields[i]).html();
        if (cr[fields[i]] != val) {
            $("#cr_" + i).html(cr[i]);
        }
    }
}

function dispIwdl() {
    var str, cr;
    cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    str = "<ul class='metal'>";

    var station_time = cr[32].split("-");
    var descr = cr[49].replace("_", " ");

    str = str + "<li class='iwdl'>";
    str = str + "<table width='100%'>";
    str = str + "  <tr>";
    str = str + "    <td align='center' width='100%'>" + station_time[0] + " -"; 
    str = str + "    <span id='cr_32'> " + station_time[1] + "</span></td>";
    str = str + "  </tr>";
    str = str + "  <tr>";
    str = str + "    <td colspan='2' align='center' width='100%'>" + descr + "</td>"; 
    str = str + "  </tr>";
    str = str + "</table>";
    str = str + "</li>";

    var fields = settings["live_screen"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        str = str + "<li class='iwdl'>";
        str = str + "<table width='100%'>";
        str = str + "  <tr>";
        str = str + "    <td align='left' width='50%' class='iwdl'>" + cr_fields[fields[i]][0] + "</td>"; 
        str = str + "    <td align='right' width='25%' id='cr_" + fields[i] + "' class='iwdlright'>" + cr[fields[i]] + "</td>";
        str = str + "    <td align='left' width='25%' class='iwdl'> " + cr_fields[fields[i]][1] + "</td>";
        str = str + "  </tr>";
        str = str + "</table>";
        str = str + "</li>";
    }
    str = str + "</ul>";
    $('#iwdlinfo').html(str);
}

function dispMinMax() {
    var str, cr;
    cr = getClientRaw(settings["clientraw_dir"] + "/clientraw.txt");
    str = "<ul class='metal'>";

    var station_time = cr[32].split("-");

    str = str + "<li class='iwdl'>";
    str = str + "<table width='100%'>";
    str = str + "  <tr>";
    str = str + "    <td align='center' width='100%'>" + station_time[0] + "</td>"; 
    str = str + "  </tr>";
    str = str + "</table>";
    str = str + "</li>";

    var fields = settings["min_max"];
    for ( var i=0, len=fields.length; i<len; ++i ){
        str = str + "<li class='iwdl'>";
        str = str + "<table width='100%'>";
        str = str + "  <tr>";
        str = str + "    <td align='left' width='50%' class='iwdl'>" + cr_fields[fields[i]][0] + "</td>"; 
        str = str + "    <td align='right' width='25%' id='cr_" + fields[i] + "' class='iwdlright'>" + cr[fields[i]] + "</td>";
        str = str + "    <td align='left' width='25%' class='iwdl'> " + cr_fields[fields[i]][1] + "</td>";
        str = str + "  </tr>";
        str = str + "</table>";
        str = str + "</li>";
    }
    str = str + "</ul>";
    $('#minmaxinfo').html(str);
}

var cre;
function dispGraphs() {
	var str;
	if (!cre) cre = getClientRaw(settings["clientraw_dir"] + "/clientrawextra.txt");

    str = "<ul class='metal'>";

    // Make the placeholders
    var graphs = settings["hour_graphs"]
    for (var i = 0, len=graphs.length; i < len; ++i) {
    	var gr = gsettings[graphs[i]];
	    str = str + "<li class='iwdl'>" + texts["gr_" + graphs[i]] + "<br>";
	    str = str + "<div id='graph_" + graphs[i] + "' style='width:250px;height:100px;'></div>";
	    str = str + "</li>";
    }
    str = str + "</ul>";
    $('#graphsinfo').html(str);

    // Make the graphs
    for (var i = 0, len=graphs.length; i < len; ++i) {
    	var gr = gsettings[graphs[i]];
    	var start = gr[0];
    	var length = gr[1];
	    var d1 = [];
	    for (var j = start; j < start+length; j++)
	        d1.push([j - (start+length)+1, cre[j]]);
	
	    $.plot($("#graph_" + graphs[i]), [ d1 ]);
    }
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

        $('#iwdl').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispIwdl();
                $(document).everyTime(settings["refresh"] + "s", "iwdlTimer", function(i) { updateiWdl(); }, settings["num_refresh"]);
            }
            if (info.direction == 'out') $(document).stopTime("iwdlTimer");
        });

        $('#minmax').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispMinMax();
            }
        });

        $('#graphs').bind('pageAnimationEnd', function(event, info){
            if (info.direction == 'in') {
                dispGraphs();
            }
        });
    });
}

startIwdl();
