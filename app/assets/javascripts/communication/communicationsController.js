angular.module('Sentinel.communicationsController', [])
.controller('CommunicationController', ['$scope', '$state', '$window', 'Communication', function($scope, $state, $window, Communication)

/*{	
        $scope.main = {
            offset: 1,
            limit: 1,
            sort: 'org_code ASC',
            rowsArray: [
                {id:1, label:'1 Per Page'},
                {id:2, label:'2 Per Page'},
                {id:3, label:'3 Per Page'}
            ],
            sortArray: [
                {id:'org_code ASC', label:'org_code (A-Z)'},
                {id:'org_code DESC',label:'org_code (Z-A)'},
                {id:'client_code ASC', label:'client_code (A-Z)'},
                {id:'client_code DESC',label:'client_code (Z-A)'}
            ]
        };
        
        $scope.loadPage = function(page){
            $scope.main.offset = page;
            Communication.get({offset:$scope.main.offset, limit:$scope.main.limit, sort:$scope.main.sort}, function(data){
		       
                $scope.communications = data.communications;
                
                // total number of rows
                
                $scope.count = data.count;
                
            
                $scope.pagesCount = data.count/$scope.main.limit;
                
                // build pages array
                var pagesArray = [];
                for(var p = 1; p < $scope.pagesCount+1; p++){
                     pagesArray.push(p);   
                }
                $scope.pages = pagesArray;
		    }); 
        }
        
        $scope.loadPerPage = function(option){
            $scope.main.limit = option;
            $scope.loadPage($scope.main.offset);
        }
        
        $scope.loadSortPage = function(option){
            $scope.main.sort = option;
            $scope.loadPage($scope.main.offset);
        }
		
        $scope.loadPage(1);//fetch all clients. Issues a GET to /api/clients
		
		$scope.deleteCommunication = function(communication) { // Delete a client. Issues a DELETE to /api/client/:id
			communication.$delete(function(response) {
				$scope.message = response;
				
				if(response.status == 'ok'){
					$state.go('communications'); //redirect to home
				}
			});
		};
	}]

)*/
{		
		$scope.communications = Communication.query(); 
		
		$scope.deleteCommunication = function(communication) { 
			communication.$delete(function(response) {
				$scope.message = response;
				
				if(response.status == 'ok'){
					$state.go('communications'); //redirect to home
				}
			});
		};
	}]
)
.controller('CommunicationViewController', ['$scope', '$stateParams' ,'Communication', function($scope,$stateParams,Communication){
    $scope.communication=Communication.get({id:$stateParams.id});
}])
.controller('CommunicationCreateController',['$scope', '$state', '$stateParams', 'Communication','Org','Client', function($scope,$state,$stateParams,Communication,Org,Client){

    $scope.communication=new Communication();
	   $scope.orgs = Org.query();
    $scope.clients = Client.query();
    $scope.addCommunication=function(){
        $scope.communication.$save(function(response){
            $scope.message = response;
        	
            if(response.status == 'ok'){
				$state.go('communications'); //redirect to home
			}
        });
    }

}]).controller('CommunicationEditController',['$scope', '$state', '$stateParams', 'Communication','Org','Client',function($scope,$state,$stateParams,Communication,Org,Client){
 $scope.orgs = Org.query();
    $scope.clients = Client.query();
    $scope.updateCommunication=function(){
        $scope.communication.$update(function(response){
        	$scope.message = response;
        	
            if(response.status == 'ok'){
				$state.go('communications'); //redirect to home
			}
        });
    };

    $scope.loadCommunication=function(){
        $scope.communication=Communication.get({id:$stateParams.id});
    };

    $scope.loadCommunication();
}]);