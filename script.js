var subject1 =+prompt("Enter subject1 marks");
var subject2 =+prompt("Enter subject2 marks");
var subject3 =+prompt("Enter subject3 marks");
var subject4 =+prompt("Enter subject4 marks");
var subject5 =+prompt("Enter subject5 marks");
var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage =(totalMarks/500)*100;

alert("total marks: "+ totalMarks +". \n"+
    "percentage: "+ percentage+"%");