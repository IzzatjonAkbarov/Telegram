let BASE_URL = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";
const getDataFuncForFetch = async () => {
  const request = await fetch(BASE_URL);
  const response = await request.json();

  return response;
};

getDataFuncForFetch().then((data) => {
  data.forEach((data) => {
    console.log(data);
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    function checking(params) {
      const currentUser = params.filter(
        (value) =>
          form.password.value == value.password &&
          form.Username.value == value.name
      );

      console.log(currentUser);

      if (currentUser.length !== 0) {
        const { name, userid } = currentUser[0];
        localStorage.setItem("access", JSON.stringify(name));
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("userid", JSON.stringify(userid));
        window.location.href = "./telegram.html";
      } else {
        wrong.style.display = "block";
        setTimeout(() => {
          wrong.style.display = "none";
          form.password.value = "";
          form.Username.value = "";
        }, 1000);
      }
    }
    checking(data);
  });
});

let wrong = document.getElementById("wrong");
const form = document.querySelector("#form");
const password = document.querySelector("#password").value;
const Username = document.querySelector("#email");
