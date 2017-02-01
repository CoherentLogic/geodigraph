var map = null;
var app = {    
    init: function() {	
	$.get("/config.json", function(data) {
	    map = new geodigraph.gis.Map(data.map);	    
	});
    }
};
