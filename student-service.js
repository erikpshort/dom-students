function StudentService() {

  var students = [{
    id: 0,
    name: 'Jake',
    phone: 8675309
  }, {
    id: 1,
    name: 'Mark',
    repeatStudent: true,
    phone: 8675309
  }, {
    id: 2,
    name: 'John',
    phone: 8675309
  }, {
    id: 3,
    name: 'Jerry',
    phone: 8675309
  }, {
    id: 4,
    name: 'Joe',
    phone: 8675309
  }, {
    id: 5,
    name: 'Jack',
    phone: 8675309
  }, {
    id: 6,
    name: 'Jim',
    phone: 8675309
  }, {
    id: 7,
    name: 'Jesse',
    phone: 8675309
  }, {
    id: 8,
    name: 'Jessie',
    phone: 8675309
  }, {
    id: 9,
    name: 'Jeremey',
    phone: 8675309
  }, {
    id: 10,
    name: 'Justin',
    phone: 8675309
  }]

  this.getStudents = function () {
    return students.slice(0, students.length)
  }

  this.addStudent = function(studentName, studentPhone){
    students.push({
      id: students.length,
      name: studentName,
      phone: studentPhone,
    })
  }


  // this.getStudentByName = function(){

  // }

}