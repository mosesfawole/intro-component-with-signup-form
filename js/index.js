var fname, lname, email, password, name_error, email_error, password_error;
var fname = document.forms["vform"]["fname"];
var lname = document.forms["vform"]["lname"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];

//get all error objects
var fname_error = document.getElementById("fname_error");
var lname_error = document.getElementById("lname_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");
// setting all event listener

fname.addEventListener("blur", fnameVerify, true);
lname.addEventListener("blur", lnameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);
function validateForm(evt) {
  if (fname.value === "") {
    fname_error.textContent = "First name cannot be empty";
    fname.style.border = "1px solid red";
    (fname.style.backgroundImage = "url('/img/icon-error.svg')"),
      (fname.style.backgroundRepeat = "no-repeat"),
      (fname.style.backgroundPosition = "right");
    return false;
  }
  if (lname.value === "") {
    lname_error.textContent = "Last name cannot be empty";
    lname.style.border = "1px solid red";
    (lname.style.backgroundImage = "url('/img/icon-error.svg')"),
      (lname.style.backgroundRepeat = "no-repeat"),
      (lname.style.backgroundPosition = "right");
    return false;
  }
  if (email.value === "") {
    email_error.textContent = "Looks like this is not an email";
    email.style.border = "1px solid red";
    (email.style.backgroundImage = "url('/img/icon-error.svg')"),
      (email.style.backgroundRepeat = "no-repeat"),
      (email.style.backgroundPosition = "right");
    return false;
  }
  if (password.value === "") {
    password_error.textContent = "Password cannot be empty";
    password.style.border = "1px solid red";
    (password.style.backgroundImage = "url('/img/icon-error.svg')"),
      (password.style.backgroundRepeat = "no-repeat"),
      (password.style.backgroundPosition = "right");
    return false;
  }
}
function fnameVerify() {
  if (fname.value !== "") {
    fname.style.border = "1px solid lightblue";
    fname_error.textContent = "";
    fname.style.backgroundImage = "none";
    return true;
  }
}
function lnameVerify() {
  if (lname.value !== "") {
    lname.style.border = "1px solid lightblue";
    lname_error.textContent = "";
    lname.style.backgroundImage = "none";
    return true;
  }
}
function emailVerify() {
  if (email.value !== "") {
    email.style.border = "1px solid lightblue";
    email_error.textContent = "";
    email.style.backgroundImage = "none";
    return true;
  }
}
function passwordVerify() {
  if (password.value !== "") {
    password.style.border = "1px solid lightblue";
    password_error.textContent = "";
    password.style.backgroundImage = "none";
    return true;
  }
}
validateForm()
