# Tema: Práctica y mini ejercicios – Fundamentos de JavaScript

## Objetivo de la sesión
Aplicar los conocimientos de sintaxis, variables, operadores y funciones en pequeños ejercicios prácticos que consoliden los fundamentos de JavaScript.

---

### 1. Repaso rápido de conceptos
- **Variables (`let`, `const`)** → almacenan datos.  
- **Tipos de datos** → `string`, `number`, `boolean`, `null`, `undefined`.  
- **Operadores** → permiten hacer cálculos y comparaciones.  
- **Funciones** → agrupan código reutilizable.  

**Ejemplo combinado:**
```js
function presentar(nombre, edad) {
  console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
}

let usuario = "Luis";
let años = 20;
presentar(usuario, años);
````

---

### 2. Ejercicios guiados

#### Ejercicio 1: Calculadora básica

Crea una función llamada `calcular` que reciba dos números y muestre la suma, resta, multiplicación y división.

**Pistas:**

* Usa operadores aritméticos.
* Muestra los resultados con `console.log()`.

---

#### Ejercicio 2: Verificador de edad

Pide al usuario (usando `prompt()`) su edad y muestra un mensaje:

* “Eres menor de edad” si es menor a 18.
* “Eres mayor de edad” si es 18 o más.

**Ejemplo:**

```js
let edad = prompt("¿Cuál es tu edad?");
```

---

#### Ejercicio 3: Convertidor de temperatura

Crea una función que convierta grados Celsius a Fahrenheit.
**Fórmula:** `F = (C * 9/5) + 32`

**Ejemplo:**

```js
function convertir(celsius) {
  return (celsius * 9/5) + 32;
}
```

---

#### Ejercicio 4: Contador de caracteres

Crea una función que reciba un texto y muestre cuántos caracteres tiene.

**Ejemplo:**

```js
function contar(texto) {
  console.log(`El texto tiene ${texto.length} caracteres.`);
}
```

---

#### Ejercicio 5: Saludo personalizado

Usa una función para saludar a diferentes usuarios según la hora del día (mañana, tarde o noche).
Puedes usar `new Date().getHours()` para obtener la hora actual.

---

## Actividad de la clase

1. Crear un archivo `ejercicios.js` enlazado a un HTML.
2. Resolver los 5 ejercicios anteriores.
3. Mostrar los resultados en la consola.
4. Probar distintos valores para verificar los resultados.
5. Comentar el código explicando qué hace cada función.

---

## Conceptos clave

* JavaScript permite resolver problemas de forma **estructurada y progresiva**.
* Las funciones facilitan dividir el código en **bloques lógicos**.
* Usar `console.log()` ayuda a **verificar resultados** paso a paso.
* La práctica es fundamental para comprender la lógica de programación.

---

## Errores comunes

* No convertir los valores de `prompt()` a número (`Number(prompt(...))`).
* Olvidar llamar las funciones después de definirlas.
* No probar distintos casos (por ejemplo, valores negativos o vacíos).

---

## Recursos adicionales

* [MDN: Guía de JavaScript para principiantes](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [W3Schools: JavaScript Exercises](https://www.w3schools.com/js/js_exercises.asp)
* [JavaScript.info: Tutorial completo](https://es.javascript.info/)