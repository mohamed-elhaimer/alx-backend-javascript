export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allemp) {
      const { length } = Object.keys(allemp);
      return length;
    },
  };
  return obj;
}
