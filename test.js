import { HashMap } from './HashMap.js';

const hm1 = new HashMap();

hm1.set('apple', 'red');
hm1.set('banana', 'yellow');
hm1.set('carrot', 'orange');
hm1.set('dog', 'brown');
hm1.set('elephant', 'gray');
hm1.set('frog', 'green');
hm1.set('grape', 'purple');
hm1.set('hat', 'black');
hm1.set('ice cream', 'white');
hm1.set('jacket', 'blue');
hm1.set('kite', 'pink');
hm1.set('lion', 'golden');

console.log(hm1);

console.log('\n-------------------------------------\n');

hm1.set('0', 'silver');

hm1.set('2', 'silver');

console.log(hm1); // expand

console.log('\n-------------------------------------\n');

console.log(hm1.entries());

console.log('\n-------------------------------------\n');

console.log(hm1.values());

console.log('\n-------------------------------------\n');

console.log(hm1.keys());

console.log('\n-------------------------------------\n');

console.log(hm1.length());

hm1.clear();

console.log('\n-------------------------------------\n');

console.log(hm1);
