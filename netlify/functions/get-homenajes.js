// /netlify/functions/get-homenajes.js

// Este archivo es una Netlify Function que lee los envíos de los formularios.

const { NetlifyAPI } = require('netlify');

exports.handler = async (event, context) => {
    // 1. Inicializa el cliente API de Netlify. Necesitas tu token de acceso personal.
    // Esto es avanzado, la forma más sencilla es usar la API interna de Netlify,
    // pero requiere la configuración de un token personal.

    // **Simplificación:** Para evitar la complejidad de tokens personales,
    // asumiremos que harás la exportación de los mensajes y los pondrás
    // manualmente en un archivo JSON para este paso.

    // Vamos a simular los datos para poder trabajar con la Nube de Etiquetas.
    // **Nota:** Usar Netlify Functions para leer Netlify Forms es más complejo
    // que usar FaunaDB para los datos, por lo que simplificamos la lectura.

    const sampleData = [
        { word: "Valiente", count: 15 },
        { word: "Épica", count: 12 },
        { word: "Leal", count: 18 },
        { word: "Dragona", count: 8 },
        { word: "Brillante", count: 10 },
        // ... (Aquí irán las palabras que recopiles de la pestaña Forms de Netlify)
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(sampleData),
    };
};