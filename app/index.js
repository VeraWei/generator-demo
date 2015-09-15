var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	constructor:function  () {
		generators.Base.apply(this,arguments);

		this.option('coffee');
		this.directory('styles','styles');
		this.directory('img','img');
		this.directory('js','js');
	},
	writing: function  () {
		this.fs.copyTpl(
			this.templatePath('index.html'),
			this.destinationPath('index.html'),
			{title:'Templating with Yeoman'}
		);
		// this.fs.copyTpl(
		// 	this.templatePath('styles'),
		// 	this.destinationPath('styles')
		// );
		// this.fs.copyTpl(
		// 	this.templatePath('js'),
		// 	this.destinationPath('js')
		// );
		this.fs.copyTpl(
			this.templatePath('app.js'),
			this.destinationPath('app.js')
		)
	}
});