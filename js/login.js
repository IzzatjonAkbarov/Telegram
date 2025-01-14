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
let wrong = document.getElementById("wrong");
const form = document.querySelector("#form");
const password = document.querySelector("#password").value;
const Username = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  function checking() {
    if (
      form.password.value == data[0].password &&
      form.Username.value == data[0].name
    ) {
      window.location.href = "./telegram.html";
      localStorage.setItem("access", JSON.stringify(data[0].name));
      localStorage.setItem("name", JSON.stringify(data[0].name));
      localStorage.setItem("userid", JSON.stringify(data[0].userid));
    } else if (
      form.password.value == data[1].password &&
      form.Username.value == data[1].name
    ) {
      window.location.href = "./telegram.html";
      localStorage.setItem("access", JSON.stringify(data[1].name));
      localStorage.setItem("name", JSON.stringify(data[1].name));
      localStorage.setItem("userid", JSON.stringify(data[1].userid));
    } else {
      wrong.style.display = "block";
      setTimeout(() => {
        wrong.style.display = "none";
        form.password.value = "";
        form.Username.value = "";
      }, 1000);
    }
  }
  checking();
});
