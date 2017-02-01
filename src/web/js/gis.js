/*
 * Geodigraph GIS 2017
 *
 * Copyright (C) 2017 Coherent Logic Development LLC
 * 
 * Author: John P. Willis <jpw@coherent-logic.com>
 *
 * app.js: main gis object
 *
 */

var geodigraph = {
    gis: {

	Map: function(options) {
	    var self = this;

	    self.config = options;
	    
	    self.mainMap = new ol.Map({
		target: 'root',
		layers: [
		    new ol.layer.Tile({
			source: new ol.source.OSM()
		    })
		],
		view: new ol.View({
		    center: ol.proj.fromLonLat([self.config.defaults.longitude, self.config.defaults.latitude]),
		    zoom: self.config.defaults.zoom
		})
	    });
	    
	    return(self);
	},
	
	Viewport: function(options) {
	    var self = this;

	    return(self);
	},

	Layer: function(options) {
	    var self = this;

	    return(self);
	},

	Plugin: function(options) {
	    var self = this;

	    return(self);
	}
    }
}

