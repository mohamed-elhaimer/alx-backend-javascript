export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(newsize) {
    if (typeof newsize === 'number') {
      this._size = newsize;
    }
  }

  set location(newlocation) {
    if (typeof newlocation === 'string') {
      this._location = newlocation;
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
