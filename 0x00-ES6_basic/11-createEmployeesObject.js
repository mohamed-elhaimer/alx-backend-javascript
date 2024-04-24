export default function createEmployeesObject(departmentName, employees) {
  const myobject = {
    [departmentName]: [...employees],
  };
  return myobject;
}
