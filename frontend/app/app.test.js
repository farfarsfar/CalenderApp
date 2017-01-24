
describe('top level', () => {
  var $locationProvider;
  var $httpProvider;

  beforeEach(() => {
    angular.mock.module(function(_$locationProvider_, _$httpProvider_) {
        $locationProvider = _$locationProvider_;
        $httpProvider = _$httpProvider_;
        
        spyOn($locationProvider, 'html5Mode');
        
    });
    angular.mock.module('app');
    inject();
  });
  it('should use html5Mode', () => {
    expect($locationProvider.html5Mode).toHaveBeenCalledWith(true)
  });
  it('should set correct xsrf cookie', () => {
    expect($httpProvider.defaults.xsrfCookieName).toBe('csrftoken');
  })
  it('should set correct xsrf header', () => {
    expect($httpProvider.defaults.xsrfHeaderName).toBe('X-CSRFToken');
  })

});