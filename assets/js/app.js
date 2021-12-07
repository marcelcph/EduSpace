console.log("JS works")

function openNav() {
  document.getElementById("mobile-nav-overlay").style.height = "100%";
  document.querySelector(".mobiletest").style.overflow = "hidden";
  document.getElementById("notification").style.display = "none";
}

function closeNav() {
  document.getElementById("mobile-nav-overlay").style.height = "0%";
  document.querySelector(".mobiletest").style.overflow = "initial";
  document.getElementById("notification").style.display = "block";
}

