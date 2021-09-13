window.addEventListener("scroll", (e) => {
  var item = document.getElementById("header");
  if (window.scrollY > window.innerHeight) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});
