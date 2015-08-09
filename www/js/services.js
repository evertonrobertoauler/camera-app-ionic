angular.module('starter.services', [])
  .service('Imagens', function ($cordovaCamera, $cordovaFile, $window) {
    var vm = this;

    var imagens = carregarImagens();

    vm.tirarFoto = tirarFoto;
    vm.obterImagens = obterImagens;
    vm.obterImagem = obterImagem;
    vm.removerImagem = removerImagem;

    function tirarFoto() {
      var parametrosCamera = {
        destinationType: $window.Camera.DestinationType.FILE_URI,
        sourceType: $window.Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
        allowEdit: false,
        encodingType: $window.Camera.EncodingType.JPEG,
      };

      return $cordovaCamera
        .getPicture(parametrosCamera)
        .then(moverImagem, falha);
    }

    function moverImagem(urlImagem) {
      var caminho = urlImagem.split('/');
      var nome = caminho.pop();

      return $cordovaFile
        .moveFile(caminho.join('/'), nome, $window.cordova.file.dataDirectory)
        .then(salvarImagem, falha);
    }

    function salvarImagem(imagem) {
      imagens[imagem.name] = imagem.nativeURL;
      salvarImagens();
    }

    function obterImagens() {
      return imagens;
    }

    function obterImagem(nome) {
      return imagens[nome];
    }

    function removerImagem(nome) {
      return $cordovaFile
        .removeFile($window.cordova.file.dataDirectory, nome)
        .then(function () {
          delete imagens[nome];
          salvarImagens();
        }, falha);
    }

    function salvarImagens() {
      $window.localStorage['imagens'] = JSON.stringify(imagens);
      console.log($window.localStorage['imagens']);
    }

    function carregarImagens() {
      if ($window.localStorage['imagens'])
        return JSON.parse($window.localStorage['imagens']);
      else
        return {};
    }

    function falha(erro) {
      console.error(erro);
    }
  });
