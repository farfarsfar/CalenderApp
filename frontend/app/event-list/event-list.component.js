import eventListController from './event-list.controller';

export default angular.
  module('eventList', []).
  component('eventList', {
    template: require('./event-list.template.html'),
    controller: eventListController
    }
  );