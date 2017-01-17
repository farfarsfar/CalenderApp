import eventList from './event-list/event-list.component.js';
import '../scss/app.scss';

const routerApp = angular.module('app', ['ui.router', 'eventList']);

routerApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  let
    eventList = {
      name: 'events',
      url: '/events',
      component: 'eventList'
    },
    adminState = {
      name: 'admin',
      url: '/events/admin',
      template: '<h1>Hello World</h1>'
    }

  $stateProvider.state(adminState);
  $stateProvider.state(eventList);

  $urlRouterProvider.otherwise('/events');
  $locationProvider.html5Mode(true);

// to avoid csrf error for authenticated requests
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});