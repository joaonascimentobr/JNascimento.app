self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Adicione arquivos ao cache aqui, se necessário
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Adicione lógica de cache aqui, se necessário
});