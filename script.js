const form = document.getElementById("myForm");
const entrada = document.getElementById("entrada");

form.addEventListener("submit", function(event) {
    const valorEntrada = entrada.value.trim();
    if (!isValidEmail(valorEntrada) && !isValidNumber(valorEntrada)) {
        alert("Dados incorretos!");
        event.preventDefault();        
    }
});

function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);    
}

function isValidNumber(value) {
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
}