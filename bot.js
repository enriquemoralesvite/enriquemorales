// bot.js
document.addEventListener('DOMContentLoaded', function () {
    // Crear el botón del bot
    const botButton = document.createElement('div');
    botButton.id = 'bot-button';
    botButton.innerHTML = '<img src="./assets/bot.png" alt="Chatbot Icon">';
    document.body.appendChild(botButton);

    // Crear el iframe del bot
    const botIframe = document.createElement('iframe');
    botIframe.id = 'bot-iframe';
    botIframe.src = "https://bot.dialogflow.com/d529186b-6a62-4397-9296-3d19ca57edf5";
    botIframe.style.display = 'none'; // Ocultar el iframe inicialmente
    botIframe.style.position = 'fixed';
    botIframe.style.bottom = '90px';
    botIframe.style.right = '20px';
    botIframe.style.width = '350px';
    botIframe.style.height = '500px';
    botIframe.style.border = 'none';
    botIframe.style.borderRadius = '10px';
    botIframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    botIframe.style.backgroundColor = '#F6F6F6'; // Color de fondo
    botIframe.style.zIndex = '999';
    document.body.appendChild(botIframe);

    // Mostrar/ocultar el iframe al hacer clic en el botón
    botButton.addEventListener('click', function () {
        if (botIframe.style.display === 'none') {
            botIframe.style.display = 'block';
        } else {
            botIframe.style.display = 'none';
        }
    });
});