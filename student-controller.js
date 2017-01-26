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

      rosterElem.innerHTML += '<tr><td>' + student.id + '</td><td>' + student.name + '</td><td>'+ student.phone +'</tr>'
      console.log(i, ' its working!!!')
    }
  }

  this.handleReset = function(){
    var students = studentService.getStudents()
    drawStudents(students)
  }

  this.addStudent = function addStudent(e) {
    debugger
    e.preventDefault()
    var form = e.target
   
    
    
    var studentName = form['student-name'].value
    var studentPhone = form['student-phone'].value
    var studentBio = form['student-bio'].value
    studentService.addStudent(studentName, studentPhone)

    this.handleReset()
  }


  this.handleReset()


}