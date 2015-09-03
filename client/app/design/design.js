'use strict';

angular.module('padApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('design', {
        url: '/diseño/:area/:subarea?/:axis?',
        templateUrl: 'app/design/design.html',
        controller: 'DesignCtrl'
      });
  });