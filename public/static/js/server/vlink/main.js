define(['jquery'], function($) {
	console.log('server/vlink/main callback');
	var serverApi = {
		init: function(callback) {
			if(callback){callback();}
		}
	};

	return serverApi;
});
