# Tema: Box Model en CSS

## Objetivo de la sesión
Comprender cómo funciona el modelo de caja en CSS para controlar el espacio y el tamaño de los elementos en una página web.  

---

### 1. ¿Qué es el Box Model?
- Todo elemento en HTML se representa como una **caja** rectangular.  
- La caja está formada por:  
  - **Content:** el contenido (texto, imagen, etc.).  
  - **Padding:** espacio interno entre el contenido y el borde.  
  - **Border:** el borde que rodea la caja.  
  - **Margin:** espacio externo entre la caja y otros elementos.  

---

### 2. Propiedades principales
- `padding`: controla el espacio interno.  
- `border`: define el borde (ancho, estilo, color).  
- `margin`: controla el espacio externo.  
- `width` y `height`: tamaño del contenido.  
- `box-sizing`:  
  - `content-box` (por defecto, el tamaño solo incluye el contenido).  
  - `border-box` (el tamaño incluye padding y border).  

---

### 3. Ejemplos visuales
- Comparar dos cajas con el mismo `width` pero distintos `padding`.  
- Ver cómo un `margin` grande separa elementos entre sí.  
- Cambiar `box-sizing` y notar cómo afecta el tamaño real de la caja.  

---

## Actividad de la clase
1. Crear un archivo `box-model.html` y enlazar un CSS.  
2. Dibujar una caja con:  
   - Un color de fondo.  
   - Texto de ejemplo dentro.  
3. Usar CSS para aplicar:  
   - `padding` diferente en cada lado.  
   - `border` de distintos estilos (solid, dashed, dotted).  
   - `margin` para separar la caja del resto del contenido.  
4. Cambiar entre `content-box` y `border-box` y observar la diferencia en el tamaño.  

---

## Conceptos clave
- Todos los elementos en CSS se comportan como cajas.  
- `margin` controla el espacio externo, `padding` el espacio interno.  
- `box-sizing: border-box` simplifica cálculos de ancho/alto.  
- El modelo de caja es la base para construir layouts más complejos.  

---

## Errores comunes
- Confundir `margin` con `padding`.  
- No visualizar que `border` también ocupa espacio.  
- Olvidar usar `box-sizing: border-box` y terminar con cajas más grandes de lo esperado.  

---

## Recursos adicionales
- [MDN: Box Model](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)  
- [CSS Tricks: Box Model](https://css-tricks.com/the-css-box-model/)  
- [W3Schools: Box Model](https://www.w3schools.com/css/css_boxmodel.asp)  
