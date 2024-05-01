export default function getStudentIdsSum(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.reduce((totalid, item) => item.id + totalid, 0);
  }
  return [];
}
