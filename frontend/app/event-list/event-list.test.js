import eventList, { hej } from './event-list.component';

const exampleEvents = [
  {
    date: '23 aug 2017',
    time: '21:44',
    description: 'See Charles'
  }
];

describe('event list', () => {
  var element;
  var scope;
  var controller;

  beforeEach(() => {
    angular.mock.module('eventList');

    inject(function($rootScope, $compile, $componentController){
    scope = $rootScope.$new();
    element = angular.element('<event-list></event-list>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = $componentController('eventList', {$scope: scope});
    });

  });

  it('should be defined', () => {
    expect(controller).not.toBeUndefined();
  });
  it('should have an example event set', () => {
    expect(scope.events).toBe(exampleEvents);
  });
  it('should render the event text', () => {
    const p = element.find('p');
    expect(p.text()).toBe('See Charles');
  });
});

describe('hej', () => {
  it('should return hej', () => {
    expect(hej('Olle')).toBe('hej Olle');
  });
  it('should tell Kalle to bugger off', () => {
    expect(hej('Kalle')).toBe('stick!');
  })
})