// Reto 1: Suma de Elementos
function sumaElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo


// Reto 2: Número Mayor
function numeroMayor(arr) {
    let mayor = arr[0];  // Asumimos que el primer elemento es el mayor inicialmente
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];  // Actualizamos el valor mayor si encontramos uno más grande
        }
    }
    return mayor;
}
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo


// Reto 3: Filtrar Pares
function filtrarPares(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {  // Verificamos si el número es par
            pares.push(arr[i]);
        }
    }
    return pares;
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares


// Reto 4: Contar Vocales
function contarVocales(palabra) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u']; // Definimos las vocales
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) {  // Comprobamos si es vocal
            contador++;
        }
    }
    return contador;
}
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto


// Reto 5: Invertir Arreglo
function invertirArreglo(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso


// Reto 6: Promedio de Notas
function promedioNotas(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];  // Sumamos cada nota
    }
    return suma / arr.length;  // Calculamos el promedio
}
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas


// Reto 7: Contador de Letras
function contarLetras(palabra, letra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === letra.toLowerCase()) {  // Compara las letras sin importar mayúsculas o minúsculas
            contador++;
        }
    }
    return contador;
}
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto


// Reto 8: Elementos Únicos
function elementosUnicos(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unicos.includes(arr[i])) {  // Verificamos si el elemento no está en el arreglo 'unicos'
            unicos.push(arr[i]);
        }
    }
    return unicos;
}
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados


// Reto 9: Palíndromo
function esPalindromo(palabra) {
    let palabraInvertida = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];  // Invertimos la palabra
    }
    return palabra.toLowerCase() === palabraInvertida.toLowerCase();  // Comparamos la palabra original con la invertida
}
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no
