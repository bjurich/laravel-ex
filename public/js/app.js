var bj = angular.module('bj', [
  'ui.router', 'ngTable', 'restangular', 'bj.userAdministration'
]);



bj.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('/');

  // For Django
  RestangularProvider.setRequestSuffix('/');

  RestangularProvider.addFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
    // For some reason dates sent as HTTP query parameters are quoted
    // This makes sure they are no longer quoted and are formatted properly
    console.log('intercepting');
    return {
      element: element,
      params: params,
      headers: headers,
      httpConfig: httpConfig
    };
  });
});


bj.config(function($stateProvider) {
  var helloState = {
    name: 'administration',
    url: '/administration',
    authenticated: true,
    templateUrl: '/js/admin/users.tpl.html',
    controller: 'UsersCtrl'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});