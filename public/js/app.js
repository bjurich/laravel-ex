var bj = angular.module('bj', [
  'ui.router'
]);

bj.config(function($stateProvider) {
  var helloState = {
    name: 'main.users',
    url: '/admin/users',
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