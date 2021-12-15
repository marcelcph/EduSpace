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

function notificationPop() {
  document.getElementById("notification_total").style.display = "none";
  var e = document.getElementById("notification_overlay");
        if ( e.style.display == 'block' )
            e.style.display = 'none';
        else
            e.style.display = 'block';
}

const elementYouWantToShow = document.querySelector(".submenu-group");
const chevronClicked = document.querySelector(".chevron");
function toggleAccordion(a) {
  console.log(a);
  elementYouWantToShow.classList.toggle("hide");
  chevronClicked.classList.toggle("chevron-active");
}


