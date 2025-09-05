# Tema: Estructura mínima de una página HTML

## Objetivo de la sesión
Comprender cómo se organiza una página HTML desde cero y qué función cumple cada parte principal del documento.

---

## Contenidos

### 1. ¿Qué es la estructura de un documento HTML?
- Es la forma estándar que deben seguir todos los archivos `.html`.
- Permite al navegador interpretar correctamente el contenido.

### 2. Partes esenciales

- `<!DOCTYPE html>`: indica que se usará HTML5.
- `<html lang="es">`: raíz del documento. El atributo `lang` indica el idioma del contenido.
- `<head>`: contiene información general sobre la página (no visible directamente).
- `<meta charset="UTF-8">`: permite usar caracteres especiales como tildes y ñ.
- `<title>`: aparece en la pestaña del navegador.
- `<body>`: contiene todo el contenido visible del sitio.

### 3. Estructura semántica básica

- `<header>`: encabezado principal de la página (puede contener el título, logo o menú).
- `<main>`: contenido central del sitio (solo debe haber uno por documento).
- `<footer>`: información final o pie de página (autor, año, enlaces, etc.).

### 4. Anatomía de una etiqueta HTML

Una etiqueta HTML tiene una estructura definida que el navegador interpreta para mostrar contenido. Por ejemplo, una etiqueta que define un título de sección puede verse así:

**Partes que la componen:**

- **Etiqueta de apertura:**  
  Es la primera parte de la etiqueta. Inicia con `<` seguido del nombre del elemento (por ejemplo, `h1`) y puede incluir atributos (como `id` o `class`). Finaliza con `>`.

- **Contenido:**  
  Es lo que se muestra dentro de la etiqueta en la página, como un texto o incluso otras etiquetas anidadas.

- **Etiqueta de cierre:**  
  Se escribe igual que la de apertura, pero con una barra diagonal `/` antes del nombre del elemento. Indica dónde termina ese contenido.

**Resumen de la estructura:**

Una etiqueta con contenido suele seguir esta forma:

**<nombreDeEtiqueta atributo="valor">Contenido</nombreDeEtiqueta>**

**Nota:**  
Algunas etiquetas no tienen contenido y, por lo tanto, no tienen etiqueta de cierre. Son conocidas como *etiquetas vacías*, como por ejemplo:
- `br` (salto de línea)
- `img` (imagen)
- `hr` (línea horizontal)

---

**Atributos comunes en etiquetas:**

| Atributo | Para qué sirve                    | Ejemplo de uso                            |
|----------|-----------------------------------|-------------------------------------------|
| `id`     | Identificador único               | Distingue un elemento de los demás        |
| `class`  | Clasificación o grupo             | Se usa para aplicar estilos por grupo     |
| `src`    | Fuente de un recurso externo      | Imagen, video o archivo externo           |
| `alt`    | Texto alternativo para imágenes   | Se muestra si la imagen no carga          |
| `href`   | Enlace de destino                 | Se usa en enlaces `<a>`                   |

### 5. Etiquetas HTML comunes

A continuación, una lista de etiquetas básicas que pueden usarse dentro del `<body>`:

| Etiqueta       | Descripción                            |
|----------------|----------------------------------------|
| `<h1>` a `<h6>`| Encabezados, siendo `<h1>` el más importante |
| `<p>`          | Párrafo de texto                        |
| `<br>`         | Salto de línea                          |
| `<strong>`     | Texto en negrita con énfasis semántico  |
| `<em>`         | Texto en cursiva con énfasis semántico  |
| `<ul>`         | Lista desordenada (con viñetas)         |
| `<ol>`         | Lista ordenada (numerada)               |
| `<li>`         | Elemento de lista (dentro de `<ul>` o `<ol>`) |
| `<img>`        | Imagen. Usa los atributos `src` y `alt` |
| `<a>`          | Enlace. Usa el atributo `href`          |
| `<!-- -->`     | Comentario. No se muestra en el navegador |

---

### Ejemplo de código completo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primera página</title>
  </head>
  <body>
    <header>
      <h1>¡Hola, soy Valeria!</h1>
    </header>
    <main>
      <p>Esta es mi primera página web usando solo HTML.</p>
      <ul>
        <li>Me gusta la música</li>
        <li>Estudio diseño</li>
        <li>Quiero aprender programación web</li>
      </ul>
    </main>
    <footer>
      <p>Creado por Valeria Sánchez</p>
    </footer>
  </body>
</html>

```

---

## Actividad de la clase

**Escribir una receta sencilla en un archivo:**

- Usar la estructura mínima de una página HTML.
- Dentro del `<header>`, colocar un título para la receta usando `<h1>`.
- Investigar por su cuenta cómo agregar un subtítulo (por ejemplo, el tipo de platillo o una breve descripción).
- Dentro del `<main>`, escribir al menos 3 pasos de la receta, cada uno en su propio `<p>`.
- Agregar un `<footer>` con el nombre del "sitio de recetas" (inventado por cada equipo).

---

## Conceptos clave

- Toda página web debe tener `<!DOCTYPE html>`, `<html>`, `<head>`, y `<body>`.
- El contenido visible siempre va dentro del `<body>`.
- Las etiquetas semánticas ayudan a organizar mejor el contenido.
- HTML es un lenguaje de marcado, no de programación.

---

## Errores comunes

- No cerrar correctamente las etiquetas.
- Escribir contenido fuera del `<body>`.
- Olvidar usar `charset="UTF-8"` y tener problemas con caracteres.
- Usar múltiples `<main>` (solo debe haber uno).

---

## Recursos adicionales

- [MDN: Introducción a HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Validador de HTML - W3C](https://validator.w3.org/)
- [HTML Reference - DevDocs (en inglés)](https://devdocs.io/html/)
