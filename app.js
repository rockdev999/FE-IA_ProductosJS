import { 
    filtrarPorPrecio, 
    ordenarAlfabeticamente, 
    obtenerNombres, 
    calcularPrecioTotal,
    tieneCategoria,
    todosMenoresA,
    mostrarProductos 
} from './productos.js';

const iniciarApp = () => {
    console.log("=== TIENDA ONLINE - GESTIÓN DE PRODUCTOS ===");
    console.log("");
    
    mostrarProductos();
    console.log("");
    
    console.log("PASO 1: Filtrar productos menores a $100");
    const productosFiltrados = filtrarPorPrecio(100);
    console.log("");
    
    console.log("PASO 2: Ordenar alfabéticamente");
    const productosOrdenados = ordenarAlfabeticamente(productosFiltrados);
    console.log("");
    
    console.log("PASO 3: Obtener nombres de productos");
    const nombres = obtenerNombres(productosOrdenados);
    console.log("");
    
    console.log("=== MÉTODOS ADICIONALES ===");
    console.log("");
    
    console.log("MÉTODO REDUCE:");
    calcularPrecioTotal(productosFiltrados);
    console.log("");
    
    console.log("MÉTODO SOME:");
    tieneCategoria("Ropa");
    tieneCategoria("Deportes");
    console.log("");
    
    console.log("MÉTODO EVERY:");
    todosMenoresA(1000);
    todosMenoresA(50);
    console.log("");
    
    console.log("=== FIN DEL PROCESO ===");
};

iniciarApp();