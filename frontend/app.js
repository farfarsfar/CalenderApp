var app = angular.module('rattana_angular', []);

app.controller('first_month', function($scope, $rootScope){
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
  $scope.showevent();
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
  for (var j = 0; j < $rootScope.start_day; j++) {
    var backside = document.createElement("div");
    backside.innerHTML = ' ';
    backside.className = 'unday day';
    board.appendChild(backside);
  }
  for (var i = 1; i <= $rootScope.showdays; i++) {
    var backside = document.createElement("div");
    backside.innerHTML = '' + [i] + '';
    backside.className = 'day';
    backside.id = $rootScope.iddate + [i];
    board.appendChild(backside);
    var ooo = document.getElementById($rootScope.iddate + [i]).id;
    var ttt = moment().format('YYYY, MM, DD');
    var xxx = document.getElementById(ooo).id;
    if (ttt === ooo) {
      ooo = document.getElementById(ooo);
      ooo.className += "today";
    }
  }
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
  $rootScope.start_day = moment($scope.totalday_from_next_month).format('d');
  // show total days in month
  $scope.showdays_nextmonth = moment($scope.totalday_from_next_month).daysInMonth();
  document.getElementById('show_howmany_day').innerHTML = $scope.showdays_nextmonth + " days";
  // go to function to show calendar body
  $scope.insert_day($rootScope.showdays = $scope.showdays_nextmonth, $rootScope.iddate);
  $rootScope.x = 0;
};


// log in function
$scope.loginfunction = function(){
	$('#login').removeClass('hide');
	$('#login').removeClass('show');
	$('#month_wrapper, #show_totaldays, #bottomwrapper, #weekday_wrapper').css({'opacity':'.0'});
	
}
$scope.closelogin = function(){	
//$('.glyphicon-remove').removeClass('show');	
$('#login').addClass('hide');
$('#month_wrapper, #show_totaldays, #bottomwrapper, #weekday_wrapper').css({'opacity':'1'});	
	
};

	
$scope.showevent = function(){
	
	var myEl = angular.element( document.querySelector( '.daytoday' ) );
    myEl.append('<div class="eventdiv"> <span class="tidstart">13:00 </span> <span class="eventtital"> group study </span>  </div> <div class="eventdiv"> <span class="tidstart">15:00</span> <span class="eventtital"> cooking </span> </div> <div class="eventdiv"> <span class="tidstart">20:00</span> <span class="eventtital"> watching tv </span>  </div>'); 
}	
	
	
});

