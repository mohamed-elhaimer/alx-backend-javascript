export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(newbrand) {
    this._brand = newbrand;
  }

  set motor(newmotor) {
    this._motor = newmotor;
  }

  set color(newcolor) {
    this._color = newcolor;
  }

  // Define Symbol.species property
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
