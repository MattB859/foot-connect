/*function sendMail(contactForm) {
  emailjs.send("service_eq7h9b1", "foot_connect", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      function (response) {
        console.log("Message sent successful..", response.status, response.text); 
      },
      function (error) {
        console.log("Message has failed...", error);
      }
    );
    contactForm.reset();
 return false;
}*/


// ------------- Email form validation //
function validateName(x) {
  var expression = /[A-Za-z -']$/;
  if (expression.test(document.getElementById(x).value)) {
    // Style green border
    document.getElementById(x).style.border = "2px solid green";
    // Hide error prompt
    document.getElementById("errorMsg" ).style.display = "none";
    // Show or hide success and falure icons
    document.getElementById("successIcon").style.opacity = "1";
    document.getElementById("failureIcon").style.opacity = "0";

    return true;
} else {
    document.getElementById(x).style.border = "2px solid red";
    document.getElementById("errorMsg" ).style.display = "block";
    document.getElementById("successIcon").style.opacity = "0";
    document.getElementById("failureIcon").style.opacity = "1";

    return false;
  }
   
}

// Validate email
function validateEmail(x) {
  var symbols = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (symbols.test(document.getElementById(x).value)) {
    // Style green border
    document.getElementById("emailaddress").style.border = "2px solid green";
    // Hide error prompt
    document.getElementById("emailError").style.display = "none";
    // Show or hide success and falure icons
    document.getElementById("emailSuccessIcon").style.opacity = "1"
    document.getElementById("emailFailureIcon").style.opacity = "0";

    return true;
  } else {
    document.getElementById("emailaddress").style.border = "2px solid red";
    document.getElementById("emailError").style.display = "block";
    document.getElementById("emailFailureIcon").style.opacity = "1";
    document.getElementById("emailSuccessIcon").style.opacity = "0";

    return false;
  }
}

function validateMessage(x) {
  var expression = /[A-Za-z\\.,; -']$/;
  if (expression.test(document.getElementById(x).value)) {
    // Style green border
    document.getElementById("message").style.border = "2px solid green";
    // Hide error prompt
    document.getElementById("messageError" ).style.display = "none";
    // Show or hide success and falure icons
    document.getElementById("msgSuccessIcon").style.opacity = "1";
    document.getElementById("msgFailureIcon").style.opacity = "0";

    return true;
} else {
    document.getElementById("message").style.border = "2px solid red";
    document.getElementById("messageError" ).style.display = "block";
    document.getElementById("msgSuccessIcon").style.opacity = "0";
    document.getElementById("msgFailureIcon").style.opacity = "1";

    return false;
  }
}


function validateForm() {
  var error = 0;
  if (!validateName("name")) {
    document.getElementById("errorMsg").style.display = "block";
    error++;
  }
  if (!validateEmail("emailaddress")) {
    document.getElementById("emailError").style.display = "block";
    error++;
  }
 
  if (!validateMessage("message")) {
    document.getElementById("messageError").style.display = "block";
    error++;
  }
  
  // Don't submit form if there are errors
  if (error > 0) {
  return false;
  }

}