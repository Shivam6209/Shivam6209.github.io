var typed = new Typed(".multiple-text", {
    strings: ["Java Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Replace with your EmailJS public key, template ID, and service ID
const EMAILJS_KEY = "efC3FyfUsSb-d1SHh";
const EMAILJS_TEMPLATE_ID = "template_a575dqm";
const EMAILJS_SERVICE_ID = "service_532jxxi";
emailjs.init(EMAILJS_KEY);
let form=document.getElementById("myform");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Fetch form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    email_id: email,
    message: message,
  })
    .then(function () {
      alert("Email sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      console.error("Failed to send email:", error);
    });
});
