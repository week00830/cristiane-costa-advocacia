/**
 * Cristiane Costa — site institucional
 * JavaScript puro, sem dependências externas.
 *
 * Responsabilidades:
 *  1. Menu mobile (abrir/fechar, fechar ao clicar em link ou tecla Esc)
 *  2. Header que ganha fundo sólido após rolagem (contraste sobre o hero)
 *  3. Animações de entrada direcionais (cima / esquerda / direita),
 *     conforme o atributo data-reveal de cada elemento
 *  4. Ano atual no rodapé
 */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- */
  /* 1. MENU MOBILE                                                    */
  /* ---------------------------------------------------------------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMenu() {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }

  function openMenu() {
    mobileNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      if (mobileNav.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  /* ---------------------------------------------------------------- */
  /* 2. HEADER COM FUNDO SÓLIDO APÓS ROLAGEM                            */
  /* ---------------------------------------------------------------- */
  var header = document.querySelector(".site-header");

  function updateHeaderState() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  if (header) {
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  /* ---------------------------------------------------------------- */
  /* 3. REVEAL ON SCROLL (direcional)                                   */
  /* ---------------------------------------------------------------- */
  var revealElements = document.querySelectorAll(".reveal");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------- */
  /* 4. ANO NO RODAPÉ                                                   */
  /* ---------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
