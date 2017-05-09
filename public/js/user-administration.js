var userAdministration = angular.module('bj.userAdministration', [
  'ngTable'
]);

userAdministration.controller('UsersCtrl', function ($scope, ngTableParams, Restangular) {
  $scope.ngTable = new ngTableParams({count: 10}, {
    getData: function($defer, params) {
      Restangular.all('users').customGET(null, {page: params.page() - 1, size: params.count()})
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