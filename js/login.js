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
  function checking(params) {
    params.forEach((value) => {
      if (
        form.password.value == value.password &&
        form.Username.value == value.name
      ) {
        localStorage.setItem("access", JSON.stringify(value.name));
        localStorage.setItem("name", JSON.stringify(value.name));
        localStorage.setItem("userid", JSON.stringify(value.userid));
        window.location.href = "./telegram.html";
      } else {
        wrong.style.display = "block";
        setTimeout(() => {
          wrong.style.display = "none";
          form.password.value = "";
          form.Username.value = "";
        }, 1000);
      }
    });
  }
  checking(data);
});
