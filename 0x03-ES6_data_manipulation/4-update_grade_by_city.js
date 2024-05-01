export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const arr = [];
  if (Array.isArray(listStudents) && typeof city === 'string' && Array.isArray(newGrades)) {
    const filtrestudents = listStudents.filter(
      (studentelement) => studentelement.location === city,
    );
    // eslint-disable-next-line array-callback-return
    filtrestudents.map((student) => {
      const matchegrades = newGrades.find((studentgrade) => student.id === studentgrade.studentId);
      if (matchegrades) {
        arr.push({ ...student, grade: matchegrades.grade });
      } else {
        arr.push({ ...student, grade: 'N/A' });
      }
    });
  }
  return arr;
}
