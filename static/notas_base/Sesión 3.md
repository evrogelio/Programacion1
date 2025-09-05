# Tema: Contenido en HTML

## Objetivo de la sesión
Identificar y utilizar etiquetas básicas de HTML para escribir contenido dentro de una página: encabezados, párrafos, listas, imágenes y saltos de línea.

---

## Contenidos

### 1. Énfasis en el texto

- `<strong>`: Aplica **negrita semántica**, utilizada para resaltar contenido importante.
- `<em>`: Aplica **cursiva semántica**, utilizada para dar énfasis o modificar el tono de la frase.

Estas etiquetas no solo cambian el estilo visual, también comunican **intención** al navegador y a tecnologías de asistencia.

### 2. Listas

- `<ul>`: Lista desordenada (viñetas).
- `<ol>`: Lista ordenada (numeración).
- `<li>`: Elemento de lista. Debe estar siempre dentro de `<ul>` o `<ol>`.

Las listas organizan contenido repetitivo o agrupado de manera clara.

### 3. Imágenes

- `<img>`: Inserta una imagen en la página.
  - Atributo `src`: Ruta o URL del archivo de imagen.
  - Atributo `alt`: Texto alternativo que se muestra si la imagen no carga o para lectores de pantalla.

La etiqueta `<img>` **no tiene cierre** y debe usarse con cuidado respecto a la ruta y el formato del archivo.

---

## Actividad de la clase

**Crea una página web en HTML que muestre información sobre ti.**

Requisitos:

- Usa etiquetas básicas de contenido (sin CSS ni JavaScript).
- Organiza la información usando una estructura con `<header>`, `<main>` y `<footer>`.
- Incluye los siguientes elementos:

  - Un título y una frase o cita personal
  - Un párrafo `<p>` que hable sobre ti
  - Una lista de intereses con `<ul>`
  - Una lista de eventos o recuerdos con `<ol>`
  - Una imagen representativa con `<img>`
  - Un pie de página con tu nombre usando `<footer>`

---

## Conceptos clave

- El contenido HTML se compone de etiquetas que tienen un propósito específico.
- Las etiquetas pueden tener atributos que agregan información adicional (como identificadores, rutas o descripciones).
- El orden y la jerarquía del contenido afectan la comprensión y la accesibilidad del sitio.
- Las etiquetas semánticas como `<strong>`, `<em>`, `<main>` o `<footer>` aportan estructura y significado, no solo apariencia.

---

## Errores comunes

- Usar encabezados sin seguir un orden lógico.
- Olvidar cerrar correctamente las etiquetas como `<p>` o `<li>`.
- Usar `<br>` en lugar de un nuevo párrafo con `<p>`.
- Colocar imágenes sin atributo `alt` o en rutas incorrectas.
- Insertar etiquetas `<li>` fuera de listas `<ul>` o `<ol>`.

---

## Recursos adicionales

- [MDN: Imágenes en HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/img)
- [MDN: Listas HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/ul)
- [MDN: Énfasis en HTML (`<strong>`, `<em>`)](https://developer.mozilla.org/es/docs/Web/HTML/Element/em)
- [MDN: Buenas prácticas con contenido](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
