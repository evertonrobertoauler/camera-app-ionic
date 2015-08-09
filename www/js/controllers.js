angular.module('starter.controllers', [])

  .controller('CameraCtrl', function ($scope, Imagens) {
    $scope.tirarFoto = Imagens.tirarFoto;
  })

  .controller('ImagensCtrl', function ($scope, Imagens) {
    $scope.imagens = Imagens.obterImagens();
  })

  .controller('ImagemCtrl', function ($scope, $state, $stateParams, Imagens) {
    $scope.nome = $stateParams.imagem;
    $scope.url = Imagens.obterImagem($stateParams.imagem);
    $scope.excluirImagem = function () {
      Imagens
        .removerImagem($stateParams.imagem)
        .then(function() {
          $state.go('tab.imagens')
        });
    };
  });
