let BASE_URL1 = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";
const form = document.querySelector("#form");
const password = document.querySelector("#password");
const Username = document.querySelector("#email");
const Phonenumber = document.querySelector("#Phonenumber");

const getDataFuncForFetch = async () => {
  const request = await fetch(BASE_URL1);
  const response = await request.json();

  return response;
};

getDataFuncForFetch().then((data) => {
  let userid = data.length + 1;
  postUser(data, userid);
});
const wrong = document.querySelector("#wrong");
function postUser(params, userid) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentUser = params.filter(
      (value) =>
        form.password.value == value.password &&
        form.Username.value == value.name
    );
    if (currentUser == 0) {
      fetch(BASE_URL1, {
        method: "POST",
        body: JSON.stringify({
          name: form.Username.value,
          password: form.password.value,
          phonenumber: form.Phonenumber.value,
          userid: userid,
          img: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
        }),
        headers: { "Content-type": "application/json" },
      }).then(
        setTimeout(() => (window.location.href = "./telegram.html"), 2000)
      );
    } else {
      wrong.style.display = "block";
      wrong.style.color = "red";
      form.Username.value = "";
      form.password.value = "";
    }
  });
}
export { BASE_URL1 };
