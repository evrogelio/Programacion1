# Tema: Display, posicionamiento y Flexbox

## Objetivo de la sesión
Comprender cómo controlar la forma en que los elementos se muestran en la página, su posición y cómo crear diseños flexibles usando Flexbox.

---

### 1. Propiedad `display`
- Define **cómo se comporta un elemento en el flujo del documento**.  
- Valores más comunes:  
  - `block`: ocupa todo el ancho disponible (ej. `<div>`, `<p>`).  
  - `inline`: ocupa solo el ancho de su contenido (ej. `<span>`, `<a>`).  
  - `inline-block`: se comporta como `inline` pero permite modificar alto y ancho.  
  - `none`: oculta el elemento completamente.  

**Ejemplo:**
```html
<p style="display: inline;">Este párrafo se mostrará en línea.</p>
<p style="display: block;">Este párrafo ocupará todo el ancho.</p>
````

---

### 2. Posicionamiento en CSS

Permite mover los elementos dentro de la página sin alterar el flujo normal.

* `position: static;` → valor por defecto.
* `position: relative;` → se puede mover respecto a su posición original.
* `position: absolute;` → se posiciona respecto al primer contenedor con posición distinta a `static`.
* `position: fixed;` → se mantiene fijo en la pantalla (ej. menús o barras).
* `position: sticky;` → se comporta como relativo hasta que se “pega” al hacer scroll.

**Propiedades complementarias:**
`top`, `right`, `bottom`, `left` determinan el desplazamiento.

**Ejemplo:**

```css
.caja {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

---

### 3. Introducción a Flexbox

Flexbox permite **organizar y alinear elementos fácilmente** en filas o columnas, adaptándose al espacio disponible.

**Configuración básica:**

```css
.contenedor {
  display: flex;
}
```

**Dirección y alineación:**

* `flex-direction`: define el eje principal (`row` o `column`).
* `justify-content`: alinea los elementos horizontalmente (`flex-start`, `center`, `space-between`, etc.).
* `align-items`: alinea verticalmente (`flex-start`, `center`, `stretch`, etc.).

**Ejemplo:**

```css
.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
```

---

## Actividad de la clase

1. Crear un archivo `layout.html` enlazado a un CSS.
2. Probar los diferentes valores de `display` (`block`, `inline`, `inline-block`).
3. Crear tres cajas de colores y posicionarlas usando:

   * `relative`
   * `absolute`
   * `fixed`
4. Crear una sección con `display: flex;` que contenga tres tarjetas (divs).

   * Cambiar `flex-direction` entre `row` y `column`.
   * Usar `justify-content` y `align-items` para distribuirlas.
5. Experimentar combinando Flexbox con `margin` y `padding` del modelo de caja.

---

## Conceptos clave

* `display` define el **comportamiento básico** de los elementos.
* `position` permite **mover elementos** dentro del documento.
* `Flexbox` facilita **diseños adaptables** y alineación sencilla.
* El uso combinado de estas propiedades es esencial para crear layouts modernos.

---

## Errores comunes

* Usar `position: absolute` sin comprender su contenedor de referencia.
* Confundir `inline-block` con `block` o `inline`.
* Olvidar agregar `display: flex` antes de aplicar propiedades de Flexbox.

---

## Recursos adicionales

* [MDN: Display](https://developer.mozilla.org/es/docs/Web/CSS/display)
* [MDN: Position](https://developer.mozilla.org/es/docs/Web/CSS/position)
* [Guía completa de Flexbox – CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy (juego interactivo)](https://flexboxfroggy.com/#es)

