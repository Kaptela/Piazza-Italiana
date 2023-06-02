const siteFolder = "";

(function () {
  document.addEventListener("DOMContentLoaded", initApp);

  function initApp() {
    const openMenuBut = document.querySelector(".menu-link");
    openMenuBut.addEventListener("click", openMenu);

    initPreloader();
    initScroll();
    initPopup();
  }
  function openMenu() {
    document.querySelector(".site-menu").fadeIn();

    const closeMenuBut = document.querySelector(".site-menu-close");
    closeMenuBut.addEventListener("click", closeMenu);

    document.body.style.position = 'fixed';
  }

  function closeMenu() {
    document.querySelector(".site-menu").fadeOut();

    document.body.style.position = 'initial';
  }

  function initPreloader() {
    let tigidPreloader = new TigidPreloader({
      barType: "horizontal",
      xPosition: "left",
      yPosition: "bottom",
      afterLoadingCallback: doAfterPreload
    });
  }


  function initScroll() {

    document.addEventListener("scroll", checkScroll);
  }

  function checkScroll() {
    const header = document.querySelector(".header");
    let lastKnownScrollPosition = pageYOffset;

    if (lastKnownScrollPosition > 160) {
      changeHeaderPosition(true, header);
    } else {
      changeHeaderPosition(false, header);
    }
  }

  function changeHeaderPosition(isShowed, header) {
    if (isShowed) {
      header.classList.remove("header-full");

    } else {
      if (!header.classList.contains("header-full")) {
        header.classList.add("header-full");
      }
    }
  }
  function initLazy() {
    window.addEventListener("scroll", lazyLoadAppear);
  }

  function lazyLoadAppear() {
    const elements = document.querySelectorAll(".lazy-load");
    const delay = 150;
    elements.forEach(function (item) {
      if (item.getBoundingClientRect().y + delay < window.innerHeight) {
        item.classList.add("lazy-load_done");
      }
    });
  }

  function doAfterPreload() {
    if (document.querySelector('.image-gallery')) initHomeSlider();
    lazyLoadAppear();
    initLazy();
  }

})();
HTMLElement.prototype.fadeOut = function (speed, callback) {
  const element = this;
  var opacity = 1;

  var timer = setInterval(function () {

    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
      if (callback) callback();
    }

    element.style.opacity = opacity;
    opacity -= opacity * 0.1;

  }, 10);
}

HTMLElement.prototype.fadeIn = function (speed, callback, display) {
  const element = this;
  var opacity = 0.02;

  element.style.opacity = opacity;
  if (display) { element.style.display = display; }
  else { element.style.display = "block"; }

  var timer = setInterval(function () {

    if (opacity >= 1) {
      clearInterval(timer);
      if (callback) callback();
    }

    element.style.opacity = opacity;
    opacity += opacity * 0.1;

  }, 10);
}