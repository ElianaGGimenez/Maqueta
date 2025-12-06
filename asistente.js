const btnAsistente = document.getElementById("assistantImage");
const cajaChat = document.getElementById("chatAsistente");
const btnCerrar = document.getElementById("chatCerrar");
const chatBody = document.getElementById("chatBody");
const preguntas = document.querySelectorAll(".pregunta");

btnAsistente.addEventListener("click", () => {
  cajaChat.style.display = "flex";
});

btnCerrar.addEventListener("click", () => {
  cajaChat.style.display = "none";
});

preguntas.forEach(boton => {
  boton.addEventListener("click", () => {

    const texto = boton.dataset.answer;

    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-bot");
    mensaje.textContent = texto;

    chatBody.appendChild(mensaje);
  });
});
