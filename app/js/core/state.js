// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');


  $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      views: {
        'navbar': {
          templateUrl: 'app/js/core/templates/navbar.tpl.html',
          controller: 'NavbarCtrl'
        },
        'main': {
          templateUrl: 'app/js/core/templates/main.tpl.html'
        }
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/js/core/templates/404.tpl.html',
      controller: 'AppCtrl'
    });

}]);