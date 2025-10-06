# Tema: Funciones simples en JavaScript

## Objetivo de la sesión
Comprender qué son las funciones en JavaScript, cómo se declaran, cómo se llaman y por qué son útiles para organizar y reutilizar código.

---

### 1. ¿Qué es una función?
Una **función** es un bloque de código que realiza una tarea específica y puede ejecutarse cuando se necesite.  
Permite **reutilizar código** y hacerlo más fácil de mantener.

**Ejemplo básico:**
```js
function saludar() {
  console.log("Hola, bienvenido al curso!");
}

saludar(); // Llamada a la función
````

---

### 2. Estructura de una función

Una función se compone de:

1. La palabra clave `function`
2. Un **nombre descriptivo**
3. Paréntesis `()` (pueden contener parámetros)
4. Llaves `{}` que encierran las instrucciones

**Ejemplo:**

```js
function mostrarMensaje() {
  console.log("Esto es una función");
}
```

---

### 3. Parámetros y argumentos

Los **parámetros** permiten que una función reciba información externa.
Los **argumentos** son los valores que se pasan al llamar la función.

**Ejemplo:**

```js
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

saludar("Lucía"); // "Lucía" es el argumento
```

También se pueden usar varios parámetros:

```js
function sumar(a, b) {
  console.log(a + b);
}

sumar(3, 4); // 7
```

---

### 4. Retorno de valores

Las funciones pueden **devolver un resultado** usando `return`.

**Ejemplo:**

```js
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(5, 2);
console.log(resultado); // 10
```

Si una función no tiene `return`, su valor será `undefined`.

---

### 5. Expresiones de función y funciones flecha

También se pueden crear funciones como **expresiones** o **funciones flecha (arrow functions)**.

**Expresión de función:**

```js
const restar = function(a, b) {
  return a - b;
};
```

**Función flecha (versión corta):**

```js
const dividir = (a, b) => a / b;
```

---

## Actividad de la clase

1. Crear un archivo `funciones.js` enlazado a un HTML.
2. Escribir una función sin parámetros que muestre un mensaje.
3. Crear una función que reciba un nombre y salude al usuario.
4. Hacer una función que sume dos números y devuelva el resultado.
5. Probar la misma función escrita como **arrow function**.
6. Mostrar todos los resultados en la consola.

---

## Conceptos clave

* Una función **encapsula** un bloque de código que puede reutilizarse.
* Los parámetros permiten **personalizar** el comportamiento.
* `return` devuelve un valor para usarlo en otras partes del programa.
* Las **arrow functions** son una forma más breve y moderna de escribir funciones.

---

## Errores comunes

* Olvidar llamar a la función después de declararla.
* No usar `return` cuando se espera un resultado.
* Confundir parámetros (al definir) con argumentos (al llamar).
* Omitir las llaves `{}` en funciones con varias líneas.

---

## Recursos adicionales

* [MDN: Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
* [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
* [MDN: Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)