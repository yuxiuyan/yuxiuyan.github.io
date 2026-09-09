document.addEventListener("DOMContentLoaded", () => {

  /*
   * -----------------------------------------
   * Scroll reveal
   * -----------------------------------------
   */

  const revealItems =
    document.querySelectorAll(".research-reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12
        }
      );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

  }


  /*
   * -----------------------------------------
   * Count-up numbers
   * -----------------------------------------
   */

  const counters =
    document.querySelectorAll(
      "[data-count]"
    );

  if ("IntersectionObserver" in window) {

    const counterObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            const element =
              entry.target;

            const target =
              parseInt(
                element.dataset.count,
                10
              );

            const duration = 900;

            const start =
              performance.now();

            function animate(now) {

              const progress =
                Math.min(
                  (now - start) /
                  duration,
                  1
                );

              const eased =
                1 -
                Math.pow(
                  1 - progress,
                  3
                );

              element.textContent =
                Math.round(
                  target * eased
                );

              if (progress < 1) {
                requestAnimationFrame(
                  animate
                );
              }

            }

            requestAnimationFrame(
              animate
            );

            observer.unobserve(
              element
            );

          });

        },
        {
          threshold: 0.6
        }
      );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });

  }

});
