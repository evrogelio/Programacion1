# Tema: Ciclos en JavaScript

## Objetivo de la sesión
Comprender cómo usar estructuras repetitivas en JavaScript para ejecutar instrucciones múltiples veces sin tener que escribir el mismo código repetidamente.

---

### 1. ¿Qué es un ciclo?
Un **ciclo** (o bucle) permite repetir un bloque de código mientras se cumpla una condición.

**Ejemplo básico:**
```js
let contador = 1;
while (contador <= 5) {
  console.log("Repetición número " + contador);
  contador = contador + 1;
}
````

El ciclo se repite mientras `contador <= 5` sea verdadero.

---

### 2. Ciclo `while`

El ciclo `while` evalúa una condición **antes** de ejecutar el bloque.

**Sintaxis:**

```js
while (condición) {
  // código a repetir
}
```

**Ejemplo:**

```js
let numero = 1;

while (numero <= 3) {
  console.log("Número: " + numero);
  numero++;
}
```

---

### 3. Ciclo `for`

El ciclo `for` es una forma compacta de repetir un bloque un número definido de veces.

**Sintaxis:**

```js
for (inicio; condición; actualización) {
  // código a repetir
}
```

**Ejemplo:**

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteración " + i);
}
```

**Explicación:**

1. `let i = 1` → se ejecuta una vez (inicio)
2. `i <= 5` → se evalúa antes de cada repetición
3. `i++` → se ejecuta al final de cada vuelta

---

### 4. Comparando `while` y `for`

| Situación                          | Recomendado |
| ---------------------------------- | ----------- |
| No sabes cuántas veces se repetirá | `while`     |
| Sabes exactamente cuántas veces    | `for`       |

---

### 5. Ciclo con condición y acumulador

Podemos acumular valores en cada repetición.

**Ejemplo:**

```js
let suma = 0;

for (let i = 1; i <= 5; i++) {
  suma = suma + i;
}

console.log("La suma total es: " + suma);
```

---

### 6. Interrumpir un ciclo

Podemos detener un ciclo con la palabra clave `break`.

**Ejemplo:**

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // sale del ciclo
  }
  console.log(i);
}
```

Y con `continue`, saltamos una iteración sin salir del ciclo.

**Ejemplo:**

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // salta el 3
  }
  console.log(i);
}
```

---

## Actividad de la clase

1. Crear un archivo `ciclos.js` enlazado a un HTML.
2. Escribir los siguientes programas:

   * Un ciclo `for` que muestre los números del 1 al 10.
   * Un ciclo `while` que cuente hacia atrás desde 5 hasta 1.
   * Un programa que sume los números del 1 al 100 y muestre el resultado.
3. Probar cambiar los límites y condiciones.
4. Usar `break` o `continue` para alterar el flujo del ciclo.

---

## Conceptos clave

* Un ciclo repite código mientras una condición se cumpla.
* `for` y `while` son las estructuras más comunes.
* `break` termina el ciclo antes de tiempo.
* `continue` salta una iteración sin detener el ciclo.
* Los ciclos se combinan con condicionales para crear lógica compleja.

---

## Errores comunes

* Olvidar actualizar la variable del ciclo (causa bucles infinitos).
* Usar `=` en lugar de `==` o `===` en la condición.
* No colocar llaves `{}` correctamente cuando el ciclo tiene más de una instrucción.

---

## Recursos adicionales

* [MDN: Ciclos e iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [W3Schools: JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)
* [JavaScript.info: Bucles](https://es.javascript.info/while-for)

