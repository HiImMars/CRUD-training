const elements = {
  container: document.querySelector(".js-list"),
};

serviceGetAll().then((data) =>
  elements.container.insertAdjacentHTML("beforeend", createMarkup(data))
);

function serviceGetAll() {
  return fetch("http://127.0.0.1:5500/api/getAll").then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, phone, name, email, comment }) => `<li data-question-id="${_id}">
        <ul>
          <li>Name: ${name}</li>
          <li>Phone: ${phone}</li>
          <li>Email: ${email}</li>
        </ul>
        <p>Comment: ${comment}</p>
      </li>`
    )
    .join("");
}
