# Tienda Online - Filtro y Orden de Productos

Aplicación para gestionar y filtrar productos de una tienda online usando métodos de arrays de JavaScript ES6+.

## Descripción

Este proyecto permite:
- Filtrar productos por precio
- Ordenar productos alfabéticamente
- Extraer nombres de productos
- Calcular precio total de productos filtrados
- Verificar existencia de categorías
- Validar condiciones en todos los productos

## Estructura del proyecto
```
proyecto-tienda-online/
├── index.html
├── productos.js
├── app.js
└── README.md
```

## Instalación y uso

1. Descarga todos los archivos
2. Abre el archivo index.html en tu navegador
3. Abre la consola del navegador (F12) para ver los resultados

## Funcionalidades principales

### Filtrar productos
Usa filter() para obtener productos con precio menor a $100.

### Ordenar alfabéticamente
Usa sort() para ordenar productos por nombre de A-Z.

### Obtener nombres
Usa map() para crear un array solo con los nombres de productos.

### Calcular precio total
Usa reduce() para sumar el precio de todos los productos filtrados.

### Verificar categorías
Usa some() para comprobar si existe al menos un producto de cierta categoría.

### Validar precios
Usa every() para verificar si todos los productos cumplen una condición de precio.

## Métodos de arrays utilizados

- filter(): Filtrar elementos según una condición
- sort(): Ordenar elementos alfabéticamente
- map(): Transformar elementos del array
- reduce(): Acumular valores (suma de precios)
- some(): Verificar si al menos un elemento cumple una condición
- every(): Verificar si todos los elementos cumplen una condición

## Características de ES6+ utilizadas

- Const para variables que no se reasignan
- Arrow functions
- Template literals
- Módulos ES6 (export/import)
- Bucle for...of
- Métodos de arrays modernos

## Ejemplo de salida
```
=== TIENDA ONLINE - GESTIÓN DE PRODUCTOS ===

=== CATÁLOGO COMPLETO ===
- Camiseta: $15 (Ropa)
- Laptop: $800 (Electrónica)
- Libro: $12 (Educación)
...

PASO 1: Filtrar productos menores a $100
Productos con precio menor a $100: [...]

PASO 2: Ordenar alfabéticamente
Productos ordenados alfabéticamente: [...]

PASO 3: Obtener nombres de productos
Lista de nombres: ["Audífonos", "Camiseta", ...]
```
