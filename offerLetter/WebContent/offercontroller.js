var app=angular.module("MyApp",[]);
app.controller("thisController",function($scope){
	$scope.isVisible=false;
	$scope.one=true;
	$scope.two=true;
	$scope.hideMe=function(){
		$scope.isVisible=true;
		$scope.one=false;
		$scope.two=false;
	}
	$scope.showMe=function(){
		$scope.isVisible=false;
		$scope.one=true;
		$scope.two=true;
	}
	
	
	
	
	
	
	$scope.previewOne=function(){
		console.log("preview");
	}
	$scope.previewTwo=function(){
		console.log("preview");
	}
	
	$scope.send=function(){
		console.log("send");
	}

	
	
	
	
	
	/*$scope.hello=function(){
		alert("hello");
	}*/
	
	
	
	
	
	
});