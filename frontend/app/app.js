import eventAdmin from './event-admin/event-admin.component.js';
import '../scss/app.scss';

const routerApp = angular.module('app', ['ui.router', 'eventAdmin']);

routerApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  let
    eventList = {
      name: 'eventList',
      url: '/events',
      template: '<h1>Events</h1>'
    },
    adminState = {
      name: 'admin',
      url: '/events/admin',
      component: 'eventAdmin'
    }

  $stateProvider.state(adminState);
  $stateProvider.state(eventList);

  $urlRouterProvider.otherwise('/list');
  $locationProvider.html5Mode(true);

// to avoid csrf error for authenticated requests
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});