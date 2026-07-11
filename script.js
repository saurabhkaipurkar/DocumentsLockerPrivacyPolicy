/* Smart Doc Organizer — Privacy site interactions */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  // Active TOC highlighting
  const sections = [...document.querySelectorAll("section.policy-section[id]")];
  const tocLinks = [...document.querySelectorAll(".toc a")];

  const setActive = (id) => {
    tocLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === `#${id}`);
    });
  };

  if (sections.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // Back to top
  const backTop = document.getElementById("backTop");
  if (backTop) {
    const onScroll = () => {
      if (window.scrollY > 500) backTop.classList.add("visible");
      else backTop.classList.remove("visible");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    onScroll();
  }
})();
