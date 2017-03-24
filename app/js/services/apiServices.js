angular.module('app')
    .service('ApiServices', function($http) {
        return {
            getAll: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/continent=NA?show=webcams:location',
 {headers: { 'X-Mashape-Key': 'BrZIf8ikCtmsh9udaRMy7CK7Ahnjp1Hbtn8jsnYp9KTtRkmq5q'}});
            }

        };
    });
