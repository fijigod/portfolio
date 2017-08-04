function clickFunction() {
var points=0;
  var choice1= document.querySelector('input[name="q1"]:checked').value;
  if(choice1 == "peppa pig") {
    points +=20;
  }
  else if (choice1 == "Caillou"){
    points +=15;
  }
  else if(choice1 == "Dora the Explorer"){
    points +=10;
  }
  else if (choice1 == "Curious George"){
  points+=5;
  }
  var choice2= document.querySelector('input[name="q2"]:checked').value;
  if(choice2 == "Pink Dress") {
    points +=20;
  }
  else if (choice2 == "Cape"){
    points +=15;
  }
  else if(choice2 == "Off Brand Skechers"){
    points +=10;
  }
  else if (choice2 == "Banana Dress"){
  points +=5;
  }
  var choice3= document.querySelector('input[name="q3"]:checked').value;
  if(choice3 == "Biscuits(cookies)") {
    points +=20;
  }
  else if (choice3 == "Sandwich"){
    points +=15;
  }
  else if(choice3 == "Tamales"){
    points +=10;
  }
  else if (choice3 == "Bananas"){
  points +=5;
}
alert(points);
}
