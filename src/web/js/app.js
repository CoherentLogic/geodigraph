var map = null;
var app = {    
    init: function() {	
	$.get("/config.json", function(data) {
		var vectorLayers = [
			'http://localhost:3000/vectorLayers'
		];
		var rasterLayers = [
			'http://localhost:3000/rasterLayers'
		];
	    map = new geodigraph.gis.Map(data, vectorLayers, rasterLayers);	    
	});
    }
};
