// Supongamos que tienes un array de profesionales
var profesionales = [
    { nombre: 'Pedro Martin', especialidad: 'Especialidad Niños' },
    { nombre: 'Maria Angeles', especialidad: 'Especialidad Adolescentes' },
    { nombre: 'Martina villanueva', especialidad: 'Especialidad Adultos' },
    // Agrega más profesionales según sea necesario
];

// Obtén el elemento div con el id "profesionales-lista"
var listaProfesionales = document.getElementById("profesionales-lista");

// Crea un elemento de lista no ordenada (ul)
var ul = document.createElement("ul");

// Itera sobre el array de profesionales y crea elementos de lista (li) para cada uno
profesionales.forEach(function(profesional, index) {
    var li = document.createElement("li");
    li.textContent = `${profesional.nombre} - ${profesional.especialidad}`;
    li.onclick = () => eliminarelemento(index);
    ul.appendChild(li);
});

// Agrega la lista ul al elemento con el id "profesionales-lista"
listaProfesionales.appendChild(ul);

function eliminarelemento(index) {
    console.log("Hola");
    profesionales.splice(index, 1);
    // Después de eliminar el elemento, actualiza la lista en la interfaz
    actualizarLista();
}

function actualizarLista() {
    // Elimina todos los elementos hijos del contenedor
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    // Vuelve a crear la lista con los elementos actualizados del array
    profesionales.forEach(function(profesional, index) {
        var li = document.createElement("li");
        li.textContent = `${profesional.nombre} - ${profesional.especialidad}`;
        li.onclick = () => eliminarelemento(index);
        ul.appendChild(li);
    });
}

function agregarProfesional() {
    // Obtén los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var especialidad = document.getElementById("especialidad").value;

    // Añade el nuevo profesional al array
    profesionales.push({ nombre: nombre, especialidad: especialidad });

    // Después de agregar el nuevo profesional, actualiza la lista en la interfaz
    actualizarLista();

    // Limpia los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("especialidad").value = "";
}
