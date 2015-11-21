// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.camera', {
        url: '/camera',
        views: {
          'tab-camera': {
            templateUrl: 'templates/tab-camera.html',
            controller: 'CameraCtrl'
          }
        }
      })

      .state('tab.imagens', {
        url: '/imagens',
        views: {
          'tab-imagens': {
            templateUrl: 'templates/tab-imagens.html',
            controller: 'ImagensCtrl'
          }
        }
      })
      .state('tab.imagem', {
        url: '/imagens/:imagem',
        views: {
          'tab-imagens': {
            templateUrl: 'templates/imagem.html',
            controller: 'ImagemCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/camera');
  });
