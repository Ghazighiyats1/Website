const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.interest')

function validateForm() {
    if (document.forms["myForm"]["name"].value == "") {
      alert("Name must be filled out");
      document.forms["myForm"]["name"].focus();
      return false;
    }
    if (document.forms["myForm"]["email"].value == "") {
      alert("Email must be filled out");
      document.forms["myForm"]["email"].focus();
      return false;
    }
    if (document.forms["myForm"]["interest"].value == "") {
      alert("Interest must be filled out");
      document.forms["myForm"]["interest"].focus();
      return false;
    }
    else {
        alert("Submit Done")
    }
}