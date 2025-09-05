# Tema: Tablas en HTML y personalización de VS Code

## Objetivo de la sesión
Aprender a crear tablas básicas en HTML para organizar información, y configurar Visual Studio Code para facilitar la escritura de código limpio y legible.

---

## Contenidos

### 1. Tablas en HTML

Las tablas permiten mostrar información organizada en filas y columnas.

**Etiquetas básicas:**
- `<table>`: contenedor de la tabla
- `<tr>`: fila de la tabla (table row)
- `<th>`: celda de encabezado (table header)
- `<td>`: celda de datos (table data)

**Estructura mínima:**

Una tabla simple tiene al menos:
- Una fila de encabezados (`<th>`)
- Una o más filas de datos (`<td>`)

---

### 2. Personalización de Visual Studio Code

#### Cambiar el tema del editor:
1. Abre la paleta de comandos (`Ctrl+Shift+P` o `F1`)
2. Escribe: `Preferences: Color Theme`
3. Prueba temas oscuros o claros (ej. GitHub Light, Monokai, Dracula)

#### Configurar formateo automático:
1. Instala la extensión **Prettier - Code formatter**
2. Abre configuración (`Ctrl + ,`)
3. Busca: `Format On Save` y actívalo
4. Asegúrate de que Prettier esté seleccionado como formatter por defecto

Con esto, el código HTML se indentará automáticamente y será más fácil de leer.

---

## Actividad de la clase

Agrega una tabla dentro de tu archivo `perfil.html` al final del `<main>`.

La tabla debe contener tus preferencias personales organizadas por tema. Usa las siguientes columnas:

- Tema
- Favorito
- No me gusta
- Me llama la atención

Y al menos las siguientes filas (temas):

- Música
- Videojuego
- Comida
- Libro o película

---

## Conceptos clave

- Las tablas no se usan para diseñar páginas, sino para mostrar datos estructurados.
- Cada fila se define con `<tr>`, cada celda con `<td>` y cada encabezado con `<th>`.
- Configurar el editor ayuda a escribir mejor y evita errores comunes de indentación.

---

## Errores comunes

- Usar `<td>` en lugar de `<th>` en la primera fila (encabezados).
- No cerrar bien las etiquetas de cada celda o fila.
- No alinear correctamente el contenido al escribir sin formateo.
- No guardar el archivo antes de previsualizar cambios.

---

## Recursos adicionales

- [MDN: Tablas en HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/table)
- [Extensión Prettier en Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Guía rápida para configurar VS Code](https://code.visualstudio.com/docs/getstarted/keybindings)
