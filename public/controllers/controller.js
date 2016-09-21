
'use strict'

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',['$scope','$http', function($scope, $http){



var refresha = function() {	// kör en refresh page när man klickar på button så att input data hamnar på sidan
$http.get('/subjectlist/').success(function(response){

	$scope.subjectlist = response;
	$scope.subject = "";
	});
};

refresha();

$scope.addSubject = function(){ // posta ny data från input på sidan
	$http.post('/subjectlist',$scope.subject).success(function(response){// skickar data till servern
		refresha();
		});
	};


$scope.remove = function(id){// tar bort informatioon från sidan med specifik id

	$http.delete("/subjectlist/" + id).success(function(response){
		refresha();

		});
	};

$scope.edit = function(id){ // editera objekt med hjälp av id
	$http.get('/subjectlist/' + id).success(function(response){
		$scope.subject = response;	 // lägger in objekt i input boxar
	});
	};



$scope.update = function() { // allt som är i input boxar skickas till server
	$http.put('/subjectlist/' + $scope.subject._id, $scope.subject).success(function(response){
		});
		refresha();// refresha sidan när button är klickad
	};



$scope.deselect = function() {
	$scope.subject = "";
	};



    $scope.visa = false;
    $scope.openn = function() {
        $scope.visa = !$scope.visa;


};

var flag = true;
$scope.getAddClass = function(){
	return flag ? "btn btn-success addSubject":"btn btn-success active addSubject";
}


$scope.changeClass = function(){
	flag = !flag;
};
$scope.class = "btn btn-success active addSubject";





}]);
