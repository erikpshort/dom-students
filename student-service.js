function StudentService() {

  var students = [{
    id: 0,
    name: 'Jake'
  }, {
    id: 1,
    name: 'Mark',
    repeatStudent: true
  }, {
    id: 2,
    name: 'John'
  }, {
    id: 3,
    name: 'Jerry'
  }, {
    id: 4,
    name: 'Joe'
  }, {
    id: 5,
    name: 'Jack'
  }, {
    id: 6,
    name: 'Jim'
  }, {
    id: 7,
    name: 'Jesse',
    phone: 8675309
  }, {
    id: 8,
    name: 'Jessie'
  }, {
    id: 9,
    name: 'Jeremey'
  }, {
    id: 10,
    name: 'Justin'
  }]

  this.getStudents = function () {
    return students.slice(0, students.length)
  }

  this.addStudent = function(studentName){
    students.push({
      name: studentName
    })
  }


  // this.getStudentByName = function(){

  // }

}