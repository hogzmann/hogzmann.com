/* ==========================================
   HOGZMANN WEBSITE
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------
       Hide Loader
    ---------------------------- */

    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 800);
        });
    }

    /* ---------------------------
       Sticky Header
    ---------------------------- */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    /* ---------------------------
       Scroll To Top Button
    ---------------------------- */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ---------------------------
       Reveal Sections
    ---------------------------- */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("fade-section");

        observer.observe(section);

    });

    /* ---------------------------
       Smooth Navigation
    ---------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ---------------------------
       Active Navigation
    ---------------------------- */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ---------------------------
       Counter Animation
    ---------------------------- */

    const counters = document.querySelectorAll(".hero-stats h3");

    counters.forEach(counter => {

        const text = counter.innerText;

        if (!isNaN(parseInt(text))) {

            const target = parseInt(text);

            let value = 0;

            const interval = setInterval(() => {

                value++;

                counter.innerText = value;

                if (value >= target) {

                    clearInterval(interval);

                }

            }, 30);

        }

    });

    /* ---------------------------
       Feature Card Hover Glow
    ---------------------------- */

    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(109,170,44,0.12),
                #ffffff 60%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#fff";

        });

    });

    /* ---------------------------
       Gallery Zoom
    ---------------------------- */

    document.querySelectorAll(".gallery-item img").forEach(img => {

        img.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,.9)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "99999";

            const image = document.createElement("img");

            image.src = img.src;
            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";
            image.style.borderRadius = "20px";

            overlay.appendChild(image);

            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {

                overlay.remove();

            });

        });

    });

});
