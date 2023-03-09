const formContainer = document.querySelector(".email-form");

function fetchUsers() {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        createForm(data);
    });
}

function createForm(user) {
    const heading = document.createElement("h2");
    const label = document.createElement("label");
    const inputEmail = document.createElement("input");
    const submitButton = document.createElement("button")

    inputEmail.classList.add("email");

    heading.innerHTML = "Add new E-mail";
    label.innerHTML = "Enter E-mail";
    submitButton.innerHTML = "Submit E-mail"

    formContainer.append(heading, label, inputEmail, submitButton);

    submitButton.addEventListener("click", createNewEmail)

    submitButton.email = inputEmail.value;
}

createForm();


function createNewEmail() {
    const inputEmail = document.querySelector(".email");
    let email = {email: inputEmail.value};

    addNewEmailToList(email);
}


function addNewEmailToList(email) { 
    console.log("hej", email);
    fetch("http://localhost:3000/users/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(email),
        })
        .then(res => res.json())
        .then(mail => {
            console.log(mail);
        })
}