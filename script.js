/* LOADER */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }
});

/* MOBILE MENU */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

/* DARK MODE */

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark")
                ? "dark"
                : "light"
        );

    });
}

/* BACK TO TOP */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* SCROLL REVEAL */

const reveals = document.querySelectorAll("section, .card");

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
            item.classList.add("reveal");
        }

    });

});

/* STICKY NAVBAR */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.8)";
    } else {
        header.style.background = "rgba(255,255,255,.15)";
    }

});

/* ORDER MODAL */

const modal = document.getElementById("orderModal");
const orderBtn = document.getElementById("orderBtn");
const closeBtn = document.querySelector(".close");

if (modal && orderBtn && closeBtn) {

    orderBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

}

/* CONTACT FORM */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();

        if (!name || !email) {
            alert("Please fill all fields");
            return;
        }

        alert("Message Sent!");
        form.reset();

    });

}

/* TYPING EFFECT */

const typingElement = document.getElementById("typingText");

if (typingElement) {

    const text = "Fresh Coffee Every Morning";
    let i = 0;

    function type() {

        if (i < text.length) {

            typingElement.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 80);
        }

    }

    type();
}