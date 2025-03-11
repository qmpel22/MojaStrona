function toggleInfo(id, title, content) {
    const infoElement = document.getElementById(id);
    const parentElement = infoElement.parentElement;

    if (infoElement.innerHTML.trim() === "") {
        infoElement.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        parentElement.classList.add("expanded");
    } else {
        infoElement.innerHTML = "";
        parentElement.classList.remove("expanded");
    }
}

// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        if (!bar.style.width) {
            bar.style.transition = "width 1s ease-in-out";
            bar.style.width = targetWidth;
        }
    });
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection && isInViewport(skillsSection)) {
        animateProgressBars();
    }
}

// Main initialization function
document.addEventListener("DOMContentLoaded", () => {
    // Initialize progress bars
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        bar.style.width = "0";
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check for elements in viewport
    handleScroll();
});

// Obsługa kliknięcia na obrazki i dynamiczne dodawanie informacji
function initializeClickHandlers() {
    const logoZse = document.getElementById("logoZse");
    const logoMljar = document.getElementById("logoMljar");
    const atwiLogo = document.getElementById("AtwiLogo");
    const ukz7Logo = document.getElementById("ukz7Logo");

    if (logoZse) {
        logoZse.addEventListener("click", () => {
            toggleInfo("ZseInfo", "Zespół Szkół Elektrycznych", "Od 2021 uczę się w Zespole Szkół Elektrycznych na profilu technik programista. W tym czasie zdążyłem nauczyć się podstaw programowania w językach C#, C++, Python, Java Script, PHP i SQL. W 2024 roku zdałem egzamin zawodowy INF03 z wynikiem 96%");
        });
    }

    if (logoMljar) {
        logoMljar.addEventListener("click", () => {
            toggleInfo("MljarInfo", "Inna Szkoła", "Opis dotyczący innej szkoły.");
        });
    }

    if (atwiLogo) {
        atwiLogo.addEventListener("click", () => {
            toggleInfo("AtwiInfo", "Atwi", "Opis dotyczący doświadczenia w Atwi.");
        });
    }

    if (ukz7Logo) {
        ukz7Logo.addEventListener("click", () => {
            toggleInfo("Ukz7Info", "UKZ7", "Opis dotyczący doświadczenia w UKZ7.");
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Pobierz wszystkie paski postępu
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let targetWidth = bar.getAttribute("data-width"); // Pobierz wartość z atrybutu
        bar.style.width = targetWidth; // Ustaw docelową szerokość
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-left");
                observer.unobserve(entry.target); // Przestajemy obserwować po animacji
            }
        });
    }, {
        threshold: 0.1 // element musi być w 10% widoczny
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

