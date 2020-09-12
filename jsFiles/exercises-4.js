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
    if (curr == "a") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
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
    if (curr == "c") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
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
    if (curr == "c") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput3").innerHTML = "Your choice: " + curr + txt;
}

function myFunc3_1() {
    var currForm = document.forms[3];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput3_1").innerHTML = "Your choice: " + curr + txt;
}

function myFunc4() {
    var currForm = document.forms[4];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput4").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc5() {
    var currForm = document.forms[5];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput5").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc6() {
    var currForm = document.forms[6];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput6").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc7() {
    var currForm = document.forms[7];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput7").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc8() {
    var currForm = document.forms[8];
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
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput8").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc9() {
    var currForm = document.forms[9];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
            curr += currForm[i].value;
        }
    }
    if (curr == "bcefg") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput9").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc10() {
    var currForm = document.forms[10];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
            curr += currForm[i].value;
        }
    }
    if (curr == "acdfg") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput10").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc11() {
    var currForm = document.forms[11];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
            curr += currForm[i].value;
        }
    }
    if (curr == "abc") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
        return;
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput11").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc2_1() {
    var currObjText = document.getElementById("input2_1").value;
    console.log(currObjText);
    if (currObjText == "30") {
        document.getElementById("divOutput2_1").innerHTML = "<strong>"+"That is correct!"+"</strong>"
        document.getElementById("sp21").style.display = "inline";
    } else if (currObjText == "") {
        alert("Please input the result.")
    } else {
        document.getElementById("divOutput2_1").innerHTML = "Incorrect. Please try again."
        document.getElementById("sp21").style.display = "none";
    }
}

function myFunc2_2() {
    var currObjText = document.getElementById("input2_2").value;
    console.log(currObjText);
    if (currObjText == "[1, 2, 3, 4] [1, 2, 3, 4]") {
        document.getElementById("divOutput2_2").innerHTML = "<strong>"+"That is correct!"+"</strong>"
        document.getElementById("sp22").style.display = "inline";
    } else if (currObjText == "") {
        alert("Please input the result.")
    } else {
        document.getElementById("divOutput2_2").innerHTML = "Incorrect. Please try again."
        document.getElementById("sp22").style.display = "none";
    }
}

function myFunc2_3_1() {
    var currObjTxt1 = document.getElementById("input2_3_1").value;
    var currObjTxt2 = document.getElementById("input2_3_2").value;
    var currObjTxt3 = document.getElementById("input2_3_3").value;
    if (currObjTxt1 == "40") {
        document.getElementById("sp231").style.display = "inline";
    } else {
        document.getElementById("sp231").style.display = "none";
    }
    if (currObjTxt2 == "(20, 30, 40)") {
        document.getElementById("sp232").style.display = "inline";
    } else {
        document.getElementById("sp232").style.display = "none";
    }
    if (currObjTxt3 == "(20, 30, 40) (0, 10, 20, 30) (30, 40, 50, 60, 70, 80)") {
        document.getElementById("sp233").style.display = "inline";
    } else {
        document.getElementById("sp233").style.display = "none";
    }
}

