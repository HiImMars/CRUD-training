const elements = {
  form: document.querySelector(".js-question"),
};

elements.form.addEventListener("submit", handlerQuestion);

function handlerQuestion(event) {
  event.preventDefault();

  const { question, email, phone, userName } = event.currentTarget.elements;

  const data = {
    name: userName.value,
    phone: phone.value,
    email: email.value,
    comment: question.value,
  };

  serviceQuestion(data)
    .then(() => alert("Success"))
    .catch(() => alert("Failed"))
    .finally(() => event.target.reset());
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch("http://127.0.0.1:5500/api/question", options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
}
