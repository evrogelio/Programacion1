
# Tema: Sintaxis básica y variables en JavaScript

## Objetivo de la sesión
Comprender la estructura básica de un script en JavaScript, cómo escribir instrucciones simples y declarar variables para almacenar información.

---

### 1. ¿Qué es JavaScript?
- Es el lenguaje que da **interactividad** a las páginas web.  
- Se ejecuta en el navegador y permite **manipular el contenido** (HTML) y los estilos (CSS).  
- Un archivo JavaScript tiene extensión `.js` y se enlaza con la etiqueta `<script>`.

**Ejemplo:**
```html
<script src="script.js"></script>
````

---

### 2. Sintaxis básica

* Cada instrucción termina con `;` (opcional, pero buena práctica).
* Los comentarios se escriben con:

  * `// comentario de una línea`
  * `/* comentario de varias líneas */`
* JavaScript distingue entre **mayúsculas y minúsculas**.
* Se recomienda usar **indentación y espacios** para mejorar la legibilidad.

**Ejemplo:**

```js
// Esto muestra un mensaje en la consola
console.log("Hola, mundo!");
```

---

### 3. Variables

Sirven para **guardar valores** que se pueden usar o modificar.

* Declaración con `let`, `const` o `var`:

  * `let`: variable que puede cambiar su valor.
  * `const`: valor constante, no se puede reasignar.
  * `var`: forma antigua (se evita en código moderno).

**Ejemplo:**

```js
let nombre = "Ana";
const edad = 20;

console.log(nombre);
console.log(edad);
```

---

### 4. Tipos de datos básicos

* **String** – texto entre comillas `"hola"`.
* **Number** – números enteros o decimales `42`, `3.14`.
* **Boolean** – `true` o `false`.
* **Undefined** – variable declarada pero sin valor.
* **Null** – valor intencionalmente vacío.

**Ejemplo:**

```js
let activo = true;
let temperatura = 28.5;
let saludo = "Buenos días";
```

---

## Actividad de la clase

1. Crear un archivo `variables.js` y enlazarlo a un HTML simple.
2. Declarar variables con `let` y `const` de distintos tipos.
3. Mostrar sus valores en consola con `console.log()`.
4. Cambiar algunos valores y observar los resultados.
5. Escribir comentarios explicando cada línea.

---

## Conceptos clave

* JavaScript usa una **sintaxis sencilla** basada en instrucciones y expresiones.
* Las variables almacenan datos para reutilizarlos.
* Usar `let` y `const` evita errores comunes del pasado.
* `console.log()` es una herramienta fundamental para probar código.

---

## Errores comunes

* Olvidar escribir `let` o `const` al declarar una variable.
* Confundir las comillas (`"`, `'`, `` ` ``) al escribir texto.
* Intentar reasignar un valor a una constante (`const`).
* No verificar errores en la consola del navegador.

---

## Recursos adicionales

* [MDN: Introducción a JavaScript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [W3Schools: JavaScript Syntax](https://www.w3schools.com/js/js_syntax.asp)
* [MDN: Variables](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declarar_variables)