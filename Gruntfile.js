module.exports = function(grunt) {
	//project and task cofiguration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {},
			//check all js files under server or subdirectories of server
			svr: [ 'public/static/js/server/**/*.js' ],
			//check all js files under app or subdirectories of app
			app: [ 'public/static/js/app/**/*.js' ]
		}
		//uglify: {
		//	options: {
		//		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		//		footer: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		//	},
		//	//task: to uglify js files
		//	js: {
		//		//use files array format to specify src and dest files
		//		files: [
		//			{
		//				src: ['public/static/js/server/primary/main.js'], dest: 'hh.js'
		//			}
		//		]
		//	}
		//}
	});
	//loading grunt plugins and tasks
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//custom tasks
	//grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['jshint']);
};
