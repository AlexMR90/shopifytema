/*botão topo*/
document.addEventListener("DOMContentLoaded", () => {
    const btntopoButton = document.getElementById("btntopo");
    const targetSections = document.querySelectorAll("#Atendimento,#Mapa, .SN, .Politicas");

    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        let isVisible = false;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible = true;
            }
        });


        // Exibe ou oculta o botão com base na visibilidade das seções
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            btntopoButton.style.display = "flex";
        } else {
        btntopoButton.style.display = isVisible ? "flex" : "none";
    }}, { threshold: 0.7 }); // Detecta 10% da seção visível

    // Observa cada seção
    targetSections.forEach(section => {
        observer.observe(section);
    });
});

/*Fim botão topo */