var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});