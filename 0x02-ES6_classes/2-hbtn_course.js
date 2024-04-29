export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.lenght = length;
    this.students = students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set lenght(newLenght) {
    if (typeof newLenght === 'number') {
      this._length = newLenght;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((items) => typeof items === 'string')) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._lenght;
  }

  get students() {
    return this._students;
  }
}
