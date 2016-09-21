(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY29udHJvbGxlcnMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4ndXNlIHN0cmljdCdcblxudmFyIG15QXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pO1xuXG5teUFwcC5jb250cm9sbGVyKCdBcHBDdHJsJyxbJyRzY29wZScsJyRodHRwJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCl7XG5cblxuXG52YXIgcmVmcmVzaGEgPSBmdW5jdGlvbigpIHtcdC8vIGvDtnIgZW4gcmVmcmVzaCBwYWdlIG7DpHIgbWFuIGtsaWNrYXIgcMOlIGJ1dHRvbiBzw6UgYXR0IGlucHV0IGRhdGEgaGFtbmFyIHDDpSBzaWRhblxuJGh0dHAuZ2V0KCcvc3ViamVjdGxpc3QvJykuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cblx0JHNjb3BlLnN1YmplY3RsaXN0ID0gcmVzcG9uc2U7XG5cdCRzY29wZS5zdWJqZWN0ID0gXCJcIjtcblx0fSk7XG59O1xuXG5yZWZyZXNoYSgpO1xuXG4kc2NvcGUuYWRkU3ViamVjdCA9IGZ1bmN0aW9uKCl7IC8vIHBvc3RhIG55IGRhdGEgZnLDpW4gaW5wdXQgcMOlIHNpZGFuXG5cdCRodHRwLnBvc3QoJy9zdWJqZWN0bGlzdCcsJHNjb3BlLnN1YmplY3QpLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2Upey8vIHNraWNrYXIgZGF0YSB0aWxsIHNlcnZlcm5cblx0XHRyZWZyZXNoYSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cbiRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihpZCl7Ly8gdGFyIGJvcnQgaW5mb3JtYXRpb29uIGZyw6VuIHNpZGFuIG1lZCBzcGVjaWZpayBpZFxuXG5cdCRodHRwLmRlbGV0ZShcIi9zdWJqZWN0bGlzdC9cIiArIGlkKS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRyZWZyZXNoYSgpO1xuXG5cdFx0fSk7XG5cdH07XG5cbiRzY29wZS5lZGl0ID0gZnVuY3Rpb24oaWQpeyAvLyBlZGl0ZXJhIG9iamVrdCBtZWQgaGrDpGxwIGF2IGlkXG5cdCRodHRwLmdldCgnL3N1YmplY3RsaXN0LycgKyBpZCkuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0JHNjb3BlLnN1YmplY3QgPSByZXNwb25zZTtcdCAvLyBsw6RnZ2VyIGluIG9iamVrdCBpIGlucHV0IGJveGFyXG5cdH0pO1xuXHR9O1xuXG5cblxuJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkgeyAvLyBhbGx0IHNvbSDDpHIgaSBpbnB1dCBib3hhciBza2lja2FzIHRpbGwgc2VydmVyXG5cdCRodHRwLnB1dCgnL3N1YmplY3RsaXN0LycgKyAkc2NvcGUuc3ViamVjdC5faWQsICRzY29wZS5zdWJqZWN0KS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHR9KTtcblx0XHRyZWZyZXNoYSgpOy8vIHJlZnJlc2hhIHNpZGFuIG7DpHIgYnV0dG9uIMOkciBrbGlja2FkXG5cdH07XG5cblxuXG4kc2NvcGUuZGVzZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0JHNjb3BlLnN1YmplY3QgPSBcIlwiO1xuXHR9O1xuXG5cblxuICAgICRzY29wZS52aXNhID0gZmFsc2U7XG4gICAgJHNjb3BlLm9wZW5uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzY29wZS52aXNhID0gISRzY29wZS52aXNhO1xuXG5cbn07XG5cbnZhciBmbGFnID0gdHJ1ZTtcbiRzY29wZS5nZXRBZGRDbGFzcyA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBmbGFnID8gXCJidG4gYnRuLXN1Y2Nlc3MgYWRkU3ViamVjdFwiOlwiYnRuIGJ0bi1zdWNjZXNzIGFjdGl2ZSBhZGRTdWJqZWN0XCI7XG59XG5cblxuJHNjb3BlLmNoYW5nZUNsYXNzID0gZnVuY3Rpb24oKXtcblx0ZmxhZyA9ICFmbGFnO1xufTtcbiRzY29wZS5jbGFzcyA9IFwiYnRuIGJ0bi1zdWNjZXNzIGFjdGl2ZSBhZGRTdWJqZWN0XCI7XG5cblxuXG5cblxufV0pO1xuIl19
