///////////////////////////////////////////////////////////////////

const btnDOM = document.querySelector("button");
const imgDOM = document.querySelector("img");
const nameDOM = document.querySelector(
  ".personal-info-container > :nth-child(1)"
);
const emailDOM = document.querySelector(
  ".personal-info-container > :nth-child(2)"
);
const phoneDOM = document.querySelector(
  ".personal-info-container > :nth-child(3)"
);

const locationDOM = document.querySelector(
  ".personal-info-container > :nth-child(4)"
);

const ageDOM = document.querySelector(
  ".personal-info-container > :nth-child(5)"
);

///////////////////////////////////////////////////////////////////

btnDOM.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let name = `${data.results[0].name.first} ${data.results[0].name.last}`;
      let email = data.results[0].email;
      let age = data.results[0].dob.age;
      let location = data.results[0].location.country;
      let phone = data.results[0].phone;
      let picture = data.results[0].picture.large;

      imgDOM.src = `${picture}`;
      nameDOM.textContent = `Name: ${name}`;
      emailDOM.textContent = `Email: ${email}`;
      phoneDOM.textContent = `Phone: ${phone}`;
      locationDOM.textContent = `Location: ${location}`;
      ageDOM.textContent = `Age: ${age}`;

      return data;
    });
});
