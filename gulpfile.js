import gulp from "gulp";
import browsersync from "browser-sync";

const server = (done) => {
	browsersync.init({
		server: {
			baseDir: './'
		},
		notify: false,
		port: 3000,
	});
}

gulp.task('default', server);