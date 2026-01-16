let menu_btn = document.querySelector(".menu_btn");
let nav_links = document.querySelector(".mobile_nav");

menu_btn.addEventListener("click", () => {
  const isOpen = nav_links.classList.contains("open");
  if (isOpen) {
    nav_links.classList.remove("open");
    menu_btn.setAttribute("aria-expanded", "false");
    return;
  } else {
    nav_links.classList.add("open");
    menu_btn.setAttribute("aria-expanded", "true");
    return;
  }
});

function checkWidthAndHide() {
  if (window.innerWidth > 1150) {
    if (nav_links.classList.contains("open")) {
      nav_links.classList.remove("open");
      menu_btn.setAttribute("aria-expanded", "false");
    }
  }
}

window.addEventListener("resize", checkWidthAndHide);