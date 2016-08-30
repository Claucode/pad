'use strict';

angular.module('padApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('design', {
        url: '/diseño/:area/:subarea?/:axis?eje',
        templateUrl: 'app/design/design.html',
        controller: 'DesignCtrl'
      });
  });