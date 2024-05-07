// For Live Projects
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerCheckbox = document.querySelector(
    '.hamburger input[type="checkbox"]'
  );
  const navLinks = document.querySelectorAll("nav ul a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector("nav").offsetHeight,
          behavior: "smooth",
        });
      }

      hamburgerCheckbox.checked = false;
    });
  });
});
