import eventListController from './event-list.controller';
import './event-list.style.css';

export default angular.
  module('eventList', []).
  component('eventList', {
    template: require('./event-list.template.html'),
    controller: eventListController
    }
  );