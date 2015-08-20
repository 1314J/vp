define(['jquery', 'server/primary/res' , 'server/primary/ptc'], function($, resApi, ptcApi) {
	console.log('server/primary/main callback');
	var serverApi = {
		init: function(callback) {
			if(callback){callback();}
		},
		res: resApi,
		ptc: ptcApi
	};

	return serverApi;
});
