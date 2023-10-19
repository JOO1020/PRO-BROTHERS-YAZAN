
const submitBtn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

submitBtn.value = 'Sending...';

  const serviceID = 'default_service';
const templateID = 'template_itpv483';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submitBtn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      submitBtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});