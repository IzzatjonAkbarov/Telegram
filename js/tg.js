let signout = document.getElementById("signout");
signout.addEventListener("click", () => {
  window.location.href = "./index.html";
  localStorage.removeItem("user");
});
if (!localStorage.getItem("user")) {
  window.location.href = "./index.html";
}
