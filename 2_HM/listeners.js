import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();


eventEmitter.on('onRed', () => {
    console.log('Загорелся красный')
});
  
eventEmitter.on('onYellow', () => {
    console.log('Загорелся желтый')
});
  
eventEmitter.on('onGreen', () => {
    console.log('Загорелся зеленый')
});

export default eventEmitter;