const personas = [];

Agregar();
Eliminar();

function Agregar() {
    const frm = document.forms["formulario"];
    frm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = frm["nombre"].value.trim();
        const edad = frm["edad"].value.trim();
        const id = personas.length;

        personas.push({ nombre, edad });

        const tbody = document.querySelector('tbody');
        const fila = document.createElement('tr');

        const celdaId = document.createElement('td');
        celdaId.textContent = id;

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = nombre;

        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = edad;

        const celdaAccion = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btn btn-danger";
        botonEliminar.setAttribute("data-id", id);

        celdaAccion.appendChild(botonEliminar);

        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaAccion);

        tbody.appendChild(fila);
        frm.reset();
    });
}

function Eliminar() {
    document.querySelector('tbody').addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON') {
        const id = parseInt(event.target.dataset.id) - 1;
        personas[id] = null;
        event.target.closest('tr').remove();
        }
    });
}