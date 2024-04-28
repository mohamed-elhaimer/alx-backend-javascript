export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.lenght = length;
    this.students = students;
  }

  set name(newname) {
    if (typeof newname === 'string') {
      this._name = newname;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set lenght(newlenght) {
    if (typeof newlenght === 'number') {
      this._length = newlenght;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array');
    }

    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new Error('Student must be a string');
      }
    }

    this._students = newStudents;
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
