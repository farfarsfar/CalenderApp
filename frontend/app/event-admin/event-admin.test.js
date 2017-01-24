import { hej } from './event-admin.component';

describe('eventAdmin component', () => {
  var element;
  var scope;
  var controller;
  var $httpBackend;

  beforeEach(() => {
    angular.mock.module('eventAdmin');

    inject(function($rootScope, $compile, $componentController, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    element = angular.element('<event-admin></event-admin>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = $componentController('eventAdmin', {$scope: scope});
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

  describe('http requests', () => {
    afterEach(function() {
      $httpBackend.verifyNoOutstandingRequest();
    });
    it('should make a get call onInit', () => {
      $httpBackend.expectGET('/api/').respond(200, []);
      controller.$onInit();
      $httpBackend.flush();
    });
    it('should make a get call in fetchEvents', () => {
      $httpBackend.expectGET('/api/').respond(200, []);
      controller.fetchEvents();
      $httpBackend.flush();
    });
    it('should make a post call in addItem', () => {
      $httpBackend.expectPOST('/api/').respond(200, []);
      controller.addItem();
      $httpBackend.flush();
    });
    it('should make a postEvent call with correct post data', () => {})
    it('should give an error message when not logged in as admin', () => {
      $httpBackend.expectPOST('/api/').respond(403, []);
      controller.postEvent();
      $httpBackend.flush();
      expect(controller.errorText).toBe("It seems you are not authorized to post events. Try logging in as an administrator.");
    });
    it('should give a default error message when something goes horribly wrong', () => {
      $httpBackend.expectPOST('/api/').respond(466, []);
      controller.postEvent();
      $httpBackend.flush();
      expect(controller.errorText).toBe('Unknown error. Please try again!');
    });
  })
});

describe('test conditional function', () => {
  it('should return hej', () => {
    expect(hej('Olle')).toBe('hej Olle');
  });
  it('should tell Kalle to bugger off', () => {
    expect(hej('Kalle')).toBe('stick!');
  })
})