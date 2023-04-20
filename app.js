
const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});




// js de tabs


const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

//cuando hago click en un li le voy a quitar la clase activo
//a todos los bloque le voy a quitar la clase activo.


li.forEach((cadaLi, i)=> {
    li[i].addEventListener('click', ()=>{

        li.forEach ((cadaLi, i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})

// funcion del modal para editar cliente 

const botonAbrirModal = document.getElementById("abrir-modal");
const botonAbrirModal2 = document.getElementById("abrir-modal2");
const botonAbrirModal3 = document.getElementById("abrir-modal3");
const botonAbrirModal4 = document.getElementById("abrir-modal4");
const modal = document.getElementById("mi-modal");
const botonCerrarModal = document.getElementById("cerrar-modal");


botonAbrirModal2.addEventListener('click', mostrarModal);
botonAbrirModal3.addEventListener('click', mostrarModal);
botonAbrirModal4.addEventListener('click', mostrarModal);

botonAbrirModal.onclick = function() {
  modal.style.display = "block";
}

botonCerrarModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function mostrarModal() {
  modal.style.display = 'block';
}

// fin de funcion del modal

// funcion del modal para editar proveedor
const AbrirModalEP = document.getElementById("tr-modalEditProv")
const modalEditProv = document.getElementById("modal-editarProv");
const botonCerrarModalEP = document.getElementById("cerrar-modalEditProv");



AbrirModalEP.onclick = function() {
  modalEditProv.style.display = "block";
}

botonCerrarModalEP.onclick = function() {
  modalEditProv.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalEditProv) {
    modalEditProv.style.display = "none";
  }
}
function mostrarModal() {
  modalEditProv.style.display = 'block';
}
// fin de funcion del modal para editar proveedor --------------


// js de nav bar


const liNav = document.querySelectorAll('.li-nav');
const bloqueNav = document.querySelectorAll('.bloque-nav');

liNav.forEach((cadaLi, i)=> {
    liNav[i].addEventListener('click', ()=>{

        liNav.forEach ((cadaLi, i)=>{
            liNav[i].classList.remove('activo')
            bloqueNav[i].classList.remove('activo')
        })
        liNav[i].classList.add('activo')
        bloqueNav[i].classList.add('activo')
    })
})


//modal para agregar cliente nuevo//

const AbrirModalAC = document.getElementById("btn-agregarCliente")
const modalAgregarClient = document.getElementById("modal-AgregCliente");
const botonCrrModAgregarClient = document.getElementById("cerrar-ModalAG");



AbrirModalAC.onclick = function() {
  modalAgregarClient.style.display = "block";
}

botonCrrModAgregarClient.onclick = function() {
  modalAgregarClient.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalAgregarClient) {
    modalAgregarClient.style.display = "none";
  }
}
function mostrarModal() {
  modalAgregarClient.style.display = 'block';
}
// funcion abrir modal agregar proveedor nuevo

const AbrirModalAP = document.getElementById("btn-agregarProveedor")
const modalAgregarProv = document.getElementById("modal-AgregProveedor");
const botonCrrModAgregarProv = document.getElementById("cerrar-ModalAP");



AbrirModalAP.onclick = function() {
  modalAgregarProv.style.display = "block";
}

botonCrrModAgregarProv.onclick = function() {
  modalAgregarProv.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalAgregarProv) {
    modalAgregarProv.style.display = "none";
  }
}
function mostrarModal() {
  modalAgregarProv.style.display = 'block';
}