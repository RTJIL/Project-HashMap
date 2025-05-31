# Project-HashMap
# 🧠 HashMap Implementation in JavaScript
This project is a custom implementation of a HashMap data structure using JavaScript. HashMaps store key-value pairs and offer fast access, insertion, and deletion using a hashing mechanism. We've also included automatic resizing based on load factor and support for collisions using separate chaining.

## ⚙️ Features
Custom string hashing function (with overflow prevention)

Collision handling using separate chaining

Dynamic resizing (doubling the capacity when the load factor is exceeded)

Built-in methods to:

set(key, value)

get(key)

has(key)

remove(key)

length()

clear()

keys()

values()

entries()

Only accepts string keys

Bonus: HashSet implementation (keys only, no values)

## 🏗️ HashMap Structure
js
Copy
Edit
const map = new HashMap(0.75); // loadFactor = 0.75 (default), capacity starts at 16
Internal Hash Function
js
Copy
Edit
function hash(key) {
  let hashCode = 0;
  const prime = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
  }
  return hashCode;
}
Collision Handling
When two keys hash to the same index, values are stored in a bucket as an array of key-value pairs (chaining).

## 📁 File Structure
arduino
Copy
Edit
/hashmap-project
  ├── HashMap.js
  ├── HashSet.js (optional)
  ├── test.js
  └── README.md
