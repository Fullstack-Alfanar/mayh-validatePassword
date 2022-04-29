var myInputPass = document.getElementById("passInput");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var numberCase = document.getElementById("number");
var lengthCase = document.getElementById("length");
var spicealCharacter = document.getElementById("spiceal");
var lockEl = document.querySelector(".my-lock-icon");
var checkArray = [false, false, false, false, false];

function validatePassword() {
  var lowerCaseLetters = /[a-z]/g;
  if (myInputPass.value.match(lowerCaseLetters)) {
    lowerCase.classList.remove("invalid");
    lowerCase.classList.add("valid");
    checkArray[0] = true;
  } else {
    lowerCase.classList.remove("valid");
    lowerCase.classList.add("invalid");
    checkArray[0] = false;
  }
  var upperCaseLetters = /[A-Z]/g;
  if (myInputPass.value.match(upperCaseLetters)) {
    upperCase.classList.remove("invalid");
    upperCase.classList.add("valid");
    checkArray[1] = true;
  } else {
    upperCase.classList.remove("valid");
    upperCase.classList.add("invalid");
    checkArray[1] = false;
  }
  var numberCaseLetters = /[0-9]/g;
  if (myInputPass.value.match(numberCaseLetters)) {
    numberCase.classList.remove("invalid");
    numberCase.classList.add("valid");
    checkArray[2] = true;
  } else {
    numberCase.classList.remove("valid");
    numberCase.classList.add("invalid");
    checkArray[2] = false;
  }
  var charaters = /(?=.*[!@#$%^&*])/g;
  if (myInputPass.value.match(charaters)) {
    spicealCharacter.classList.remove("invalid");
    spicealCharacter.classList.add("valid");
    checkArray[3] = true;
  } else {
    spicealCharacter.classList.remove("valid");
    spicealCharacter.classList.add("invalid");
    checkArray[3] = false;
  }
  if (myInputPass.value.length >= 8) {
    lengthCase.classList.remove("invalid");
    lengthCase.classList.add("valid");
    checkArray[4] = true;
  } else {
    lengthCase.classList.remove("valid");
    lengthCase.classList.add("invalid");
    checkArray[4] = false;
  }

  let cnt = 0;
  checkArray.forEach(function (check) {
    if (check === true) cnt++;
  });

  if (cnt === checkArray.length) {
    console.log("ALLL GOOOOD");
    lockEl.classList.remove("fa-lock");
    lockEl.classList.add("fa-lock-open");
  } else {
    lockEl.classList.add("fa-lock");
    lockEl.classList.remove("fa-lock-open");
  }
}
