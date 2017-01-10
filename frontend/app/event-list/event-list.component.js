import eventListController from './event-list.controller';

export default angular.
  module('eventList', ['ui-router']).
  component('eventList', {
    template: require('./event-list.template.html'),
    controller: eventListController
    }
  );