# Tema: Tipos de datos y operadores en JavaScript

## Objetivo de la sesión
Reconocer los principales tipos de datos en JavaScript y aprender a usar operadores para realizar cálculos y comparaciones.

---

### 1. Tipos de datos en JavaScript
JavaScript es un lenguaje **dinámico**, lo que significa que no se declara el tipo de dato explícitamente.  
El tipo depende del valor asignado.

**Tipos primitivos más comunes:**
- **String** → texto: `"Hola"`, `'Mundo'`
- **Number** → números: `10`, `3.14`
- **Boolean** → verdadero o falso: `true`, `false`
- **Undefined** → variable sin valor asignado
- **Null** → valor vacío o inexistente

**Ejemplo:**
```js
let nombre = "Sofía";
let edad = 25;
let activo = true;
let direccion;
let resultado = null;
````

---

### 2. Operadores aritméticos

Se usan para realizar cálculos numéricos.

| Operador | Descripción    | Ejemplo  | Resultado |
| -------- | -------------- | -------- | --------- |
| `+`      | Suma           | `5 + 3`  | `8`       |
| `-`      | Resta          | `10 - 4` | `6`       |
| `*`      | Multiplicación | `2 * 3`  | `6`       |
| `/`      | División       | `8 / 2`  | `4`       |
| `%`      | Módulo (resto) | `7 % 3`  | `1`       |
| `**`     | Potencia       | `2 ** 3` | `8`       |

**Ejemplo:**

```js
let resultado = (10 + 2) * 3;
console.log(resultado); // 36
```

---

### 3. Operadores de concatenación

El operador `+` también se usa para **unir cadenas de texto**.

**Ejemplo:**

```js
let nombre = "María";
let saludo = "Hola, " + nombre + "!";
console.log(saludo);
```

También se pueden usar **template strings** con comillas invertidas:

```js
let saludo2 = `Hola, ${nombre}!`;
console.log(saludo2);
```

---

### 4. Operadores de comparación

Sirven para comparar valores y devuelven un resultado booleano (`true` o `false`).

| Operador | Significado          | Ejemplo     | Resultado |
| -------- | -------------------- | ----------- | --------- |
| `==`     | Igualdad (sin tipo)  | `5 == "5"`  | `true`    |
| `===`    | Igualdad estricta    | `5 === "5"` | `false`   |
| `!=`     | Diferente (sin tipo) | `5 != "5"`  | `false`   |
| `!==`    | Diferente estricto   | `5 !== "5"` | `true`    |
| `>`      | Mayor que            | `7 > 3`     | `true`    |
| `<`      | Menor que            | `2 < 8`     | `true`    |
| `>=`     | Mayor o igual        | `5 >= 5`    | `true`    |
| `<=`     | Menor o igual        | `4 <= 2`    | `false`   |

---

### 5. Operadores lógicos

Se usan para combinar condiciones.

| Operador | Nombre   | Ejemplo         | Resultado |       |   |        |        |
| -------- | -------- | --------------- | --------- | ----- | - | ------ | ------ |
| `&&`     | AND (y)  | `true && false` | `false`   |       |   |        |        |
| `        |          | `               | OR (o)    | `true |   | false` | `true` |
| `!`      | NOT (no) | `!true`         | `false`   |       |   |        |        |

---

## Actividad de la clase

1. Crear un archivo `operadores.js` enlazado a un HTML.
2. Declarar variables con distintos tipos (`string`, `number`, `boolean`).
3. Realizar operaciones matemáticas simples y mostrar los resultados con `console.log()`.
4. Comparar valores usando `==` y `===`.
5. Escribir ejemplos con operadores lógicos (`&&`, `||`, `!`).
6. Usar *template strings* para mostrar mensajes descriptivos.

---

## Conceptos clave

* JavaScript convierte automáticamente los tipos cuando es necesario (coerción).
* `==` compara solo el valor, `===` compara valor **y tipo**.
* Los operadores lógicos permiten crear condiciones más complejas.
* Las *template strings* facilitan la concatenación de texto.

---

## Errores comunes

* Usar `==` en lugar de `===` y obtener resultados inesperados.
* Confundir el operador de asignación (`=`) con el de comparación (`==` o `===`).
* Olvidar usar comillas para strings.
* No comprender la diferencia entre tipos numéricos y cadenas al sumar.

---

## Recursos adicionales

* [MDN: Tipos de datos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
* [MDN: Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* [W3Schools: JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
