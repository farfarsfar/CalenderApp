import uiRouter from 'angular-ui-router';
import eventList from './event-list/event-list.component.js';
import '../scss/app.scss';

const routerApp = angular.module('app', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/events');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('events', {
            url: '/events',
            component: 'eventList'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
});