function burger() {
  var burger = document.getElementById("burger");
  var list = document.getElementById("burger-menu");
  if (burger.classList.contains("open")) {
    burger.classList.remove("open");
    list.classList.remove("open");
    return;
  } else {
    burger.classList.add("open");
    list.classList.add("open");
    return;
  }
}