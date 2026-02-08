
async function loadComponent(id, file) {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;

    // После загрузки футера обновляем год
    if (id === "footer") {
        updateCurrentYear();
    }
}

function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}