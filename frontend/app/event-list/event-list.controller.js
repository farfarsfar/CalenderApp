import moment from 'moment';
import $ from 'jquery';
export default function ($scope, $rootScope, $http) {
	$rootScope.x = 0;
	$rootScope.z = 0;
	
	
	// function to show current month 
	$scope.initCal = function () {
			$rootScope.time_now = moment().format('YYYY, MMMM');
			$rootScope.month_header = document.getElementById('current_month');
			$rootScope.month_header.innerHTML = $rootScope.time_now;
			$rootScope.time_from_next_month = $rootScope.time_now;
			$rootScope.time_from_last_month = $rootScope.time_now;
			$rootScope.x = 0;
			$rootScope.z = 0;
			$scope.showday();
			
		}
		// function to show date in HTML 
	$scope.showday = function () {
		$rootScope.showdays = moment($scope.time).daysInMonth();
		// show how many days in month
		$rootScope.iddate = moment().format('YYYY, MM, ');
		document.getElementById('show_howmany_day').innerHTML = $rootScope.showdays + " days";
		$('.day').remove();
		$('.today').remove();
		$('.daytoday').remove();
		$rootScope.start_day = moment($rootScope.time_now).format('d');
		$scope.insert_day($rootScope.iddate);
	};
	// show calendar body 
	$scope.insert_day = function () {
	var board = document.getElementById('show_totaldays');
	$http.get("http://localhost:3000/api/").then(function (response) {
		//	$scope.myWelcome = [];
		$scope.myWelcome = response.data;
		
		dogme: for (var d = 0; d < $scope.myWelcome.length; d++) {
			
			
			$rootScope.event_date = moment($scope.myWelcome[d].Start_Time).format('YYYY, MM, DD');
			//	console.log( $rootScope.event_date );
			for (var j = 0; j < $rootScope.start_day; j++) {
				var backside = document.createElement("div");
				backside.innerHTML = ' ';
				backside.className = 'unday day';
				board.appendChild(backside);
			}
			loveme: for (var i = 1; i <= $rootScope.showdays; i++) {
				var backside = document.createElement("div");
				backside.innerHTML = '' + [i] + '';
				backside.className = 'day';
				backside.id = $rootScope.iddate + [i];
				board.appendChild(backside);
				var ooo = document.getElementById($rootScope.iddate + [i]).id;
				var ttt = moment().format('YYYY, MM, DD');
				$rootScope.xxx = document.getElementById(ooo).id;
				if (ttt === ooo && d == 0 ) {
					ooo = document.getElementById(ooo);
					ooo.className += "today";
					
				}
				/*console.log($rootScope.iddate + [i]);
				console.log($rootScope.event_date); */
				if (($rootScope.iddate + [i]) == $rootScope.event_date) {
					$scope.event_start = moment($scope.myWelcome[d].Start_Time).format('kk:mm');
					$scope.event_stop = moment($scope.myWelcome[d].End_Time).format('kk:mm');
					$scope.event_title = $scope.myWelcome[d].Title;
					console.log('its same');
					var myEl = angular.element(document.getElementById($rootScope.event_date));
					myEl.append('<div class="eventdiv"> <span class="tid_start">'+ $scope.event_start +'</span> - <span class="tid_start">'+ $scope.event_stop +'</span><br><span class="event_title">'+ $scope.event_title +'</span> </div>');
					
				}
				
			} 
		} 
	});
}
		// function to show last month
	$scope.last_month = function () {
		$('.day').remove();
		$('.day unday').remove();
		$('.daytoday').remove();
		$rootScope.x += 1;
		$rootScope.time_from_last_month = moment($rootScope.time_from_next_month).subtract($rootScope.x, 'M').format('YYYY, MMMM');
		$rootScope.totalday_from_last_month = moment($rootScope.time_from_next_month).subtract($rootScope.x, 'M').format('YYYY, MM, DD');
		$rootScope.iddate = moment($rootScope.totalday_from_last_month).format('YYYY, MM, ');
		$rootScope.month_header.innerHTML = $rootScope.time_from_last_month;
		$rootScope.start_day = moment($rootScope.totalday_from_last_month).format('d');
		
		// show total days in month
		$scope.showdays_lastmonth = moment($rootScope.totalday_from_last_month).daysInMonth();
		document.getElementById('show_howmany_day').innerHTML = $scope.showdays_lastmonth + " days";
		// go to function to show calendar body
		$scope.insert_day($rootScope.showdays = $scope.showdays_lastmonth, $rootScope.iddate);
		$rootScope.z = 0;
		
	};
	
	// function to show next month  
	$scope.next_month = function () {
		$('.day').remove();
		$('.day unday').remove();
		$('.daytoday').remove();
		$rootScope.z += 1;
		$rootScope.time_from_next_month = moment($rootScope.time_from_last_month).add($rootScope.z, 'M').format('YYYY, MMMM');
		$rootScope.totalday_from_next_month = moment($rootScope.time_from_last_month).add($rootScope.z, 'M').format('YYYY, MM, DD');
		$rootScope.iddate = moment($rootScope.totalday_from_next_month).format('YYYY, MM, ');
		$rootScope.month_header.innerHTML = $rootScope.time_from_next_month;
		$rootScope.start_day = moment($rootScope.totalday_from_next_month).format('d');
		
		// show total days in month
		$scope.showdays_nextmonth = moment($rootScope.totalday_from_next_month).daysInMonth();
		document.getElementById('show_howmany_day').innerHTML = $scope.showdays_nextmonth + " days";
		// go to function to show calendar body
		$scope.insert_day($rootScope.showdays = $scope.showdays_nextmonth, $rootScope.iddate);
		$rootScope.x = 0;
	};
	
$scope.showAdmin = () => {
    $scope.$broadcast('showHideAdmin', true);
  }
}