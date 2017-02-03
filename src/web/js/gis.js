/*
 * Geodigraph GIS 2017
 *
 * Copyright (C) 2017 Coherent Logic Development LLC
 * 
 * Author: John P. Willis <jpw@coherent-logic.com>
 *
 * gis.js:  mapping code
 *
 */

function __giMap(tagOpts, vectorLayers, rasterLayers)
{
    this.opts = tagOpts || {};
    self = this;

    this.plugins = [];
    this.rasterLayers = [];
    this.vectorLayers = [];

    this.leafletMap = L.map('root', {
		center: new L.LatLng(self.opts.defaults.lat, self.opts.defaults.lon),
		zoom: self.opts.defaults.zoom,
		zoomControl: true,
		zoomsliderControl: true,
		minZoom: self.opts.defaults.minZoom,
		maxZoom: self.opts.defaults.maxZoom
    });
    
    for(serviceIndex in rasterLayers) {
    	$.get(rasterLayers[serviceIndex], function(layers) {
    		for(layerIndex in layers) {
    			L.tileLayer(layers[layerIndex].url, {
    				attribution: layers[layerIndex].attribution,
    				maxZoom: self.opts.defaults.maxZoom
    			}).addTo(self.leafletMap);
    		}    	
    	});
    }
    
    
    
    return self;
}

function __giLayer(tagOpts)
{
    this.opts = tagOpts || {};
    self = this;

    return self;
}

function __giViewport(tagOpts)
{
    this.opts = tagOpts || {};
    self = this;

    return self;
}

function __giStatus(tagOpts)
{
    this.opts = tagOpts || {};
    self = this;

    return self;
}

function __giPlugin(tagOpts)
{
    this.opts = tagOpts || {};
    self = this;

    return self;
}

var geodigraph = {
    gis: {
    	Map: __giMap,
    	Layer: __giLayer,
    	Viewport: __giViewport,
    	Plugin: __giPlugin
    }
};
