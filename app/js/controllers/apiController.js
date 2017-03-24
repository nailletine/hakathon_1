angular.module('app')
    .controller('MainController', function($scope,ApiServices) {
        $scope.webCam = function() {
            ApiServices.getAll().then(function(res) {
              console.log(res.data.result);
                $scope.webCams = res.data.result;
            });
        };
        $scope.webCam();
    });
