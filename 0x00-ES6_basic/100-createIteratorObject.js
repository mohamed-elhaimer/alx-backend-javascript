export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const emps = [];
  for (const emp in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, emp)) {
      const employersInDepartment = allEmployees[emp];
      emps.push(...employersInDepartment);
    }
  }
  return emps;
}
