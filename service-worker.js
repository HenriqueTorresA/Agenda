self.addEventListener('install', event => {
    console.log('Service Worker: Instalado');
    // Aqui você pode adicionar arquivos ao cache
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Ativado');
    // Aqui você pode realizar tarefas de limpeza do cache antigo
});

self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetch', event.request.url);
    // Aqui você pode interceptar as requisições e servir arquivos do cache
});