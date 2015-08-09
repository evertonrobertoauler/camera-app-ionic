
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

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
