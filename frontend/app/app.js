import eventAdmin from './event-admin/event-admin.component.js';
import '../scss/app.scss';
import eventList from './event-list/event-list.component.js';

const routerApp = angular.module('app', ['ui.router', 'eventAdmin', 'eventList']);

routerApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  let
    eventList = {
      name: 'eventList',
      url: '/events',
      component: 'eventList'
    },
    adminState = {
      name: 'admin',
      url: '/events/admin',
      component: 'eventAdmin'
    }

  $stateProvider.state(adminState);
  $stateProvider.state(eventList);

  $urlRouterProvider.otherwise('/events');
  $locationProvider.html5Mode(true);

// to avoid csrf error for authenticated requests
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});