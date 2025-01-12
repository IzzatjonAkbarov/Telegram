let data = [
  {
    id: 1,
    userid: 1,
    name: "Izzatillo",
    password: "Izzatillo123",
  },
  {
    id: 2,
    userid: 2,
    name: "Fozilkhon",
    password: "Fozilkhon123",
  },
];
const form = document.querySelector("#form");
const password = document.querySelector("#password").value;
const Username = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    form.password.value == data[0].password &&
    form.Username.value == data[0].name
  ) {
    window.location.href = "./telegram.html";
    localStorage.setItem("user", JSON.stringify(data[0]));
  } else if (
    form.password.value == data[1].password &&
    form.Username.value == data[1].name
  ) {
    window.location.href = "./telegram.html";
    localStorage.setItem("user", JSON.stringify(data[1]));
  }
});
