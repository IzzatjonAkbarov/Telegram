let userid = JSON.parse(localStorage.getItem("userid"));
let name = JSON.parse(localStorage.getItem("name"));
let access = JSON.parse(localStorage.getItem("access"));
let date = new Date();
let users = document.querySelectorAll(".user");
let senderid = JSON.parse(localStorage.getItem("userid")) || 0;
let recieverid = JSON.parse(localStorage.getItem("reciever")) || 0;
let messageuser = document.querySelector(".messageuser");
let nameofreciever = document.querySelector(".name");
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
  localStorage.removeItem("name");
  localStorage.removeItem("userid");
  localStorage.removeItem("phone");
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
  if (data.senderid == senderid && data.recieverid == recieverid) {
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
  } else if (data.senderid == recieverid && data.recieverid == senderid) {
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
      recieverid: JSON.parse(localStorage.getItem("reciever")),
      senderid: JSON.parse(localStorage.getItem("userid")),
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => data);
  form.message.value = "";
  setTimeout(() => {
    window.location.href = "./telegram.html";
  }, 2000);
});
let BASE_URL1 = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";

const getDataForsidebar = async () => {
  const request = await fetch(BASE_URL1);
  const response = await request.json();

  return response;
};
let people = document.querySelector(".people");
getDataForsidebar().then((data) => {
  data.forEach((element) => {
    getdataforaside(element);
  });
});
function getdataforaside(params) {
  if (params.name !== name) {
    let div = document.createElement("div");
    div.setAttribute("id", `${params.id}`);
    div.innerHTML = `
 <div id="${
   params.userid
 }" smth class="flex user items-center gap-2 pl-3 py-3 h-[80px] w-[100%]">
              <img
                class="h-[50px]"
                src= ${params.img}
                alt="" />
              <div
                class="w-[100%] border-b h-[100%] flex flex-col justify-between">
                <div class="flex items-center justify-between pr-2">
                  <h1 class="flex font-bold items-center gap-2">
                   ${params.name}<img src="./src/assets/svg/mute.svg" alt="" />
                  </h1>
                  <p class="text-[14px] font-semibold text-[#000000c8]">
                    ${datefunc()}
                  </p>
                </div>
                <p class="pb-1 text-[14px] font-medium">
                  Yes, they are necessary
                </p>
              </div>
            </div>`;
    people.append(div);
  }
}

form.message.addEventListener("input", (event) => {
  let online = document.querySelector(".online");

  online.textContent = "typing";
});
form.message.addEventListener("blur", (event) => {
  let online = document.querySelector(".online");

  online.textContent = "online";
});
let all = document.querySelector(".all");
people.addEventListener("click", (event) => {
  let target = event.target;

  // fetch(`${BASE_URL1}/${target}`)
  //   .then((data) => data.json())
  //   .then((data) => console.log(data));
  // if (target == recieverid) {
  //   let name = document.querySelector(".name");
  //   name.innerHTML
  // }
  while (target && !target.classList.contains("user")) {
    target = target.parentElement;
  }
  if (target) {
    all.style.display = "flex";
    senderid = userid;
    recieverid = +target.id;
    localStorage.setItem("reciever", JSON.stringify(recieverid));
    fetch(`${BASE_URL1}/${recieverid}`)
      .then((data) => data.json())
      .then((data) => name(data));
    function name(data) {
      nameofreciever.textContent = data.name;
      console.log(nameofreciever);
    }
  }
});
document.querySelector(".menuname").textContent = JSON.parse(
  localStorage.getItem("name")
);
document.querySelector(".phonebar").textContent = JSON.parse(
  localStorage.getItem("phone")
);
