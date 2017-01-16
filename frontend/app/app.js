import eventList from './event-list/event-list.component.js';
import '../scss/app.scss';

var routerApp = angular.module('app', ['ui.router', 'eventList']);
  
routerApp.config(function($stateProvider, $urlRouterProvider) {
    var eventList = {
      name: 'events',
      url: '/events',
      component: 'eventList'
    }
    var testState = {
      name: 'test',
      url: '/test',
      template: '<h1>Hello World</h1>'
    }
    $stateProvider.state(testState);
    $stateProvider.state(eventList);
    
    $urlRouterProvider.otherwise('/events');
});