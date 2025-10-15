
# Tema: Introducción al DOM

## Objetivo de la sesión
Comprender qué es el DOM, cómo JavaScript puede acceder y modificar elementos del documento HTML, y realizar los primeros ejercicios de manipulación básica de texto y atributos.

---

### 1. ¿Qué es el DOM?
El **DOM (Document Object Model)** es una representación del documento HTML que el navegador crea para que JavaScript pueda interactuar con él.

Podemos imaginarlo como un **árbol de nodos**, donde cada etiqueta HTML es un objeto con propiedades y métodos.

**Ejemplo visual:**

```

HTML
└── body
├── h1
└── p

````

Con el DOM, podemos:
- Leer o cambiar el texto de una etiqueta.
- Cambiar estilos.
- Responder a eventos (como clics o teclas).

---

### 2. Acceder a elementos
Usamos métodos especiales de `document` para obtener elementos del HTML.

**Ejemplo:**
```html
<p id="mensaje">Texto original</p>

<script>
  const parrafo = document.getElementById("mensaje");
  console.log(parrafo);
</script>
````

---

### 3. Cambiar el contenido

Podemos modificar el texto o el HTML dentro de un elemento usando sus propiedades.

**Ejemplo:**

```html
<p id="mensaje">Texto original</p>

<script>
  const parrafo = document.getElementById("mensaje");
  parrafo.textContent = "Nuevo texto desde JavaScript";
</script>
```

**Propiedades comunes:**

| Propiedad     | Descripción                      |
| ------------- | -------------------------------- |
| `textContent` | Cambia solo el texto             |
| `innerHTML`   | Cambia el contenido HTML interno |

---

### 4. Cambiar estilos desde JavaScript

Cada elemento tiene una propiedad `style` que permite modificar su apariencia.

**Ejemplo:**

```html
<p id="mensaje">Hola mundo</p>

<script>
  const p = document.getElementById("mensaje");
  p.style.color = "blue";
  p.style.fontSize = "20px";
</script>
```

---

### 5. Usar eventos con el DOM

Podemos ejecutar funciones cuando ocurre un evento, como un clic.

**Ejemplo:**

```html
<button onclick="cambiarTexto()">Haz clic</button>
<p id="mensaje">Texto inicial</p>

<script>
  function cambiarTexto() {
    const parrafo = document.getElementById("mensaje");
    parrafo.textContent = "Has hecho clic en el botón";
  }
</script>
```

---

### 6. Otros selectores útiles

Además de `getElementById`, existen otros métodos para seleccionar elementos:

| Método                     | Descripción             | Ejemplo                                   |
| -------------------------- | ----------------------- | ----------------------------------------- |
| `getElementsByClassName()` | Busca por clase         | `document.getElementsByClassName("item")` |
| `getElementsByTagName()`   | Busca por etiqueta      | `document.getElementsByTagName("p")`      |
| `querySelector()`          | Usa un selector CSS     | `document.querySelector("#mensaje")`      |
| `querySelectorAll()`       | Todos los que coincidan | `document.querySelectorAll(".item")`      |

---

## Actividad de la clase

1. Crear un archivo `dom.html` con un encabezado, un párrafo y un botón.
2. Cuando se haga clic en el botón:

   * Cambiar el texto del párrafo.
   * Cambiar el color del texto.
3. Agregar un segundo botón que:

   * Cambie el fondo de la página a un color diferente.
4. Mostrar un mensaje con `alert()` cuando se cambie el color.

---

## Conceptos clave

* El DOM representa el documento HTML como objetos en memoria.
* `document.getElementById()` permite acceder a un elemento específico.
* `textContent` y `innerHTML` cambian el texto o contenido interno.
* `style` permite modificar la apariencia del elemento.
* Los eventos (`onclick`, `onchange`, etc.) hacen que el sitio reaccione a la interacción del usuario.

---

## Errores comunes

* Olvidar usar comillas al escribir el id en `getElementById("id")`.
* Intentar acceder a un elemento que aún no existe (colocar el script antes del HTML).
* Confundir `textContent` (solo texto) con `innerHTML` (puede incluir etiquetas).
* Usar `=` en lugar de `==` o `===` al comparar dentro de una función.

---

## Recursos adicionales

* [MDN: Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
* [W3Schools: JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
* [JavaScript.info: El DOM](https://es.javascript.info/dom-nodes)
