class HashMap {
  constructor() {
    this.array = new Array(16);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for(let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    
  }

}


const hm1 = new HashMap();

const arr = [];

console.log(hm1)

