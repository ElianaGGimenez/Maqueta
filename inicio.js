const contDest = document.getElementById("destacados");

const destacados = productos.slice(0, 3);

function renderDestacados() {
  contDest.innerHTML = "";
  destacados.forEach(p => {
    contDest.innerHTML += `
      <div class="card">
        <img src="${p.img}" />
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
      </div>`;
  });
}

renderDestacados();
