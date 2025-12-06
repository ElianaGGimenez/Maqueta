/* =================== SUBMENÚS =================== */
const items = document.querySelectorAll(".menu-item");

function closeAll() {
  items.forEach(i => i.classList.remove("open"));
}

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    closeAll();
    item.classList.add("open");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("open");
  });
});

/* =================== PRODUCTOS =================== */
const productos = [
  { nombre: "Reloj Digital Acero", precio: 120000, img: "https://s.alicdn.com/@sc04/kf/Hb1a264131d984934be8edc76a214a0dcT.jpg_300x300.jpg", cat: "digitales", categoria: "relojes" },
  { nombre: "Reloj Digital Casio", precio: 150000, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSebJYP6nPoO2OwDMh-2P_68QDCqp9mIciXaych-YBjfbAHobFHJFFI6iMVbMfsjZ7cp1QjKx4Hxte4ODWTueVpgOZ_oWaDKii4mqX8vAg", cat: "digitales", categoria: "relojes" },
  { nombre: "Reloj Analógico clásico", precio: 180000, img: "https://img.chrono24.com/images/uhren/43869915-ifpo26qcbwztyxby5iv70eil-ExtraLarge.jpg", cat: "analogicos", categoria: "relojes" },
  { nombre: "Reloj de oro", precio: 350000, img: "https://www.rado.com/media/sgecom_contentsystem/SEO_pages/Gold-watches/gold-watches-rich-hero-mobile.jpg", cat: "oro", categoria: "relojes" },
  { nombre: "Anillo de Oro 18K", precio: 450000, img: "https://http2.mlstatic.com/D_NQ_NP_651873-MLA49433340373_032022-O.webp", cat: "oro", categoria: "anillos" },
  { nombre: "Anillo de Plata", precio: 90000, img: "https://http2.mlstatic.com/D_NQ_NP_2X_616123-MLA75406422587_032024-T.webp", cat: "plata", categoria: "anillos" },
  { nombre: "Anillo con Piedra Azul", precio: 150000, img: "https://elorfebrejoyas.com.ar/wp-content/uploads/2023/05/Anillo-52-scaled.jpg", cat: "piedras", categoria: "anillos" },
  { nombre: "Collar Minimalista", precio: 70000, img: "https://cdnx.jumpseller.com/quimera-jewelry/image/42945639/resize/1000/1000?1731093831", cat: "minimalistas", categoria: "collares" },
  { nombre: "Collar con Dije Luna", precio: 110000, img: "https://i.pinimg.com/originals/fa/7f/36/fa7f364eeffefe9ab1f00506c81d3a40.jpg", cat: "dijes", categoria: "collares" },
  { nombre: "Collar de Lujo Oro Blanco", precio: 250000, img: "https://www.joyerialermitage.com/imagenes/24370-2.jpg", cat: "oro", categoria: "collares" },
  { nombre: "Aros Argolla Dorados", precio: 60000, img: "https://zonaonce.com.ar/wp-content/uploads/2020/10/IMG-20201027-WA0158.jpg", cat: "argollas", categoria: "aros" },
  { nombre: "Aros de Perlas Premium", precio: 95000, img: "https://acdn-us.mitiendanube.com/stores/679/075/products/c911a3b0-ab84-4f5a-8ec9-a7102dc270ed-f50c10595a9e5f3e1d17274715708792-480-0.webp", cat: "perlas", categoria: "aros" },
  { nombre: "Aros de Oro 18K", precio: 180000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Exd4OqolYDVnAOCmwwXfGrye5Lkp3PQxyQ&s", cat: "oro-aros", categoria: "aros" },
  { nombre: "Colección Limitada Ruby", precio: 600000, img: "https://elorfebrejoyas.com.ar/wp-content/uploads/2024/11/IMG_20231201_1205134512-scaled.jpg", cat: "limitadas", categoria: "exclusivos" },
  { nombre: "Colección VIP Diamante", precio: 900000, img: "https://cdn0.bodas.net/article-vendor/36898/original/1280/jpg/-w7a8305_1_36898-160564204275465.jpeg", cat: "vip", categoria: "exclusivos" }
];

const lista = document.getElementById("listaProductos");
const titulo = document.getElementById("tituloCategoria");

/* =================== DETECTAR CATEGORÍA POR URL =================== */
const params = new URLSearchParams(window.location.search);
let categoriaGeneral = params.get("categoria") || null;
titulo.textContent = categoriaGeneral ? categoriaGeneral.toUpperCase() : "Productos disponibles";

/* =================== FUNCIÓN PARA RENDERIZAR =================== */
function mostrarProductos(filtrados) {
  lista.innerHTML = "";

  if (filtrados.length === 0) {
    lista.innerHTML = `<p style="color:#d4af37; font-weight:bold;">No se encontraron productos</p>`;
    return;
  }

  filtrados.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    const botonHTML = `<button class="btn-comprar">Comprar</button>`;

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p class="precio">$${p.precio.toLocaleString()}</p>
      ${botonHTML}
    `;
    lista.appendChild(card);

    const boton = card.querySelector("button");
    if (p.cat.toLowerCase().includes("oro") || p.categoria.toLowerCase().includes("oro")) {
      boton.addEventListener("click", () => {
        const mensaje = encodeURIComponent(`Hola, quiero consultar por el producto: ${p.nombre}`);
        window.open(`https://wa.link/vzchb2?text=${mensaje}`, "_blank");
      });
    } else {
      boton.addEventListener("click", () => {
        console.log(`${p.nombre} agregado al carrito`);
      });
    }
  });
}

/* =================== MOSTRAR PRODUCTOS AL ENTRAR =================== */
mostrarProductos(productos.filter(p => !categoriaGeneral || p.categoria === categoriaGeneral));

/* =================== CLICK EN SUBCATEGORÍAS =================== */
document.querySelectorAll(".subcat").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const subcat = btn.dataset.cat;
    const catPadre = btn.closest(".menu-item").querySelector("a").getAttribute("href")
      .split("categoria=")[1] || null;
    categoriaGeneral = catPadre;

    const filtrados = productos.filter(p => (subcat ? p.cat === subcat : true) && (categoriaGeneral ? p.categoria === categoriaGeneral : true));
    mostrarProductos(filtrados);
    titulo.textContent = `Subcategoría: ${subcat.toUpperCase()}`;
  });
});

/* =================== BUSCADOR CON PREVISUALIZACIÓN =================== */
const buscador = document.querySelector(".search-box input");
const botonBuscar = document.querySelector(".search-btn");

const previewContainer = document.createElement("div");
previewContainer.style.position = "absolute";
previewContainer.style.background = "#000";
previewContainer.style.color = "#fff";
previewContainer.style.width = "100%";
previewContainer.style.maxHeight = "250px";
previewContainer.style.overflowY = "auto";
previewContainer.style.border = "1px solid #d4af37";
previewContainer.style.borderRadius = "8px";
previewContainer.style.zIndex = "999";
previewContainer.style.display = "none";
previewContainer.style.fontSize = "14px";
previewContainer.style.top = "100%";
previewContainer.style.left = "0";
previewContainer.style.padding = "5px 0";

buscador.parentNode.style.position = "relative";
buscador.parentNode.appendChild(previewContainer);

function actualizarPreview() {
  const termino = buscador.value.trim().toLowerCase();
  if (!termino) {
    previewContainer.style.display = "none";
    return;
  }

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(termino) ||
    p.cat.toLowerCase().includes(termino) ||
    p.categoria.toLowerCase().includes(termino)
  );

  previewContainer.innerHTML = "";
  if (filtrados.length === 0) {
    previewContainer.innerHTML = `<div style="padding:5px 10px;">Sin resultados</div>`;
  } else {
    filtrados.forEach(p => {
      const item = document.createElement("div");
      item.classList.add("preview-item");
      item.style.display = "flex";
      item.style.alignItems = "center";
      item.style.padding = "5px 10px";
      item.style.cursor = "pointer";
      item.style.borderBottom = "1px solid rgba(212,175,55,0.2)";

      item.innerHTML = `
        <img src="${p.img}" style="width:40px; height:40px; object-fit:cover; margin-right:10px; border-radius:5px;">
        <span style="flex:1;">${p.nombre}</span>
        <span style="font-weight:bold; color:#d4af37;">$${p.precio.toLocaleString()}</span>
      `;

      item.addEventListener("click", () => {
        mostrarProductos([p]);
        titulo.textContent = `Resultados para "${p.nombre}"`;
        previewContainer.style.display = "none";
        buscador.value = "";
      });

      previewContainer.appendChild(item);
    });
  }
  previewContainer.style.display = filtrados.length > 0 ? "block" : "none";
}

buscador.addEventListener("input", actualizarPreview);

function buscarProductos() {
  const termino = buscador.value.trim().toLowerCase();
  if (!termino) {
    mostrarProductos(productos.filter(p => !categoriaGeneral || p.categoria === categoriaGeneral));
    titulo.textContent = categoriaGeneral ? categoriaGeneral.toUpperCase() : "Productos disponibles";
    return;
  }

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(termino) ||
    p.categoria.toLowerCase().includes(termino) ||
    p.cat.toLowerCase().includes(termino)
  );
  mostrarProductos(filtrados);
  titulo.textContent = `Resultados de búsqueda: "${termino}"`;
  previewContainer.style.display = "none";
}

botonBuscar.addEventListener("click", buscarProductos);
buscador.addEventListener("keyup", e => { if (e.key === "Enter") buscarProductos(); });
