<script lang="ts">
  import Reveal from "reveal.js";
  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import "@catppuccin/highlightjs/css/catppuccin-frappe.css";
  import { onMount } from "svelte";
  import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";

  let deck: Reveal.Api;

  onMount(() => {
    deck = new Reveal({
      hash: true,
      plugins: [RevealHighlight],
    });
    deck.initialize();

    return () => deck?.destroy();
  });
</script>

<svelte:head>
  <title>LCT1 WebDev - Semana 6</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <section>
      <section>
        <h1>JavaScript: Sintaxis básica y variables</h1>
        <p>
          Primera introducción a la lógica del lenguaje que da vida a la web.
        </p>
      </section>

      <section>
        <h2>¿Qué es JavaScript?</h2>
        <ul>
          <li>
            Lenguaje que permite agregar <strong>interactividad</strong> a la web.
          </li>
          <li>Se ejecuta directamente en el navegador.</li>
          <li>Puede leer, modificar y reaccionar al contenido del HTML.</li>
        </ul>
        <pre><code class="language-html">
&lt;script src="main.js"&gt;&lt;/script&gt;
  </code></pre>
      </section>

      <section>
        <h2>Primer script</h2>
        <p>Podemos escribir JavaScript directamente dentro de un HTML:</p>
        <pre><code class="language-html">
&lt;script&gt;
  console.log("Hola, mundo!");
&lt;/script&gt;
  </code></pre>
        <p>Abre la consola del navegador y observa el resultado.</p>
      </section>

      <section>
        <h2>Reglas básicas de sintaxis</h2>
        <ul>
          <li>Las instrucciones se ejecutan de arriba a abajo.</li>
          <li>Se puede usar <code>;</code> al final de cada línea.</li>
          <li>Los comentarios ayudan a explicar el código:</li>
        </ul>
        <pre><code class="language-js">
// Comentario de una línea
/* Comentario
   de varias líneas */
  </code></pre>
      </section>

      <section>
        <h2>Variables</h2>
        <p>Permiten guardar valores para usarlos después.</p>
        <pre><code class="language-js">
let nombre = "Ana";
const edad = 21;

console.log(nombre);
console.log(edad);
  </code></pre>
        <p>
          <strong>Pregunta:</strong> ¿Qué pasa si intentas cambiar una constante?
        </p>
      </section>

      <section>
        <h2>Tipos de datos básicos</h2>
        <ul>
          <li><code>String</code> → texto: "Hola"</li>
          <li><code>Number</code> → números: 10, 3.14</li>
          <li><code>Boolean</code> → true / false</li>
          <li><code>Undefined</code> → sin valor asignado</li>
          <li><code>Null</code> → valor vacío intencional</li>
        </ul>
        <p>Prueba esto en consola:</p>
        <pre><code class="language-js">
typeof "Hola"
typeof 42
typeof true
  </code></pre>
      </section>

      <section>
        <h2>Ejemplo: combinando tipos</h2>
        <pre><code class="language-js">
let nombre = "Lucía";
let edad = 18;
let estudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?", estudiante);
  </code></pre>
      </section>

      <section>
        <h2>Interacción básica</h2>
        <p>El navegador puede pedir datos al usuario:</p>
        <pre><code class="language-js">
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);
  </code></pre>
        <p>Todo lo que devuelve <code>prompt()</code> es texto.</p>
      </section>

      <section>
        <h2>Actividad rápida</h2>
        <ol>
          <li>
            Declara una variable <code>nombre</code> y otra <code>edad</code>.
          </li>
          <li>Muestra en consola un mensaje usando ambas.</li>
          <li>Cambia el valor de <code>edad</code> y ejecuta otra vez.</li>
        </ol>
        <p>Observa cómo los valores cambian dinámicamente.</p>
      </section>
    </section>
  </div>
</div>
