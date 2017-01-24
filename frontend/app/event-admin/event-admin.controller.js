import moment from 'moment';

export default function($scope, $http) {
  this.$onInit = () => this.fetchEvents();
  this.events;
  this.errorText;

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
    this.addMe = '';
  };
  this.sayHiOnChange = (msg) => {
    console.log(`input field say ${msg}`)
  }
  this.fetchEvents = () => {
    $http.get('/api/').then((resp) => {
      this.events = resp.data;
    }, (err) => { 
      // handle error please
    }
    );
  };
  this.postEvent = (event) => {
    $http({
      method: 'POST',
      url: '/api/',
      data: event
    }).then((resp) => {
    // this callback will be called asynchronously
    // when the response is available
      this.fetchEvents();
    }, (err) => {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      const error = () => { 
        switch(err.status) {
          case 403: 
            return "It seems you are not authorized to post events. Try logging in as an administrator."
          default:
            return 'Unknown error. Please try again!'
        }
      }
      this.errorText = error();
  });
  }
}