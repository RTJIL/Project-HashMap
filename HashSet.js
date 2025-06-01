// In the pipeline

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

    if (this.filledCells > this.capacity * this.loadFactor) {
      const oldEntries = this.entries();

      this.capacity *= 2;
      this.array = new Array(this.capacity);
      this.filledCells = 0;

      oldEntries.forEach(([k, v]) => this.set(k, v));
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

  get(key) {
    let i = 0;
    let current = this.array[0];

    while (i < this.array.length) {
      while (current) {
        if (current.key !== key) current = current.next;
        else return current.value;
      }
      i++;
    }
    return null;
  }

  has(key) {
    let i = 0;
    let current = this.array[0];

    while (i < this.array.length) {
      while (current) {
        if (current.key !== key) current = current.next;
        else return true;
      }
      i++;
    }
    return false;
  }

  remove(key) {
    let i = 0;

    while (i < this.array.length) {
      let current = this.array[i];
      let prev = current;
      while (current) {
        if (!this.array[i].next && current.key === key) {
          this.array.splice(i, 1);
          this.filledCells--;
          return true;
        }
        if (this.array[i].key === key) {
          this.array[i] = current.next;
          this.filledCells--;
          return true;
        }
        if (current.key !== key) {
          prev = current;
          current = current.next;
        } else {
          prev.next = current.next;
          this.filledCells--;
          return true;
        }
      }
      i++;
    }
    return false;
  }

  length() {
    return this.filledCells;
  }

  clear() {
    this.array.splice(0);
    this.filledCells = 0;
    this.array = new Array(16);
    this.capacity = this.array.length;
  }

  keys() {
    let i = 0;
    let keys = [];

    while (i < this.array.length) {
      if (!this.array[i]) {
        keys.push(null); // optional — normally you'd just skip it
        i++;
        continue;
      }

      let current = this.array[i];
      while (current) {
        keys.push(current.key);
        current = current.next;
      }
      i++;
    }

    return keys;
  }

  values() {
    let keys = [];

    for (let i = 0; i < this.array.length; i++) {
      let current = this.array[i];
      while (current) {
        keys.push(current.value);
        current = current.next;
      }
    }

    return keys;
  }

  entries() {
    let entries = [];

    for (let i = 0; i < this.array.length; i++) {
      let current = this.array[i];
      while (current) {
        entries.push([current.key, current.value]);
        current = current.next;
      }
    }

    return entries;
  }

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

export { HashMap };
