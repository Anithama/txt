var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'StudentController'
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'StudentController'
		})
		.when('/aboutus',{
			templateUrl: 'aboutus.html',
			
			controller: 'StudentController'
		})
		.when('/signup',{
			templateUrl: 'signup.html',
			
			
			controller: 'signupcontroller'
			
		})
		.when('/contest',{
			templateUrl: 'contests.html',
			
			
			controller: 'myController'
			
		})
		.otherwise({
			
			templateUrl: 'home.html',
	        controller: 'StudentController'	
		});
});
 mainApp.controller('myController', function ($scope) {

        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
            { 'name': 'HackForIndia', 'director': 'Shriram Vasudevan' },
            { 'name': 'Bootstrap', 'director': 'Prakash P' }
            
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.director != undefined) {
                var movie = [];
                movie.name = $scope.name;
                movie.director = $scope.director;

                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.director = null;
            }
        };

        // REMOVE SELECTED ROW(s) FROM TABLE.
        $scope.removeRow = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                if (!value.Remove) {
                    arrMovie.push(value);
                }
            });
            $scope.movieArray = arrMovie;
        };

        // FINALLY SUBMIT THE DATA.
        $scope.submit = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                arrMovie.push('Name:' + value.name + ', Director:' + value.director);
            });
            $scope.display = arrMovie;
        };
		
		
		
		
    });

mainApp.controller('StudentController',['$scope','$http','$log', function($scope,$http,$log) {
	


}]);

mainApp.controller('signupcontroller', ['$scope','$http', function($scope,$http){
	$scope.insertdata = function(){
		 $http.post(
		 	"php/insert.php",
		 	{'firstname':$scope.First, 
		 	'lastname':$scope.Last, 
		 	'email':$scope.text, 
		 	'password':$scope.nnumber, 
		 }
		 	).success(function(data){
		 		 $scope.msg="Data inserted ";
		 	});
	}

}]);