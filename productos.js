const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 80, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 45, categoria: "Accesorios" },
    { nombre: "Reloj", precio: 120, categoria: "Accesorios" }
];

const filtrarPorPrecio = (limite) => {
    const productosFiltrados = productos.filter(producto => producto.precio < limite);
    console.log(`Productos con precio menor a $${limite}:`);
    console.log(productosFiltrados);
    return productosFiltrados;
};

const ordenarAlfabeticamente = (listaProductos) => {
    const productosOrdenados = listaProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log("Productos ordenados alfabéticamente:");
    console.log(productosOrdenados);
    return productosOrdenados;
};

const obtenerNombres = (listaProductos) => {
    const nombres = listaProductos.map(producto => producto.nombre);
    console.log("Lista de nombres de productos:");
    console.log(nombres);
    return nombres;
};

const calcularPrecioTotal = (listaProductos) => {
    const total = listaProductos.reduce((suma, producto) => suma + producto.precio, 0);
    console.log(`Precio total de productos filtrados: $${total}`);
    return total;
};

const tieneCategoria = (categoria) => {
    const existe = productos.some(producto => producto.categoria === categoria);
    console.log(`¿Hay productos de la categoría "${categoria}"? ${existe ? "Sí" : "No"}`);
    return existe;
};

const todosMenoresA = (precio) => {
    const todosMenores = productos.every(producto => producto.precio < precio);
    console.log(`¿Todos los productos cuestan menos de $${precio}? ${todosMenores ? "Sí" : "No"}`);
    return todosMenores;
};

const mostrarProductos = () => {
    console.log("=== CATÁLOGO COMPLETO ===");
    for (const producto of productos) {
        console.log(`- ${producto.nombre}: $${producto.precio} (${producto.categoria})`);
    }
    console.log("-------------------------");
};

export { 
    filtrarPorPrecio, 
    ordenarAlfabeticamente, 
    obtenerNombres, 
    calcularPrecioTotal,
    tieneCategoria,
    todosMenoresA,
    mostrarProductos 
};