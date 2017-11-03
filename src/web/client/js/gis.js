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

function Map(elementId, opts)
{
    this.opts = opts || {};
    var self = this;

    this.vectorLayers = [];
    this.rasterLayers = [];
    this.basemapLayers = [];

    this.leafletMap = L.map(elementId, {
        center: new L.LatLng(opts.lat, opts.lon),
        zoom: opts.zoom,
        minZoom: opts.minZoom,
        maxZoom: opts.maxZoom
    });

    
    return this;
}

Map.prototype.installLayer = function (layer) {
   
    if(layer instanceof BasemapLayer) {
        this.basemapLayers.push(layer)
    }
    else if(layer instanceof RasterLayer) {
        this.rasterLayers.push(layer);
    }
    else if(layer instanceof VectorLayer) {
        this.vectorLayers.push(layer);
    }
    else {
        console.log("Map.installLayer(): invalid layer type; cannot install (layers must be of type BasemapLayer, VectorLayer, or RasterLayer)");

        return;
    }

    layer.install(this);

    return this;
};

function Viewport(opts)
{

    return this;
}

function BasemapLayer(opts) 
{

    return this;
}

BasemapLayer.prototype.install = function (map) {

};

function RasterLayer(opts)
{

    return this;
}

RasterLayer.prototype.install = function (map) {

};

RasterLayer.prototype.render = function (viewport) {

};

function VectorLayer(opts)
{

    return this;
}

VectorLayer.prototype.install = function (map) {

};

VectorLayer.prototype.render = function (viewport) {

};

function Plugin(opts)
{

    return this;
}