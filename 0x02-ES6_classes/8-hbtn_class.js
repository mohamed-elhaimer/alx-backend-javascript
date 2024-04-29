export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(newSize) {
    this._size = newSize;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueof() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
