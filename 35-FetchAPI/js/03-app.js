// Fetch API desde un JSON (Objeto)

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

var arr = []

function obtenerDatos() {
    fetch('data/empleados.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
            resultado.forEach(ele => arr.push(ele))
        })
}
console.log(arr)
function mostrarHTML(empleados) {
    console.log('hola')
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {

        const { id, nombre, empresa, trabajo} = empleado;
        // console.log(empleado)
        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}