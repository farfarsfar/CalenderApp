export default function() {
  this.$onInit = console.log('event component initialized');
  this.events = [
    {
      date: '23 aug 2017',
      time: '21:44',
      description: 'See Charles'
    }
  ];
  this.addItem = () => {
    const newEvent = { date: new Date().toLocaleDateString(),
                       time: new Date().toLocaleTimeString(),
                       description: this.addMe };
    this.events.push(newEvent);
    this.addMe = '';
  }
}