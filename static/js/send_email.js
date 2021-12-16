/*function sendMail(contactForm) {
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
}*/

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'foot_connect';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
      ;
    return contactForm.reset();
  });