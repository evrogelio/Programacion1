# Tema: Formularios en HTML

## Objetivo de la sesión
Conocer qué es un formulario en HTML, aprender a crear entradas básicas (texto, correo, opciones, botones) y probar cómo se envían los datos usando una herramienta externa.

---

## 1. ¿Qué es un formulario?
- Es una sección de la página que permite al usuario **ingresar información**.  
- Esa información se envía a un **servidor** para ser procesada.  
- Se define con la etiqueta `<form>`.

---

## 2. Elementos principales de un formulario
- **`<input>`**: cajas de texto, contraseñas, correos, etc.  
- **`<textarea>`**: área de texto más grande.  
- **`<select>` y `<option>`**: listas desplegables.  
- **`<button>` o `<input type="submit">`**: envían la información.  

---

## 3. Cómo probar formularios sin backend propio
Existen servicios gratuitos que permiten enviar la información y verla fácilmente:

- [Formspree](https://formspree.io/)  
- [FormSubmit](https://formsubmit.co/)  
- [GetForm](https://getform.io/)  

Funcionan de esta forma:  
1. Se pone la URL del servicio en el atributo `action` del formulario.  
2. Al hacer clic en "Enviar", la información se manda y puedes verla en tu correo o en una página de confirmación.

---

## 4. Actividad de la clase
1. Crear un archivo `formulario.html`.  
2. Agregar un formulario con:  
   - Nombre completo  
   - Correo electrónico  
   - Una lista desplegable con opciones (ej: "Interesado en: Cursos, Talleres, Charlas").  
   - Un botón para enviar.  
3. Usar **FormSubmit** para enviar sus respuestas a un correo de prueba del profesor.  

---

## Conceptos clave
- `<form>` define el inicio y fin del formulario.  
- Cada `<input>` necesita un atributo `name`, que es la clave de la respuesta.  
- El atributo `method="POST"` se usa normalmente para enviar datos.  
- Los formularios se pueden probar sin necesidad de CSS, JS o servidor propio.  

---

## Errores comunes
- Olvidar el atributo `name` en los inputs (entonces no se envían los datos).  
- No poner el `action` en el formulario (no se sabe a dónde van los datos).  
- Poner `<button>` sin `type="submit"` (no enviará el formulario en algunos casos).  

---

## Recursos adicionales
- [MDN: `<form>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/form)  
- [FormSubmit: sitio oficial](https://formsubmit.co/)  
- [Formspree: sitio oficial](https://formspree.io/)  
