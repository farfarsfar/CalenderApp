export default function eventListController($scope) {
  this.$onInit = console.log('event component initialized');
  $scope.events = [
    {
      date: '23 aug 2017',
      time: '21:44',
      description: 'See Charles'
    }
  ];
  $scope.addItem = () => {
    const newEvent = { date: new Date().toLocaleDateString(),
                       time: new Date().toLocaleTimeString(),
                       description: $scope.addMe };
    $scope.events.push(newEvent);
  }
}