var jake = {
  name: 'Jake Overall',
  phone: '(208) 571-9524',
  age: 31,
  hairColor: 'Brown'
}
var x = 'phone'

// BRACKET NOTATION
jake[x]



// LOOPS START
var students = [{
  name: 'Jake'
},{
  name: 'Mark',
  repeatStudent: true
},{
  name: 'John'
},{
  name: 'Jerry'
},{
  name: 'Joe'
},{
  name: 'Jack'
},{
  name: 'Jim'
},{
  name: 'Jesse',
  phone: 8675309
},{
  name: 'Jessie'
},{
  name: 'Jeremey'
},{
  name: 'Justin'
}]

// console.log(jake[x], jake.phone, jake['phone'])

var count = 0;



while(count < students.length){
  var student = students[count]
  console.log(student.name)
  count++
}

// for (var i = 0; i < students.length; i++) {
//   var student = students[i];
  
// }

// FUNCTIONS

function add3(x){
  return x + 3
}

var add4 = function(x){
  return x + 4
}

var add = function(x,y){
  return x + y
}


let v = (x) => {
  return x + 3
}

function handleSearch(){
  var query = document.getElementById('query').value
  var result = findStudents(query, students)
  drawStudents(result)
}


function findStudents(name, roster){
  var foundStudents = []
  for(var i = 0; i < roster.length; i++){
    var student = roster[i]
    if(student.name == name){
      console.log('FOUND ONE')
      foundStudents.push(student)
    }
      console.log('Not yet found')
  }
  return foundStudents
}


function findStudent(name, roster){
  for(var i = 0; i < roster.length; i++){
    var student = roster[i]
    if(student.name == name){
      return student
    }
      console.log('Not yet found')
  }
  var error = {
    error: 'Sorry there is no student with the name ' + name
  } 
return error
}

function drawStudents(roster){

  var rosterElem = document.getElementById('student-roster')
  rosterElem.innerHTML = ''
  for (var i = 0; i < roster.length; i++) {
    var student = roster[i];
    rosterElem.innerHTML += '<tr><td>'+ (i+1) +'</td><td>'+ student.name +'</td></tr>'
  }

}


function handleReset(){
  drawStudents(students)
}


drawStudents(students)

















