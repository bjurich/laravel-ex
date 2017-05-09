var userAdministration = angular.module('bj.userAdministration', [
  'ngTable'
]);

userAdministration.controller('UsersCtrl', function ($scope, NgTableParams, Restangular) {
  $scope.ngTable = new NgTableParams({count: 10}, {
    getData: function(params) {
      Restangular.all('users').customGET(null, {})
        .then(
          function (data) {
            console.log('dddd', data);
            params.total(data.total);
            return data.data;
          },
          function (err) {
            console.error(err);
            params.total(0);
            return [];
          }
        );
    }
  });

});