import eventAdminController from './event-admin.controller';
import 'angular-moment-picker';
import './event-admin.style.scss';
import '../../scss/vendor/moment-picker.min.css';


export default angular.
  module('eventAdmin', ['moment-picker', 'ngAnimate']).
  component('eventAdmin', {
    template: require('./event-admin.template.html'),
    controller: eventAdminController
    }
  );