// Simulação de banco de dados externo (Substitua pelos links das suas fotos reais)
const fotosExternas = [
    { url: "https://images.unsplash.com/photo-1544427928-c49cdcd88944", legenda: "Culto de Domingo" },
    { url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2", legenda: "Grupo de Louvor" },
    { url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3", legenda: "Mídia em Ação" },
    { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df", legenda: "Reunião de Jovens" },
    { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", legenda: "Evento Externo" },
];

function carregarGaleria() {
    const galeria = document.getElementById('photoGallery');
    
    fotosExternas.forEach(foto => {
        const item = document.createElement('div');
        item.className = 'pin-item';
        
        item.innerHTML = `
            <img src="${foto.url}" alt="Foto Igreja">
            <div class="pin-caption">${foto.legenda}</div>
        `;
        
        galeria.appendChild(item);
    });
}

// Menu Mobile
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Inicia a galeria
window.onload = carregarGaleria;
