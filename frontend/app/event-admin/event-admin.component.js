import eventAdminController from './event-admin.controller';
import './event-admin.style.css';

export default angular.
  module('eventAdmin', []).
  component('eventAdmin', {
    template: require('./event-admin.template.html'),
    controller: eventAdminController
    }
  );