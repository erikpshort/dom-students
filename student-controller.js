function StudentController() {

   this.test = 'testing'
  
  var studentService = new StudentService()




  function drawStudents(roster) {
    console.log('Are we here? line 114')
    var rosterElem = document.getElementById('student-roster')
    rosterElem.innerHTML = ''
    console.log('Are we here? line 117')

    for (var i = 0; i < roster.length; i++) {
      var student = roster[i];

      rosterElem.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + student.name + '</td></tr>'
      console.log(i, ' its working!!!')
    }
  }

  this.handleReset = function(){
    var students = studentService.getStudents()
    drawStudents(students)
  }

  this.addStudent = function addStudent() {

    var studentName = document.getElementById('new-student').value

    studentService.addStudent(studentName)

    this.handleReset()
  }


  this.handleReset()


}