var map = null;
var app = {    
    init: function() {	
	$.get("/config.json", function(data) {
		var vectorLayers = [
			'http://dev.geodigraph.com:3000/vectorLayers'
		];
		var rasterLayers = [
			'http://dev.geodigraph.com:3000/rasterLayers'
		];
	    map = new geodigraph.gis.Map(data, vectorLayers, rasterLayers);	    
	});
    }
};
