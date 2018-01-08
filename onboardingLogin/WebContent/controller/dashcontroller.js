app.controller("dashcontroller",function($scope,$http,$location){
	
	$scope.isVisible=false;
	$scope.getList=function(){
		
		$scope.isVisible=true;
		
	}
	$scope.collapseList=function(){
		$scope.isVisible=false;
		
	}

	
	
	 $scope.clients=[];
	 $scope.getDetails=function(){
		 
		 $http.get('http://192.168.1.198:8080/OnBoarding/clientslist', {
			    headers: {
			
			    		"ask-auth-token":"$scope.task",
			    }
			  }).success(function(response){
				 
			    console.log(response);
			    $scope.clients=response;
			    
			    
			   
			    
			   
			  });
	 }
	 
	 
	  
	  
	  
	  $scope.permission=[];
	  $scope.getPer=function(){
		  $http.get('http://192.168.1.198:8080/OnBoarding/permissionsmasterlist',{
			  headers: {
				  "ask-auth-token":"$scope.task",
			  }
		  }).success(function(response){
			  console.log(response);
		  $scope.permission=response;
		  });
			  
			  
		  }
	  
	  
	     
	
	  $scope.hr={};
	  $scope.gethr=function(){
		  $http.get('http://192.168.1.198:8080/OnBoarding/hrlist/1040',{
			  headers: {
				  "ask-auth-token":"$scope.task",
			  }
		  }).success(function(response){
			  console.log(response);
			  $scope.hr=response;
			  
			  
		console.log($scope.hr.clients);
			$scope.view=[];
			var k=0;
		  for(var i=0; i<$scope.clients.length; i++){
			  for(var j=0; j<$scope.hr.clients.length; j++){
				  
				 if($scope.hr.clients[j]==$scope.clients[i].clientId){
					  $scope.view[k]=$scope.clients[i].clientName;
					  console.log($scope.view);
					  k++;
					 
					  
				  }
				
			  }
		  }
		  
		
	
		  
		  for(var p=0;p<$scope.permission.length; p++){
		    
			  for(var q=0; q<$scope.hr.permissions.length; q++){
				  if($scope.permission[p].permissionid==$scope.hr.permissions[q].permissionid){
					 $scope.permission[p].name=$scope.permission[p].name;
					 $scope.permission[p].add=$scope.hr.permissions[q].AddFlag;
					 $scope.permission[p].view=$scope.hr.permissions[q].ViewFlag;
					 $scope.permission[p].edit=$scope.hr.permissions[q].editFlag;
					 $scope.permission[p].del=$scope.hr.permissions[q].deleteFlag;
				  
				
					 
					 
					  
				  if($scope.permission[p].add==true){
					  console.log($scope.permission[p].add);
					  $scope.permission[p].add="YES";
					 
				  }
				  else{
					  $scope.permission[p].add="NO";
				  }
					 
					 
					 
				  
				  if($scope.permission[p].view==true){
					  $scope.permission[p].view="YES";
				  }
				  else{
					  $scope.permission[p].view="NO";
				  }
					 
					 
					 
				 
				  if($scope.permission[p].edit==true){
					  $scope.permission[p].edit="YES";
				  }
				  
				  else{
					  $scope.permission[p].edit="NO";
				  }
					 
					 
					
				  if($scope.permission[p].del==true){
					  $scope.permission[p].del="YES";
				  }
				  
				  else{
					  $scope.permission[p].del="NO";
				  }
					 
				  
				
				  
			  }
				  }
				  }
					 
			  
					
				  
		  });
		  
		  
	  }
	 
	    	
	    
	  
	  
	  
	  
	  

	
	  
	  
	 
	  
	
	  
		$scope.user={};
		$scope.user.emailId="king@ask.com";
		$scope.user.password="123456";
		//$scope.result=false;

		$scope.dologin=function(user){
		console.log(angular.toJson(user));
			$http({
			method:'POST',	
			url:'http://192.168.1.198:8080/OnBoarding/login',
			ContentType: 'application/json',
			dataType:'json',
			data:   user
			})
			
				.then(function(response){
					
				$scope.result=response;
			
				console.log($scope.result.data);
				$scope.ask=$scope.result.headers();
				console.log($scope.ask);
			     $scope.task=$scope.ask["ask-auth-token"];
			     console.log($scope.task);
			    
			   
				
				if($scope.result="200"){
				
					$location.path("/");
			}
			
			
			
			},function(response){
				console.log("please try after some time");
				
			})
		
		
		}
	  
	  
	  
		
			
			
		$scope.messege="";
		$scope.checkpassword=function(){
			var result=angular.equals($scope.hr.password,$scope.hr.confpwd);
			if(result==true){
				$scope.messege="";
				
			}
			else{
				$scope.messege="New Password and Confirm Password should be same.";
			
				
			}
				
		}	
		
		$scope.messegenew="";
		$scope.checkempty=function(){
			if($scope.hr.confpwd==""){
				$scope.messegenew="Please enter the Confirm Password.";
			}
			else{
				$scope.messegenew="";
			}
			
			
		}
		$scope.newpassword="";
		$scope.empty=function(){
			
			if($scope.hr.password==""){
				$scope.newpassword="please enter the new password";
			}
			else{
				$scope.newpassword="";
			}
			
			
		}
	  
	  
		 
		
		
		$scope.doSubmit=function(hr){
			$scope.hrUpdate={};
			$scope.hrUpdate.emailId=$scope.hr.emailId;
			$scope.hrUpdate.firstName=$scope.hr.firstName;
			$scope.hrUpdate.lastName=$scope.hr.lastName;
			$scope.hrUpdate.phoneNo=$scope.hr.phoneNo;
			$scope.hrUpdate.userId=$scope.hr.userId;
			$scope.hrUpdate.password=$scope.hr.password;
			$scope.hrUpdate.confpwd=$scope.hr.confpwd;
			
			
			$http({
				method:'POST',	
				url:'http://192.168.1.198:8080/OnBoarding/updateHrUser',
				 headers:{
					 "ask-auth-token":"$scope.task",
					 "Content-Type" : "application/json",
					
				         },
			
				data:   $scope.hrUpdate
				})
			     
				.success(function(response){
					console.log(angular.toJson($scope.hrUpdate));
					console.log(angular.toJson(response));
				
						alert("Successfully user details are updated");
				
					
				})
				.error(function(response){
					console.log(angular.toJson($scope.hrUpdate));
					console.log(angular.toJson(response));
					
						alert("This E-mail ID is already used by an existing HR user. Please enter a  New E-mail ID");
					
				
				})
			
			
		}
		
		
		
		
			
			
			
		
		
		
		
		
	  
});