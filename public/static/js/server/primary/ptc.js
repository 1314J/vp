define(['jquery'], function($) {
	console.log('server/primary/ptc callback');
	var ptcApi = {
		zoom: function(callback) {
			if(callback){callback();}
		},	
		move: function(callback) {
			if(callback){callback();}
		},	
		getpara: function(callback) {
			if(callback){callback();}
		}
	};
	return ptcApi;
});
