const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(email.value);
    console.log(password.value);
  }

  const data = {
    userEmail: email.value,
    userPassword: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
