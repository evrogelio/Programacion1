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
  <title>LCT1 WebDev - Semana 2</title>
</svelte:head>

<div class="reveal">
  <div class="slides">

    <section>
      <h2>Estilos en HTML</h2>
    </section>
    <section>
      <h2>¿Qué es CSS?</h2>
      <p><strong>Cascading Style Sheets</strong> (Hojas de estilo en cascada)</p>
      <ul>
        <li>HTML → estructura del contenido</li>
        <li>CSS → apariencia y presentación</li>
      </ul>
    </section>

    <section>
      <h3>¿Cómo funciona un estilo inline?</h3>
      <p>Se usa el atributo <code>style</code> dentro de la etiqueta:</p>
      <pre><code class="language-html">
<p style="propiedad: valor;">Texto</p>
  </code></pre>
      <ul>
        <li><strong>style</strong> → atributo donde van los estilos</li>
        <li>
          <strong>propiedad</strong> → qué quieres cambiar (ej. color, tamaño)
        </li>
        <li><strong>valor</strong> → cómo quieres que se vea</li>
      </ul>
    </section>

    <section>
      <h3>Texto sin estilo</h3>
        <pre><code class="language-html">
<p>Hola, soy un párrafo</p>
    </code></pre>
        <div>
          <p>Hola, soy un párrafo</p>
        </div>
    </section>

    <section>
      <h3>Texto con estilo</h3>
        <pre><code class="language-html">
<p style="color: red;">Hola, soy un párrafo rojo</p>
    </code></pre>
        <div>
          <p style="color: red;">Hola, soy un párrafo rojo</p>
        </div>
    </section>

    <section>
      <h3>Propiedad: <code>color</code></h3>
        <pre><code class="language-html">
<p style="color: blue;">Texto azul</p>
<p style="color: green;">Texto verde</p>
    </code></pre>
        <div>
          <p style="color: blue;">Texto azul</p>
          <p style="color: green;">Texto verde</p>
        </div>
    </section>

    <section>
      <h3>Propiedad: <code>font-size</code></h3>
        <pre><code class="language-html">
<p style="font-size: 12px;">Texto pequeño</p>
<p style="font-size: 28px;">Texto grande</p>
    </code></pre>
        <div>
          <p style="font-size: 12px;">Texto pequeño</p>
          <p style="font-size: 28px;">Texto grande</p>
        </div>
    </section>

    <section>
      <h3>Propiedad: <code>font-family</code></h3>
        <pre><code class="language-html">
<p style="font-family: Arial;">Texto en Arial</p>
<p style="font-family: Courier New;">Texto en Courier New</p>
<p style="font-family: Times New Roman;">Texto en Times New Roman</p>
        </code></pre>
        <div>
          <p style="font-family: Arial;">Texto en Arial</p>
          <p style="font-family: Courier New;">Texto en Courier New</p>
          <p style="font-family: Times New Roman;">Texto en Times New Roman</p>
        </div>
    </section>


    <section>
      <h3>Propiedad: <code>background-color</code></h3>
      <pre><code class="language-html">
<p style="background-color: yellow;">
  Texto con fondo amarillo
</p>

<p style="background-color: lightblue;">
  Texto con fondo azul claro
</p>

<p style="background-color: lightgreen;">
  Texto con fondo verde claro
</p>
      </code></pre>

      <p style="background-color: yellow;">
        Texto con fondo amarillo
      </p>
      <p style="background-color: lightblue;">
        Texto con fondo azul claro
      </p>
      <p style="background-color: lightgreen;">
        Texto con fondo verde claro
      </p>
    </section>

    <section>
      <h3>Combinando estilos</h3>
      <pre><code class="language-html">
<p style="color: purple; 
          font-size: 48px; 
          font-family: Courier New; 
          background-color: lightyellow;">
  Texto morado, grande, con Courier y fondo amarillo claro
</p>
      </code></pre>

      <p style="color: purple; 
                font-size: 48px; 
                font-family: Courier New; 
                background-color: lightyellow;">
        Texto morado, grande, con Courier y fondo amarillo claro
      </p>
    </section>
    
    <section>
      <h2>Reto: crea tu póster</h2>
      <p>Crea <code>poster.html</code> con:</p>
      <ul>
        <li>Una imagen en la parte superior (elige cualquier imagen que puedas usar)</li>
        <li>Un título grande con el año</li>
        <li>Créditos en formato de líneas con <code>&lt;strong&gt;</code></li>
      </ul>

      <p><strong>Reto extra:</strong> experimenta con <code>background-color</code>, <code>font-family</code> y combinaciones de <code>color</code> y <code>font-size</code>.</p>

    </section>

    <!-- Slide 2: Inspiración (no usar esta imagen en el trabajo) -->
    <section>
      <div class="flex justify-center">

        <img src="/images/kikis.jpg" alt="Póster de inspiración - Kiki's Delivery Service" class="w-5/12">
      </div>
    </section>
  </div>
</div>
