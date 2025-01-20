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
        const { name, userid, phonenumber, contacts } = currentUser[0];
        localStorage.setItem("access", JSON.stringify(name));
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("userid", JSON.stringify(userid));
        localStorage.setItem("phonenumber", JSON.stringify(phonenumber));
        localStorage.setItem("contacts", JSON.stringify(contacts));
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
document.querySelector("#eye").addEventListener("click", () => {
  let pass = document.querySelector("#password");

  pass.type = "text";
  document.querySelector("#eye").addEventListener("click", () => {
    let pass = document.querySelector("#password");

    pass.type = "password";
  });
});
