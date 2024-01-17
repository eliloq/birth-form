let name = document.querySelector("input#name");
let age = document.querySelector("input#age");
let phone = document.querySelector("input#phone");
let email = document.querySelector("input#email");
let month = document.querySelector("select#month");
let degree = document.querySelector("select#degree");
let btnSend = document.querySelector("button#btnSend");
let btnReset = document.querySelector("button#btnReset");

let nameOutput = document.querySelector("p:nth-of-type(1)>span");
let yearOutput = document.querySelector("p:nth-of-type(2)>span");
let monthOutput = document.querySelector("p:nth-of-type(3)>span");
let phoneOutput = document.querySelector("p:nth-of-type(4)>span");
let emailOutput = document.querySelector("p:nth-of-type(5)>span");
let degreeOutput = document.querySelector("p:nth-of-type(6)>span");

let currentYear = 2024;

btnReset.addEventListener("click", function () {

    name.value="";
    age.value="";
    phone.value="";
    email.value="";
    degree.value="Associate";
    month.value="Farvardin";
    nameOutput.innerText = "";
    yearOutput.innerText = "";
    phoneOutput.innerText = "";
    emailOutput.innerText = "";
    degreeOutput.innerText = "";
    monthOutput.innerText = "";
  })


  
btnSend.addEventListener("click", function () {
  if (name.value != "" && age.value != "" && phone.value != "" && email.value != "") {
    nameOutput.innerText = name.value;
    yearOutput.innerText = currentYear - age.value;
    phoneOutput.innerText = phone.value;
    emailOutput.innerText = email.value;
    degreeOutput.innerText = degree.value;

    switch (month.value) {
      case "Farvardin":
        monthOutput.innerText = "April";
        break;

      case "Ordibehesht":
        monthOutput.innerText = "May";
        break;

      case "Khordad":
        monthOutput.innerText = "June";
        break;

      case "Tir":
        monthOutput.innerText = "July";
        break;

      case "Mordad":
        monthOutput.innerText = "August";
        break;

      case "Shahrivar":
        monthOutput.innerText = "September";
        break;

      case "Mehr":
        monthOutput.innerText = "October";
        break;

      case "Aban":
        monthOutput.innerText = "November";
        break;

      case "Azar":
        monthOutput.innerText = "December";
        break;

      case "Dey":
        monthOutput.innerText = "January";
        break;

      case "Bahman":
        monthOutput.innerText = "February";
        break;

      case "Esfand":
        monthOutput.innerText = "March";
        break;
    }
  }
  else{
    alert("Please fill in the fields")
  }
});
