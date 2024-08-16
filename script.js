if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
    });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const contacList = document.getElementById('contact-list');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${name} - ${phone}</span><button onclick="removeContact(this)">Remover</button>`;

        contacList.appendChild(listItem);

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});

function removeContact(button) {
    const listItem = button.parentElement;
    listItem.remove();
}