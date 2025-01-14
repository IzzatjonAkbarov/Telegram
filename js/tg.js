let userid = JSON.parse(localStorage.getItem("userid"));
let name = JSON.parse(localStorage.getItem("name"));
let access = JSON.parse(localStorage.getItem("access"));
let date = new Date();

function datefunc() {
  let hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
  let minute =
    date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
  let full = `${hour}:${minute}`;
  return full;
}
let signout = document.getElementById("signout");
signout.addEventListener("click", () => {
  localStorage.removeItem("access");
  window.location.href = "./index.html";
});
if (!localStorage.getItem("access")) {
  localStorage.removeItem("access");
  window.location.href = "./index.html";
}
let BASE_URL = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/izzatillo";
const getDataFuncForFetch = async () => {
  const request = await fetch(BASE_URL);
  const response = await request.json();

  return response;
};

getDataFuncForFetch().then((data) => {
  data.forEach((data) => {
    getdatauseui(data);
  });
});
const headerchat = document.querySelector(".headerchat");
function getdatauseui(data) {
  if (data.userid == userid) {
    let textofmessage = document.createElement("div");

    textofmessage.innerHTML = `
    <div class="flex flex-col items-end">
      <p
        id="textOfMessaseown"
        class="m-4 textOfMessaseown messageuser2 p-3 rounded-lg relative">
        ${data.message}
        <a href="" class="text-[10px] absolute right-2 bottom-[-0px]">
          ${data.time}
        </a>
      </p>
    </div>`;

    headerchat.append(textofmessage);
  } else {
    let textofmessage = document.createElement("div");
    textofmessage.innerHTML = `<div class="flex items-start flex-col">
              <p
                id="textOfMessase"
                class="m-4 textOfMessase bg-white p-3 rounded-lg relative">
                ${data.message}
                <a href="" class="text-[10px] absolute right-2 bottom-[-0px]"
                  >${data.time}</a
                >
              </p>
            </div>`;
    headerchat.append(textofmessage);
  }
}
const form = document.querySelector("form");
const message = document.querySelector("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      userid: userid,
      message: form.message.value,
      time: datefunc(),
      name: JSON.parse(localStorage.getItem("name")),
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
  form.message.value = "";
  setTimeout(() => {
    window.location.href = "./telegram.html";
  }, 1000);
});
