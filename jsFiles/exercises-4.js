function myFunc1() {
    var currForm = document.forms[0];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
      if (currForm[i].checked) {
        curr = currForm[i].value;
      }
    }
    if (curr == "Indentation") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } 
    else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput1").innerHTML = "Your choice: " + curr + txt;
}

function myFunc2() {
    var currForm = document.forms[1];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "a") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } 
    else {
        txt = " is not correct...";
    }
    document.getElementById("output2").value = "Your choice: " + curr + txt;
}

function myFunc3() {
    var currForm = document.forms[2];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "b") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } 
    else {
        txt = " is not correct...";
    }
    document.getElementById("output3").value = "Your choice: " + curr + txt;
}

function myFuncX() {
    var twoObjText = document.getElementById("inputX").value;
    console.log(twoObjText);
    if (twoObjText == "25 125") {
        document.getElementById("outputX").innerHTML = "That is correct!"
    } else {
        document.getElementById("outputX").innerHTML = "Incorrect. Please try again."
    }
}

