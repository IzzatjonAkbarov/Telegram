let BASE_URL1 = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";
const form = document.querySelector("#form");
const password = document.querySelector("#password");
const Username = document.querySelector("#email");
const phonenumber = document.querySelector("#phonenumber");
const img = document.querySelector("#img");

const defaultimg =
  "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg";
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

    let file = form.img.files[0];
    var reader = new FileReader();

    reader.onload = (e) => {
      const imgurl = e.target.result;
      console.log(imgurl);
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
            userid: userid,
            phonenumber: form.phonenumber.value,
            img:
              imgurl ||
              "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
            contacts: [],
          }),
          headers: { "Content-type": "application/json" },
        })
          .then((data) => data.json())
          .then((data) => {
            window.location.href = "./index.html";
            localStorage.setItem("userinfo", JSON.stringify(data));
          });
      } else {
        wrong.style.display = "block";
        wrong.style.color = "red";
        form.Username.value = "";
        form.password.value = "";
        form.phonenumber.value = "";
      }
    };

    reader.readAsDataURL(file);
  });
}
export { BASE_URL1 };
document.querySelector("#eye").addEventListener("click", () => {
  let pass = document.querySelector("#password");

  pass.type = "text";
  document.querySelector("#eye").addEventListener("click", () => {
    let pass = document.querySelector("#password");

    pass.type = "password";
  });
});
