// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'app/js/main/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'app/js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'app/js/main/templates/contact.tpl.html',
      controller: 'ContactCtrl'
    })
    .state('app.login', {
      url: '/login',
      templateUrl: 'app/js/main/templates/login.tpl.html',
      controller: 'LoginCtrl'
    });

}]);