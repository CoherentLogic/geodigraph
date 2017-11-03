var map = null;
var app = {    
    init: function() {	
	$.get("/config.json", function(data) {			
	    map = new Map("root", data.defaults);	
	});
    }
};

/*

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

    for(serviceIndex in vectorLayers) {
        $.get(vectorLayers[serviceIndex], function(layers) {
            for(layerIndex in layers) {
                console.log(layers[layerIndex]);
            }
        });
    }    
    
    */