"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");
const body = document.body;

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("nav-active");
};
addEventOnElements(navTogglers, "click", toggleNavbar);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("nav-active");
  });
});


/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/**
 * DARK MODE TOGGLE
 */

const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/**
 * TABS FUNCTIONALITY
 */

const initTabs = (
  tabsContainerSelector,
  tabButtonSelector,
  tabPaneSelector
) => {
  const tabsContainer = document.querySelector(tabsContainerSelector);
  if (!tabsContainer) return;

  const tabButtons = tabsContainer.querySelectorAll(tabButtonSelector);
  const tabPanes = tabsContainer.querySelectorAll(tabPaneSelector);

  const switchTab = (tabIndex) => {
    tabButtons.forEach((t) => t.classList.remove("active"));
    tabPanes.forEach((p) => p.classList.remove("active"));

    const activeTab = tabButtons[tabIndex];
    const activePaneId = activeTab.dataset.tab;
    const activePane = tabsContainer.querySelector(`#${activePaneId}`);

    activeTab.classList.add("active");
    if (activePane) {
      activePane.classList.add("active");
    }
  };

  switchTab(0);

  tabButtons.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        switchTab(index);
    });
  });

};

initTabs(".experience-tabs-container", ".tab-button", ".tab-pane");
initTabs(".achievements-tabs-container", ".tab-button", ".tab-pane");

/**
 * BACK TO TOP BUTTON
 */

const backToTopBtn = document.querySelector("[data-back-to-top]");

// Ensure the button exists before adding event listener
if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });
}

