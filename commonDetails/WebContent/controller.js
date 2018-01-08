var app=angular.module("MyApp",[]);
app.controller("thisController",function($scope){
	/*$scope.suffix="";
	$scope.msgsuffix="";
	$scope.suffix=function(){
		if($scope.suffix==""){
			$scope.msgsuffix="It can’t be blank.";
		}
		else{
			$scope.msgsuffix="";
		}
	
	}*/
	
	
		
		
		
	
	
	
	
	
	$scope.msgfname="";
	$scope.firstNane="";
	$scope.firstname=function(){
		if($scope.firstNane==""){
			$scope.msgfname="Please enter First Name. It can't be blank.";
		}
	
	}
	
	$scope.firstNameMsgHide=function(){
		if($scope.firstName!==""){
			$scope.msgfname="";
		}
		
		
		
	}
	
	
	$scope.msgmiddlename="";
	$scope.middleName="";
	$scope.middlename=function(){
		if($scope.middleName==""){
			$scope.msgmiddlename="Please enter Middle Name. It can't be blank.";
		}
	
	}
	
	$scope.middleNameMsgHide=function(){
		if($scope.middleName!==""){
			$scope.msgmiddlename="";
		}
		
		
		
	}
	
	
	$scope.msglastname="";
	$scope.lastName="";
	$scope.lastname=function(){
		if($scope.lastName==""){
			$scope.msglastname="Please enter Last Name. It can't be blank.";
		}
	
	}
	
	$scope.lastNameMsgHide=function(){
		if($scope.lastName!==""){
			$scope.msglastname="";
		}
		
		
		
	}
	
	$scope.msgssn="";
	$scope.ssn="";
	$scope.ssncheck=function(){
		if($scope.ssn==""){
			$scope.msgssn="Please enter SSN#. It can't be blank.";
                           
		}
	
	}
	
	$scope.ssnMsgHide=function(){
		if($scope.ssn!==""){
			$scope.msgssn="";
		}
		
		
		
	}
	
	
	$scope.msgcontact="";
	$scope.contact="";
	$scope.phonecheck=function(){
		if($scope.contact==""){
			$scope.msgcontact="Please enter Phone#. It can't be blank";
                           
		}
	
	}
	
	$scope.phoneMsgHide=function(){
		if($scope.contact!==""){
			$scope.msgcontact="";
		}
		
		
		
	}
	
	
	$scope.msgemail="";
	$scope.emailid="";
	$scope.emailcheck=function(){
		if($scope.emailid==""){
			$scope.msgemail="Please enter E-Mail ID. It can't be blank.";
                           
		}
	
	}
	
	$scope.emailMsgHide=function(){
		if($scope.emailid!==""){
			$scope.msgemail="";
		}
		
		
		
	} 
	
	
	$scope.msglicence="";
	$scope.license="";
	$scope.licencecheck=function(){
		if($scope.license==""){
			$scope.msglicence="Please enter Driving License#. It can't be blank.";
                           
		}
	
	}
	
	$scope.licenceMsgHide=function(){
		if($scope.license!==""){
			$scope.msglicence="";
		}
		
		
		
	} 
	
	
	
	
	$scope.msgissuedstate="";
	$scope.issuedstate="";
	$scope.issuedstatecheck=function(){
		if($scope.issuedstate==""){
			$scope.msgissuedstate="Please enter Driving License Issued State. It can't be blank";
                           
		}
	
	}
	
	$scope.issuedstateMsgHide=function(){
		if($scope.issuedstate!==""){
			$scope.msgissuedstate="";
		}
		
		
		
	} 
	
	
	
	$scope.msgaddress="";
	$scope.address="";
	$scope.addresscheck=function(){
		if($scope.address==""){
			$scope.msgaddress="Please enter Present Address. It can't be blank.";
                           
		}
	
	}
	
	$scope.addressMsgHide=function(){
		if($scope.address!==""){
			$scope.msgaddress="";
		}
		
		
		
	} 
	
	$scope.msgcity="";
	$scope.city="";
	$scope.citycheck=function(){
		if($scope.city==""){
			$scope.msgcity="Please enter City. It can't be blank.";
                           
		}
	
	}
	
	$scope.cityMsgHide=function(){
		if($scope.city!==""){
			$scope.msgcity="";
		}
		
		
		
	}
	
	
	/*
	$scope.msgstate="";
	$scope.state="";
	$scope.statecheck=function(){
		if($scope.state==""){
			$scope.msgstate="Please enter State. It can't be blank.";
                           
		}
	
	}
	
	$scope.stateMsgHide=function(){
		if($scope.state!==""){
			$scope.msgstate="";
		}
		
		
		
	}*/
	
	
	
	$scope.msgzip="";
	$scope.zip="";
	$scope.zipcheck=function(){
		if($scope.zip==""){
			$scope.msgzip="Please enter ZIP Code. It can't be blank.";
                           
		}
	
	}
	
	$scope.zipMsgHide=function(){
		if($scope.zip!==""){
			$scope.msgzip="";
		}
		
		
		
	}
	
	$scope.maritalList="Single";
	$scope.maritalListcheck=function(){
		if($scope.maritalList=="-1"){
			$scope.msgmaritalList="Please select Marital Status. It can't be blank.";
		}
		else{
			$scope.msgmaritalList="";
		}
	}
	
	$scope.suffix="Mr.";
	$scope.suffixListcheck=function(){
		if($scope.suffix=="-1"){
			$scope.msgsuffixList="It can't be blank.";
		}
		else{
			$scope.msgsuffixList="";
		}
	}
	
	 
	
	
	
	$scope.state="AL  Alabama";
	$scope.stateListCheck=function(){
		if($scope.state=="-1"){
			$scope.msgstate="Please enter State. It can't be blank.";
		}
		else{
			$scope.msgstate="";
		}
	}
	
	
	
	
	
	
	
	
	
	$scope.birth="";
	$scope.birthmsg="";
	$scope.birthcheck=function(){
		if($scope.birth==""){
			$scope.birthmsg="Please select Date of Birth. It can't be blank.";
                           
		}
	
	}
	
	$scope.birthMsgHide=function(){
		if($scope.birth!==""){
			$scope.birthmsg="";
		}
		
		
		
	}
	
	
	$scope.selectdate="";
	$scope.selectdatemsg="";
	$scope.selectdatecheck=function(){
		if($scope.selectdate==""){
			$scope.selectdatemsg="Please select Driving License Expiration Date. It can't be blank.";
                           
		}
	
	}
	
	$scope.selectdateMsgHide=function(){
		if($scope.selectdate!==""){
			$scope.selectdatemsg="";
		}
		
		
		
	}
	
	
	
	
	$scope.gendermale="MALE";
	
	
	
});


