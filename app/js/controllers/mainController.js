angular.module('app')
    .controller('MainController', function($scope, ApiServices) {

     $scope.positions = [];
     var lat = 40.71, lng = -74.21;
     for (var i=1; i<100; i++) {
       $scope.positions.push({lat:46.633912, lng:8.593563});
       $scope.positions.push({lat:46.633912, lng:8.593563});
       $scope.positions.push({lat:46.633912, lng:8.593563});
       $scope.positions.push({lat:46.633912, lng:8.593563});
       $scope.positions.push({lat:46.633912, lng:8.593563});
       $scope.positions.push({lat:46.633912, lng:8.593563});
     }


     console.log('vm.positions', $scope.positions);
     $scope.webCam = function() {
         ApiServices.getAll().then(function(res) {
           console.log(res.data.result);
             $scope.webCams = res.data.result;
         });
     };
     $scope.webCam();

    }
  );
