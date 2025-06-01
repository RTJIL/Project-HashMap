class HashMap {
  constructor() {
    this.array = new Array(16);
    this.capacity = this.array.length;
    this.loadFactor = 0.8;
    this.filledCells = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % this.capacity;
    if (index < 0 || index >= this.array.length) {
      throw new Error('Trying to access index out of bounds');
    }

    if (this.filledCells > this.capacity / this.loadFactor) {
      let newArray = new Array(this.capacity * 2);
      let current = this.array[0];
      while(current) {
        newArray
      }
    }

    if (this.array[index] === undefined) {
      this.array[index] = new Node(key, value);
      this.filledCells++;
      return;
    }

    if (this.array[index].value === value) {
      this.array[index].value = value;
      return;
    }

    let current = this.array[index];

    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(key, value);
    this.filledCells++;
  }

  get(key) {}

  printHashMap() {
    this.array.forEach((e) => {
      console.log(e);
    });
  }
}

class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

const hm1 = new HashMap();

hm1.set(1233, 'dfrvdfgd');
hm1.set('sfssdf', 34234);
hm1.set('41', 'wwew2232');
hm1.set(21, 'dfrvdfgd');
hm1.set('lijwe', 321);
hm1.set('41', 'kppoj');

console.log(hm1);

console.log('\n-------------------------------------\n');

hm1.printHashMap();
