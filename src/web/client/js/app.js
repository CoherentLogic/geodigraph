/*
 * Geodigraph GIS 2017
 *
 * Copyright (C) 2017 Coherent Logic Development LLC
 * 
 * Author: John P. Willis <jpw@coherent-logic.com>
 *
 * app.js: client code
 *
 */

var app = {    
    map: null,

    session: null,
    
    init: function() {
	console.log("Geodigraph GIS 2017");
	console.log(" Copyright (C) 2017 Coherent Logic Development LLC\n\n");
	
	$.get("/config.json", function(data) {
	    var vectorLayers = [
		'http://dev.geodigraph.com:3000/vectorLayers'
	    ];
	    var rasterLayers = [
		'http://dev.geodigraph.com:3000/rasterLayers'
	    ];
	    app.map = new geodigraph.gis.Map(data, vectorLayers, rasterLayers);	    
	});
	
	console.log("Initializing session...");
	$.get("/session", app.sessionReady);
	
    },
    
    sessionReady: function(session) {
	app.session = session;
	console.log("Session initialized (site is " + app.session.site + ")");
    },
    
    toggleSidebar: function() {
	$('.ui.sidebar').sidebar('setting', 'transition', 'overlay');
	$('.ui.sidebar').sidebar('toggle');
    }

    
};
