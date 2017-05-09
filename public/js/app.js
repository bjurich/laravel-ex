var bj = angular.module('bj', [
  'ui.router', 'ngTable', 'restangular', 'bj.userAdministration'
]);

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