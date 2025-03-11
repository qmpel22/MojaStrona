// Funkcja do przełączania widoczności informacji
function toggleInfo(id, title, content) {
    const infoElement = document.getElementById(id);
    if (infoElement.innerHTML.trim() === "") {
        infoElement.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
    } else {
        infoElement.innerHTML = ""; // Ukrywanie informacji, jeśli już są widoczne
    }
}

// Obsługa kliknięcia na obrazki i dynamiczne dodawanie informacji
function initializeClickHandlers() {
    const logoZse = document.getElementById("logoZse");
    const logoMljar = document.getElementById("logoMljar");
    const atwiLogo = document.getElementById("AtwiLogo");
    const ukz7Logo = document.getElementById("ukz7Logo");

    if (logoZse) {
        logoZse.addEventListener("click", () => {
            toggleInfo("ZseInfo", "Zespół Szkół Elektrycznych", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta purus quis gravida lobortis.");
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


// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        // Reset width to 0
        bar.style.width = '0%';
        
        // Get the target width from data-width attribute
        const targetWidth = bar.getAttribute('data-width');
        
        // Trigger reflow
        void bar.offsetWidth;
        
        // Set the target width
        bar.style.width = targetWidth;
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
    if (isInViewport(skillsSection)) {
        animateProgressBars();
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check if skills section is in viewport
handleScroll();

// Główna funkcja inicjalizująca
document.addEventListener("DOMContentLoaded", () => {
    initializeClickHandlers();
});
