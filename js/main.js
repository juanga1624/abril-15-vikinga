// /js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar las palabras (simulando una llamada a la función Netlify)
    fetch('/.netlify/functions/get-homenajes')
        .then(response => response.json())
        .then(words => {
            renderWordCloud(words);
        })
        .catch(error => console.error('Error al cargar homenajes:', error));
});


// Función para renderizar la Nube de Etiquetas (Word Cloud)
function renderWordCloud(words) {
    const container = document.getElementById('runa-mapa');

    // **Instalación de Librería Requerida:** Para que esto funcione, 
    // debes incluir una librería como 'jqcloud' o 'wordcloud2.js' en tu index.html.

    // A falta de una librería, renderizaremos las palabras con estilo.
    words.forEach(item => {
        const wordElement = document.createElement('span');
        // El tamaño de la fuente se basa en la frecuencia (count)
        const size = 12 + item.count; 
        
        wordElement.textContent = item.word + ' ';
        wordElement.style.fontSize = `${size}px`;
        wordElement.style.margin = '5px';
        wordElement.style.display = 'inline-block';
        wordElement.style.color = size > 25 ? 'var(--color-fuego)' : 'white';
        
        container.appendChild(wordElement);
    });
}