# Tema: Selectores y propiedades en CSS

## Objetivo de la sesión
Aprender a usar selectores de etiquetas, clases e IDs en CSS, junto con propiedades comunes para dar estilo a un sitio web.

---

### 1. Selectores en CSS
- **Por etiqueta:** afecta a todos los elementos de ese tipo.  
  Ejemplo: `p { ... }` cambia todos los párrafos.  

- **Por clase (`.`):** afecta a todos los elementos con esa clase.  
  Ejemplo: `.noticia { ... }`.  

- **Por ID (`#`):** afecta a un único elemento con ese ID.  
  Ejemplo: `#principal { ... }`.  

---

### 2. Propiedades comunes
- **Colores:** `color`, `background-color`.  
- **Texto:** `font-family`, `font-size`, `font-weight`.  
- **Espaciado:** `margin`, `padding`.  
- **Cajas:** `border`, `border-radius`.  
- **Imágenes:** `width`, `height`, `max-width`.  

---

## Actividad de la clase

### Actividad semanal: Sitio de noticias

Crea un sitio con una página llamada **noticias.html** que muestre al menos **3 noticias**.

Cada noticia debe incluir:
- Un título  
- Dos párrafos  
- Una cita usando la etiqueta `<blockquote>`  
- Una imagen  

Usa un solo archivo **estilos.css** para dar formato a toda la página.

Los estilos deben incluir:
- Dos fuentes de Google diferentes: una para los títulos y otra para el contenido  
- Cajas con fondo blanco, bordes y esquinas redondeadas  
- Espaciado usando `margin` y `padding`  
- Imágenes ajustadas al ancho de la caja  

### Requisitos generales:
- La página debe tener un **título principal**  
- Debe enlazar a las diferentes noticias en la misma página  
- Todos los estilos deben estar en el archivo **estilos.css**  

---

## Conceptos clave
- Los selectores permiten elegir qué elementos se estilizan: etiqueta, clase o ID.  
- Las propiedades definen qué característica se cambia (color, tamaño, fuente, etc.).  
- Usar un archivo CSS externo mantiene el código más ordenado y reutilizable.  

---

## Errores comunes
- Olvidar enlazar el archivo `estilos.css` en el HTML.  
- Repetir IDs en más de un elemento.  
- No diferenciar entre `.` (clase) y `#` (ID).  

---

## Recursos adicionales
- [MDN: Selectores en CSS](https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors)  
- [MDN: Guía de propiedades CSS](https://developer.mozilla.org/es/docs/Web/CSS/Reference)  
- [freeCodeCamp: Curso básico de CSS (en español)](https://www.freecodecamp.org/espanol/learn/)  
