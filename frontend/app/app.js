import eventList from './event-list/event-list.component.js';
import '../scss/app.scss';

var routerApp = angular.module('app', ['ui.router', 'eventList']);
  
routerApp.config(function($stateProvider) {
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
    /*$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('events', {
            url: '/events',
            component: 'eventList'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });*/
});