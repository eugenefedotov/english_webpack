"use strict";

export default function appRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'layout': {
          template: require('views/layout/layout.html')
        }
      }
    });
};