const hamMenu = document.getElementById("ham-menu");

const offScreenMenu = document.getElementById("off-screen-menu");

console.log("asfasfd")


hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
