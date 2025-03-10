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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logoZse").addEventListener("click", () => {
        toggleInfo("ZseInfo", "Zespół Szkół Elektrycznych", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta purus quis gravida lobortis.");
    });
    
    document.getElementById("logoMljar").addEventListener("click", () => {
        toggleInfo("MljarInfo", "Inna Szkoła", "Opis dotyczący innej szkoły.");
    });
    
    document.getElementById("AtwiLogo").addEventListener("click", () => {
        toggleInfo("AtwiInfo", "Atwi", "Opis dotyczący doświadczenia w Atwi.");
    });
    
    document.getElementById("ukz7Logo").addEventListener("click", () => {
        toggleInfo("Ukz7Info", "UKZ7", "Opis dotyczący doświadczenia w UKZ7.");
    });
});