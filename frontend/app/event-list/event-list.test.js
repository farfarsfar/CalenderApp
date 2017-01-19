import { hej } from './event-list.component';

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

  describe('onInit', () => {
    beforeEach(() => {
      spyOn(controller, '$onInit').and.callThrough();
      spyOn(controller, 'fetchEvents');
      controller.$onInit();
    });

    it('should call fetchEvents onInit', () => {
      expect(controller.fetchEvents).toHaveBeenCalled();
    });
  })
  
  it('should have a function to add an event', () => {
    expect(controller.addItem).toBeDefined();
  });
  it('should have an addItem function calling a postEvent function', () => {
    spyOn(controller, 'addItem').and.callThrough();
    spyOn(controller, 'postEvent');
    controller.addItem();
    expect(controller.postEvent).toHaveBeenCalled();
  });
  it('should have a function to say hi on change', () => {
    spyOn(controller, 'sayHiOnChange').and.callThrough();
    spyOn(console, 'log');
    controller.sayHiOnChange('hi');
    expect(console.log).toHaveBeenCalledWith('input field say hi');
  });
  it('should render the event header', () => {
    const p = element.find('h2');
    expect(p.text()).toBe('Events');
  });
});

describe('test conditional function', () => {
  it('should return hej', () => {
    expect(hej('Olle')).toBe('hej Olle');
  });
  it('should tell Kalle to bugger off', () => {
    expect(hej('Kalle')).toBe('stick!');
  })
})