import angular from 'angular';
import eventList from './event-list/event-list.component.js';
import '../scss/app.scss';

angular.module('app', [eventList.name]).
  directive('testDirective', () => { template: "This is from a directive!"})