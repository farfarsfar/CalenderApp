import chai, { expect } from 'chai';
import eventList from './event-list.component';


describe('event list', () => {
  var element;
  var scope;
  var controller;

  beforeEach(() => {
    angular.mock.module('eventList');

    inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<event-list></event-list>');
    element = $compile(element)(scope);
    scope.$apply();
    });

    controller = element.controller('eventList');
  });

  it('should be defined', () => {
    expect(controller).to.not.be.undefined;
  });
  it('should have an example event set', () => {
    // TODO: how to access scope?
    //expect(scope.events).to.deep.equal(exampleEvents);
  });
  it('should render the event text', () => {
    const p = element.find('p');
    expect(p.text()).to.equal('See Charles');
  });
})