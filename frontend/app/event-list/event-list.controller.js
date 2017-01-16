import moment from 'moment';

export default function($http) {
  this.$onInit = () => this.fetchEvents();
  this.events;

  this.addItem = () => {
    const newEvent = { 
      title: this.addMe,
      startTime: moment(),
      endTime: moment('2017-01-19 22:00')
    };
    const toPost = { 
      "Title": newEvent.title,
      "Start_Time": newEvent.startTime,
      "End_Time": newEvent.endTime
    };
    this.postEvent(toPost);
    this.fetchEvents();

    this.addMe = '';
  };
  this.sayHiOnChange = (msg) => {
    console.log(`input field says ${msg}`)
  }
  this.fetchEvents = () => {
    $http.get('/api/').then((resp) => {
      console.log("success: ", resp);
      this.events = resp.data;
    }, (err) => { 
      console.log("error: ", err)
    }
    );
  };
  this.postEvent = (event) => {
    $http({
      method: 'POST',
      url: '/api/',
      data: event
    }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  }
}