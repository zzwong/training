class HashTable {
  constructor() {
    this.structure = [];
    this.size = 0;
    this.capacity = 113;
  }
  get size() {
    return this.size;
  }

  get(key) {
    const h = this.hash(key);
    if (this.structure[h]) {
      let found = this.structure[h];
      if (Array.isArray(found)) {
        // iterate over list
        for (let i = 0; i < found.length; i++) {
          if (key === found[i]['key']) {
            return found[i]['value'];
          }
        }
      }
      return found.value;
    }
    return undefined;
  }

  add(key, value) {
    const toBeAdded = { key, value };
    // const h = this.
    const h = this.hash(key);
    let found = this.structure[h];
    if (found) {
      if (Array.isArray(found)) {
        this.structure[h].push(toBeAdded);
      } else {
        this.structure[h] = [found, toBeAdded];
      }
    } else {
      this.structure[h] = toBeAdded;
    }

    this.size += 1;
  }

  // prime numbers are used in hashing functions because it would evenly distribute when modding by prime
  // across the hash table
  hash(key) {
    let charCodeVal = 0;
    for (let i = 0; i < key.length; i++) {
      charCodeVal += key.charCodeAt(i);
    }
    return charCodeVal % this.capacity;
  }

  // return the removed object if removed, additionally mutates our this.structure array
  remove(key) {
    const h = this.hash(key);

    let found = this.structure[h];
    if (found) {
      if (Array.isArray(found)) {
        for (let i = 0; i < found.length; i++) {
          if (found[i]['key'] === key) {
            found = found[i]['key'];
            this.structure[h].splice(i, 1);
            break;
          }
        }
      } else {
        this.structure.splice(h, 1);
      }
      this.size -= 1;
      return found;
    }

    return undefined;
  }
}

const a = new HashTable();
a.add('donut', 'hole');
a.add('bacon', 'cheese');
a.add('tonud', 'beef');
console.log(a);
console.log(a.get('donut'));
console.log(a.remove('donut'));
console.log(a);
