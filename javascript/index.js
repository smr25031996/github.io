window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("fixed-navbar");
    } else {
      navbar.classList.remove("fixed-navbar");
    }
  };