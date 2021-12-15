function sendMail(contactForm) {
  emailjs.send("service_eq7h9b1", "foot_connect", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      function (response) {
        console.log("Message is successful..", response.status, response.text);
      },
      function (error) {
        console.log("Message has failed...", error);
      }
    );
    contactForm.reset();
  return false;
}