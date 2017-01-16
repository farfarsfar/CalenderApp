export default function($http) {
  this.$onInit = console.log('event component initialized');
  this.events = [
    {
      date: '23 aug 2017',
      time: '21:44',
      description: 'See Charles'
    }
  ];
  this.addItem = () => {
    const newEvent = { date: new Date().toLocaleDateString(),
                       time: new Date().toLocaleTimeString(),
                       description: this.addMe };
    this.events.push(newEvent);
    const toPost =  { "Title": "Event 432",
                      "Start_Time": "2017-01-11T10:44:12.030105Z",
                      "End_Time": "2017-01-11T11:01:04.537832Z"
                    };
    this.postEvent(toPost);
    this.fetchEvents();

    this.addMe = '';
  }
  this.sayHiOnChange = (msg) => {
    console.log(`input field says ${msg}`)
  }
  this.fetchEvents = () => {
    $http.get('/api/').then((resp) => {
      console.log("success: ", resp);
    }, (err) => { 
      console.log("error: ", err)
    }
    )
  }
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