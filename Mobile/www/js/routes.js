angular.module('hero.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })



    .state('user', {
      url: '/user',
      templateUrl: 'templates/user/menu.html',
      controller: 'UserMenuCtrl'
    })



    .state('user.main', {
      url: '/main',
      views: {
        'menuUserContent': {
          templateUrl: 'templates/user/main.html',
          controller: 'UserMainCtrl'
        }
      }
    })



    .state('hero', {
      url: '/hero',
      templateUrl: 'templates/hero/menu.html',
      controller: 'HeroMenuCtrl'
    })



    .state('hero.main', {
      url: '/main',
      views: {
        'menuHeroContent': {
          templateUrl: 'templates/hero/main.html',
          controller: 'HeroMainCtrl'
        }
      }
    })



    // .state('hero.main.avatar', {
    //   url: '/avatar',
    //   views: {
    //     'heroContent': {
    //       templateUrl: 'templates/hero/main/avatar.html'
    //     }
    //   }
    // })



  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
