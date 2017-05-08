var userAdministration = angular.module('bj.userAdministration', [
  'ngTable'
]);

userAdministration.config(function ($stateProvider) {
  $stateProvider
    .state('main.users', {
      url: 'admin/users',
      authenticated: true,
      templateUrl: '/js/admin/users.tpl.html',
      controller: 'UsersCtrl'
    })
    .state('main.newUser', {
      url: 'admin/users/',
      authenticated: true,
      templateUrl: '/js/admin/edit-user.tpl.html',
      controller: 'UserEditCtrl',
      resolve: {
        user: function () {
          return {roles: []};
        },
        roles: function (Restangular) {
          return Restangular.one('auth/roles').get()
        }
      }
    })
    .state('main.editUser', {
      url: 'admin/users/:username',
      authenticated: true,
      templateUrl: '/js/admin/edit-user.tpl.html',
      controller: 'UserEditCtrl',
      resolve: {
        user: function (Restangular, $stateParams) {
          return Restangular.all('auth/users').one($stateParams.username).get();
        },
        roles: function (Restangular) {
          return Restangular.one('auth/roles').get()
        }
      }
    })
});

userAdministration.controller('UsersCtrl', function ($scope, ngTableParams, Restangular) {
  $scope.ngTable = new ngTableParams({count: 10}, {
    getData: function($defer, params) {
      Restangular.all('auth/users').customGET(null, {page: params.page() - 1, size: params.count()})
        .then(
          function (data) {
            params.total(data.totalElements);
            $defer.resolve(data.content);
          },
          function (err) {
            console.error(err);
            params.total(0);
            $defer.resolve([]);
          }
        );
    }
  });

});

userAdministration.controller('UserEditCtrl', function ($scope, user, roles, $state, Restangular) {
  $scope.user = user;

  $scope.user.groups = [];

  $scope.roles = roles.content;

  $scope.saveUser = function() {

    var promise = null;

    var u = $scope.user;

    if ('id' in u) {
      promise = Restangular
        .one('users')
        .customPUT(u, u.username)
        .then(function(){
          console.log('PUT');
        });
    } else {
      promise = Restangular
        .one('users')
        .customPOST(u)
        .then(function() {
            console.log('PUT');
        });
    }

    promise.then(function() {
      $state.go('main.editUser', {username: u.username});
    });
  };
});