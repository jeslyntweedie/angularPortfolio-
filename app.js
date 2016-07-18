angular.module("portfolio", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state("home", {
		url:"/",
		templateUrl: "./templates/home.html"
	}).state("about", {
		url:"/aboutjeslyn",
		templateUrl: "./templates/about.html"
	}).state("projects", {
		url:"/projectsbyjeslyn",
		templateUrl: "./templates/projects.html"
	}).state("contact", {
		url:"/contactjeslyn",
		templateUrl: "./templates/contact.html"
	});


$urlRouterProvider.otherwise("/");


});