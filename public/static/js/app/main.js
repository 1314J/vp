require.config({
	baseUrl: '/static/js',
	paths: {
		jquery: 'lib/jquery'
	},
	shim: {
		jquery: {
			exports: 'jQuery'
		}
	}
});
require(['jquery', 'server/primary/main', 'server/vlink/main', 'server/vwas/main'], function(jQuery, PrimarySvr, VLinkServer, VwasServer){
	console.log(jQuery);
	console.log(PrimaryServer);
	console.log(vLinkServer);
	console.log(VwasServer);
});
