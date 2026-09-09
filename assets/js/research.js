document.addEventListener("DOMContentLoaded", () => {
  /*
   * Subtle research-style motion
   * No external libraries required.
   */

  // -----------------------------
  // 1. Scroll reveal
  // -----------------------------
  const revealItems = document.querySelectorAll(".research-reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));


  // -----------------------------
  // 2. Research node interaction
  // -----------------------------
  const researchNodes = document.querySelectorAll(".research-node");

  researchNodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      node.classList.add("is-active");
    });

    node.addEventListener("mouseleave", () => {
      node.classList.remove("is-active");
    });
  });


  // -----------------------------
  // 3. Number count-up
  // -----------------------------
  const counters = document.querySelectorAll("[data-count]");

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = parseInt(element.dataset.count, 10);

        let current = 0;
        const duration = 900;
        const start = performance.now();

        function update(now) {
          const progress = Math.min(
            (now - start) / duration,
            1
          );

          // easeOutCubic
          const eased =
            1 - Math.pow(1 - progress, 3);

          current = Math.round(target * eased);
          element.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            element.textContent = target;
          }
        }

        requestAnimationFrame(update);

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.6
    }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });


  // -----------------------------
  // 4. Pointer-following glow
  // -----------------------------
  const interactiveArea =
    document.querySelector(".research-visual");

  if (interactiveArea) {
    interactiveArea.addEventListener("mousemove", (event) => {
      const rect =
        interactiveArea.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) *
        100;

      const y =
        ((event.clientY - rect.top) / rect.height) *
        100;

      interactiveArea.style.setProperty(
        "--mouse-x",
        `${x}%`
      );

      interactiveArea.style.setProperty(
        "--mouse-y",
        `${y}%`
      );
    });
  }
});
