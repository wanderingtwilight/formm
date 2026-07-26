console.log("Script Loaded");
emailjs.init({
    publicKey: "_9TjqOpCJGLKlgMnx",
});

const form = document.getElementById("myForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: "New Registration Form"
    };

    emailjs.send(
        "service_bbwe12m",
        "template_839ezoo",
        params
    )
    .then(function(){

        msg.innerHTML =
        "🎉 Congratulations! Your form has been submitted successfully.";

        form.reset();

    })
    .catch(function(error){

        console.log(error);

        alert("Email Sending Failed!");

    });

});