var MyApp = angular.module('MyApp', ['ngMaterial'])
   .run(function() {
   		console.log('Running!');
   })
   .controller('appCtrl', function($scope, $mdSidenav, $log, $mdToast){

   	var page = 14;

   	function nextPage() {
   		$scope.page ++;
   	}

   	function previousPage() {
   		$scope.page --;
   	}

   	$scope.page = page;
   	$scope.nextPage = nextPage;
   	$scope.previousPage = previousPage;




//////////////////////////////////////////////////////////////////////////////
//	SIMPLE TOAST DROP
//////////////////////////////////////////////////////////////////////////////
   	$scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .textContent('We will take care of canceling your old policy, and help in getting you a refund (if applicable)')
        .position("top right")
        .hideDelay(3000)
    );
  };

//////////////////////////////////////////////////////////////////////////////
//	WHITEFRAME - RADIOBUTTON
//////////////////////////////////////////////////////////////////////////////
 	selectedCard = [];
 	setValues = function(value) {
 		selectedCard = value;
 	}
 	selectCard = function() {
 		var values = selectedCard.split(",");
 		$scope.height1 = values[1];
		$scope.height2 = values[0];
 	}
 	$scope.setValues = setValues;
 	$scope.selectedCard = selectedCard;
 	$scope.selectCard = selectCard;

//////////////////////////////////////////////////////////////////////////////
//	SIDENAV TOGGLE
//////////////////////////////////////////////////////////////////////////////
	    function isOpenLeft(){
	      return $mdSidenav('left').isOpen();
	    };	    
	    function buildToggler(navID) {
	      return function() {
	        // Component lookup should always be available since we are not using `ng-if`
	        $mdSidenav(navID)
	          .toggle()
	      };
	    }
	    $scope.toggleLeft = buildToggler('left');
	    $scope.isOpenLeft = isOpenLeft;
   
   })

   .config(function($mdThemingProvider) {
               $mdThemingProvider.theme('myCustomTheme')    
                  .primaryPalette('pink')     
                  .accentPalette('grey')     
                  .warnPalette('grey');
              $mdThemingProvider.setDefaultTheme('myCustomTheme');
    })
;

// $log.debug("toggle " + navID + " is done");