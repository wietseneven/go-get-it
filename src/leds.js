import { observable } from 'mobx';

const leds = observable(Array.apply('', { length: 1024 }));

export default leds;
