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
    } else {
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
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput2").innerHTML = "Your choice: " + curr + txt;
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
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput3").innerHTML = "Your choice: " + curr + txt;
}

function myFunc4() {
    var currForm = document.forms[3];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "c") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput4").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc5() {
    var currForm = document.forms[4];
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
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput5").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc6() {
    var currForm = document.forms[5];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "d") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput6").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc7() {
    var currForm = document.forms[6];
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
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput7").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc2_1() {
    var currObjText = document.getElementById("input2_1").value;
    console.log(currObjText);
    if (currObjText == "25 125") {
        document.getElementById("divOutput2_1").innerHTML = "That is correct!"
    } else if (currObjText == "") {
        alert("Please input the result.")
    } else {
        document.getElementById("divOutput2_1").innerHTML = "Incorrect. Please try again."
    }
}

