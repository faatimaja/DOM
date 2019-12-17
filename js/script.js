function dropHandler(ev) {
  console.log('File(s) dropped');

  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {

      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone'); 

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}

//Form validation

function validateForm() {

  var x = document.forms["myForm"]["uname"].value;
  var ps = document.forms["myForm"]["psw"].value;
  var dob = document.forms["myForm"]["dob"].value;

  if(x == "") {
    alert("Username must be entered!");
    return false;
  }
  else if(x.length < 4){
    alert("Username must have at least 4 characters!");
    return false;
  }
  if(ps == ""){
    alert("Password must be entered!");
    return false;
  }
  else if(ps.length < 8){
    alert("Password must have at least 8 characters!");
    return false;
  }
  if (myForm.agreement.checked == false) 
  {
    alert ('You didn\'t choose any of the checkboxes!');
    return false;
  } 
  else {    
      return true;
  }

  var age = getAge(dob);
  if(age < 18){
    alert("You must be adult!");
    return false;
  }
}

function getAge(year) {
  ageMS = Date.parse(Date()) - Date.parse(year);
  age = new Date();
  age.setTime(ageMS);
  ageYear = age.getFullYear() - 1970;
  return ageYear;
}
