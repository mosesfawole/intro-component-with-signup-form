var fname,
  lname,
  email,
  password,
  fname_error,
  lname_error,
  email_error,
  password_error;
fname = document.forms["vform"]["fname"];
lname = document.forms["vform"]["lname"];
email = document.forms["vform"]["email"];
password = document.forms["vform"]["password"];
var inputs = document.getElementsByTagName("input").innerHTML;

//get error object
fname_error = document.getElementById("fname_error");
lname_error = document.getElementById("lname_error");
email_error = document.getElementById("email_error");
password_error = document.getElementById("password_error");

// setting all event listener
fname.addEventListener("blur", fnameVerify, true);
lname.addEventListener("blur", lnameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);
function validateForm(evt) {
  if (
    fname.value === "" ||
    lname.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    fname_error.style.display = "block";
    lname_error.style.display = "block";
    email_error.style.display = "block";
    password_error.style.display = "block";
    // set border red
    fname.style.border = "1px solid red";
    lname.style.border = "1px solid red";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    // set error image
    fname.style.backgroundImage = "url('/img/icon-error.svg')";
    fname.style.backgroundRepeat = "no-repeat";
    fname.style.backgroundPosition = "right";

    lname.style.backgroundImage = "url('/img/icon-error.svg')";
    lname.style.backgroundRepeat = "no-repeat";
    lname.style.backgroundPosition = "right";

    email.style.backgroundImage = "url('/img/icon-error.svg')";
    email.style.backgroundRepeat = "no-repeat";
    email.style.backgroundPosition = "right";

    password.style.backgroundImage = "url('/img/icon-error.svg')";
    password.style.backgroundRepeat = "no-repeat";
    password.style.backgroundPosition = "right";
    return false;
  }
}
function fnameVerify() {
  if (fname.value !== "") {
    fname.style.border = "1px solid whitesmoke";
    fname_error.style.display = "none";
    fname.style.backgroundImage = "none";
    return true;
  }
}

function lnameVerify() {
  if (lname.value !== "") {
    lname.style.border = "1px solid whitesmoke";
    lname_error.style.display = "none";
    lname.style.backgroundImage = "none";
    return true;
  }
}
function emailVerify() {
  if (email.value !== "") {
    email.style.border = "1px solid whitesmoke";
    email_error.style.display = "none";
    email.style.backgroundImage = "none";
    return true;
  }
}
function passwordVerify() {
  if (password.value !== "") {
    password.style.border = "1px solid whitesmoke";
    password_error.style.display = "none";
    password.style.backgroundImage = "none";
    return true;
  }
}
