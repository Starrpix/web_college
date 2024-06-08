console.log(window);
window.alert("hi window");
//console.log(location.href);
//console.log(window.navigator.userAgent);
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

function addInfo(e) {
  e.preventDefault();
  let user = document.getElementById("username").value;
  let msguser = document.getElementById("msgUser");

  let mail = document.getElementById("useremail").value;
  let msgmail = document.getElementById("msgEmail");

  let password = document.getElementById("userpass").value;
  let msgpassword = document.getElementById("msgPassword");

  let phone = document.getElementById("userphone").value;
  let msgphone = document.getElementById("msgPhone");

  let isValid = true;

  if (user.trim() === "") {
    msguser.innerText = "Username field is empty";
    msguser.style.color = "blue";
    isValid = false;
  }

  if (mail.trim() === "") {
    msgmail.innerText = "Email field is empty";
    msgmail.style.color = "blue";
    isValid = false;
  }

  if (phone.trim() === "") {
    msgphone.innerText = "Phone field is empty";
    msgphone.style.color = "blue";
    isValid = false;
  } else if (isNaN(phone)) {
    msgphone.innerText = "Phone should be numeric";
    msgphone.style.color = "blue";
    isValid = false;
  } else if (phone.length != 10) {
    msgphone.innerText = "Phone should be having 10 digits length";
    msgphone.style.color = "blue";
    isValid = false;
  } else {
    msgphone.innerText = "";
  }

  if (password.trim() === "") {
    msgpassword.innerText = "Password field is empty";
    msgpassword.style.color = "blue";
    isValid = false;
  }

  return isValid;
}
ASZ