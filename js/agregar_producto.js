import { servicios_productos } from "./servicios_producto.js";
const formulario = document.querySelector ("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log ("precio");
    const url = document.querySelector ("[data-url]").value;
    const categoria = document.querySelector ("[data-categoria]").value;
    const nombre = document.querySelector ("[data-nombre]").value;
    const precio = document.querySelector ("[data-precio]").value;
    const descripcion = document.querySelector ("[data-descripcion]").value;
   /* const producto = {
        url,
        categoria,
        nombre,
        precio,
        descripcion,
    }

    const listaProductos = JSON.parse (localStorage.getItem('tasks')) || [];
    listaProductos.push (producto);
    localStorage.setItem('tasks',JSON.stringify(listaProductos));
    const verproductos = document.createElement ('span');
    verproductos.classList.add('productos_clase_nombre');
    verproductos.innerText = categoria;
*/
    console.log (url);
    servicios_productos.crearProducto(url,categoria,nombre,precio,descripcion).then(respuesta => console.log(respuesta))
    .catch((err) => console.log(err));
});
