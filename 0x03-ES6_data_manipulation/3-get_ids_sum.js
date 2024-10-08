export default function getStundentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
