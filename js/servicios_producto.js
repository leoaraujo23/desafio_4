const crearProducto = (url,categoria,nombre,precio,descripcion) => {
    return fetch ("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type":"aplication/json"
        },
        body: JSON.stringify({url,categoria,nombre,precio,descripcion,id: uuid.v4()})
    })
}







export const servicios_productos ={
    crearProducto,
};
