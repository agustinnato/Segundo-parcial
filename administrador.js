
var profesionales = [
    { nombre: 'Pedro Martin', especialidad: 'Especialidad Niños' },
    { nombre: 'Maria Angeles', especialidad: 'Especialidad Adolescentes' },
    { nombre: 'Martina villanueva', especialidad: 'Especialidad Adultos' },
   
];


var listaProfesionales = document.getElementById("profesionales-lista");

// Crea un elemento de lista no ordenada (ul)
var ul = document.createElement("ul");


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
    
    actualizarLista();
}

function actualizarLista() {
    
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    
    profesionales.forEach(function(profesional, index) {
        var li = document.createElement("li");
        li.textContent = `${profesional.nombre} - ${profesional.especialidad}`;
        li.onclick = () => eliminarelemento(index);
        ul.appendChild(li);
    });
}

function agregarProfesional() {
    
    var nombre = document.getElementById("nombre").value;
    var especialidad = document.getElementById("especialidad").value;

    
    profesionales.push({ nombre: nombre, especialidad: especialidad });

    
    actualizarLista();

    
    document.getElementById("nombre").value = "";
    document.getElementById("especialidad").value = "";
}
