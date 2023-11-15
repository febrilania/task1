function openHamburger() {
  const hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );
  if (
    hamburgerNavContainer.style.display === "none" ||
    hamburgerNavContainer.style.display === ""
  ) {
    hamburgerNavContainer.style.display = "flex";
  } else {
    hamburgerNavContainer.style.display = "none";
  }
}
