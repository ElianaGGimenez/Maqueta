// Datos de stock inicial
const stock = [2, 4, 5];

// COMPRA
document.querySelectorAll('.comprar').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const idx = Number(e.currentTarget.getAttribute('data-index'));
    if (stock[idx] > 0) {
      stock[idx]--;
      e.currentTarget.textContent = `Comprar (${stock[idx]})`;

      if (stock[idx] === 0) {
        const card = document.querySelector(`.card[data-index="${idx}"]`);
        card.classList.add('sin-stock');
        card.querySelectorAll('button').forEach(x => x.disabled = true);
      }
    }
  });
});

// ASISTENTE abrir/cerrar
const assistantImage = document.getElementById('assistantImage');
const chat = document.getElementById('chatAsistente');
const chatCerrar = document.getElementById('chatCerrar');
const chatBody = document.getElementById('chatBody');

assistantImage.addEventListener('click', () => {
  chat.style.display = 'flex';
  chat.setAttribute('aria-hidden', 'false');
});

chatCerrar.addEventListener('click', () => {
  chat.style.display = 'none';
  chat.setAttribute('aria-hidden', 'true');
});

// Preguntas frecuentes
document.querySelectorAll('.pregunta').forEach(btn => {
  btn.addEventListener('click', () => {
    
    const userMsg = document.createElement('div');
    userMsg.className = 'mensaje-user';
    userMsg.textContent = btn.textContent;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'mensaje-bot';
    botMsg.textContent = btn.getAttribute('data-answer');
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  });
});
