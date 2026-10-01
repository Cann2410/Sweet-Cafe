/* =========================
   DARK MODE
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkModeBtn.textContent = "☀️ Light Mode";

    } else {

        darkModeBtn.textContent = "🌙 Dark Mode";

    }

});


/* =========================
   MENU FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.getAttribute("data-filter");


        /* Change active button */

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");


        /* Filter menu cards */

        menuCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   BACK TO TOP
========================= */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been sent.";

    contactForm.reset();

});
