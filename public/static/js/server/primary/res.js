define(['jquery'], function($) {
	console.log('server/primary/res callback');
	var resApi = {
		add: function(callback) {
			if(callback){callback();}
		},	
		del: function(callback) {
			if(callback){callback();}
		},	
		mod: function(callback) {
			if(callback){callback();}
		},	
		get: function(callback) {
			if(callback){callback();}
		},	
		enumerate: function(callback) {
			if(callback){callback();}	
		}
	};
	return resApi;
});
