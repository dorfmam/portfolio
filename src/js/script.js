const form = document.getElementById("contact-form");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = document.getElementById("name");
    const spanNameField = document.getElementById("name-field");

    if (nameField.value.length < 3) {
        spanNameField.innerHTML = "Name must have at least 3 characters.";
        nameField.focus();
        return;
    } else {
        spanNameField.innerHTML = "";
    }

    const emailField = document.getElementById("email");
    const spanEmailField = document.getElementById("email-field");

    if (!emailField.value.match(regex)) {
        spanEmailField.innerHTML =
            'Enter a valid e-mail address that includes "@" and ".".';
        emailField.focus();
        return;
    } else {
        spanEmailField.innerHTML = "";
    }

    const subjectField = document.getElementById("subject");
    const spanSubjectField = document.getElementById("subject-field");

    if (subjectField.value.length < 5) {
        spanSubjectField.innerHTML = "Subject must have at least 5 characters.";
        subjectField.focus();
        return;
    } else {
        spanSubjectField.innerHTML = "";
    }

    const messageField = document.getElementById("message");
    const spanMessageField = document.getElementById("message-field");

    if (messageField.value.length < 10) {
        spanMessageField.innerHTML =
            "Message must have at least 10 characters.";
        messageField.focus();
        return;
    } else {
        spanMessageField.innerHTML = "";
    }

    form.submit();
});
