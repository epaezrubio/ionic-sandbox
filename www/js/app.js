
angular.module('app', ['ionic'])
  .run(function($ionicPlatform) {
    
    $ionicPlatform.ready(function() {
      
    });
    
  })
  
  .config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
  
    $urlRouterProvider.otherwise('/');
  
  });
