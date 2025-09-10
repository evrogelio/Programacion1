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
      <p>
        <strong>Cascading Style Sheets</strong> (Hojas de estilo en cascada)
      </p>
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

      <p style="background-color: yellow;">Texto con fondo amarillo</p>
      <p style="background-color: lightblue;">Texto con fondo azul claro</p>
      <p style="background-color: lightgreen;">Texto con fondo verde claro</p>
    </section>

    <section>
      <h3>Combinando estilos</h3>
      <pre><code class="language-html">
<p
            style="color: purple; 
          font-size: 48px; 
          font-family: Courier New; 
          background-color: lightyellow;">
  Texto morado, grande, con Courier y fondo amarillo claro
</p>
      </code></pre>

      <p
        style="color: purple; 
                font-size: 48px; 
                font-family: Courier New; 
                background-color: lightyellow;"
      >
        Texto morado, grande, con Courier y fondo amarillo claro
      </p>
    </section>

    <section>
      <h2>Reto: crea tu póster</h2>
      <p>Crea <code>poster.html</code> con:</p>
      <ul>
        <li>
          Una imagen en la parte superior (elige cualquier imagen que puedas
          usar)
        </li>
        <li>Un título grande con el año</li>
        <li>Créditos en formato de líneas con <code>&lt;strong&gt;</code></li>
      </ul>

      <p>
        <strong>Reto extra:</strong> experimenta con
        <code>background-color</code>, <code>font-family</code> y combinaciones
        de <code>color</code> y <code>font-size</code>.
      </p>
    </section>

    <!-- Slide 2: Inspiración (no usar esta imagen en el trabajo) -->
    <section>
      <div class="flex justify-center">
        <img
          src="/images/kikis.jpg"
          alt="Póster de inspiración - Kiki's Delivery Service"
          class="w-5/12"
        />
      </div>
    </section>
    <section>
      <h2>Enlaces en HTML</h2>
      <p>La etiqueta <code>&lt;a&gt;</code> permite crear hipervínculos.</p>
      <p>Se usa para conectar páginas, archivos o secciones.</p>
    </section>

    <section>
      <h2>Ejemplo básico</h2>
      <pre><code class="language-html">
    <a href="https://google.com">Visita mi sitio</a>
      </code></pre>
      <p>Resultado:</p>
      <a href="https://google.com" target="_blank">Visita Google</a>
    </section>

    <section>
      <h2>Enlaces internos</h2>
      <pre><code class="language-html">
    <a href="contacto.html">Ir a contacto</a>
      </code></pre>
      <p>Útil para navegar entre archivos HTML dentro de tu proyecto.</p>
    </section>

    <section>
      <h2>Enlaces a secciones de la misma página</h2>
      <pre><code class="language-html">
    <a href="#sobre-mi">Ir a Sobre mí</a>

    <!-- En algún lugar de la página -->
    <h2 id="sobre-mi">Sobre mí</h2>
      </code></pre>
      <p>Usa <code>id</code> para identificar la sección destino.</p>
    </section>

    <section>
      <h2>Enlace que abre en nueva pestaña</h2>
      <pre><code class="language-html">
    <a href="https://developer.mozilla.org" target="_blank">
      Leer documentación
    </a>
      </code></pre>
    </section>

    <section>
      <h2>Enlace para descargar archivo</h2>
      <pre><code class="language-html">
    <a href="documento.pdf" download>Descargar PDF</a>
      </code></pre>
      <p>El navegador iniciará la descarga del archivo.</p>
    </section>
    <section>
      <h2>¿Qué puede ser un enlace?</h2>
      <p>En HTML, casi cualquier elemento puede ser parte de un enlace.</p>
      <p>Solo necesitas envolverlo con la etiqueta <code>&lt;a&gt;</code>.</p>
    </section>

    <section>
      <h2>Imagen como enlace</h2>
      <pre><code class="language-html">
    <a href="https://ejemplo.com">
      <img src="logo.png" alt="Ir al sitio" />
    </a>
      </code></pre>
      <p>Al hacer clic en la imagen, te lleva al enlace.</p>
    </section>

    <section>
      <h2>Título como enlace</h2>
      <pre><code class="language-html">
    <a href="https://sitio.com">
      <h2>Visita mi página</h2>
    </a>
      </code></pre>
      <p>También puedes convertir un título en enlace.</p>
    </section>

    <section>
      <h2>Párrafo como enlace</h2>
      <pre><code class="language-html">
    <a href="contacto.html">
      <p>Contáctame aquí</p>
    </a>
      </code></pre>
      <p>Todo el párrafo será clicable.</p>
    </section>

    <section>
      <h2>Elemento de lista como enlace</h2>
      <pre><code class="language-html">
    <ul>
      <li><a href="video.html">Ver video</a></li>
    </ul>
      </code></pre>
      <p>Enlaces también pueden estar dentro de listas.</p>
    </section>
    <section>
      <h2>Resumen</h2>
      <ul>
        <li><code>href</code>: define el destino del enlace</li>
        <li><code>target="_blank"</code>: abre en nueva pestaña</li>
        <li><code>download</code>: intenta descargar el recurso</li>
        <li>Se puede enlazar a otras páginas, archivos o secciones</li>
      </ul>
    </section>
    <section>
      <h2>Actividad: Sitio de empresa</h2>
      <p>
        Crea un sitio web como si representaras una empresa (real o inventada).
      </p>

      <ul class="text-4xl">
        <li>Debe contener <strong>al menos 3 páginas</strong> distintas:</li>
        <ul>
          <li>Home</li>
          <li>Acerca de nosotros</li>
          <li>Productos o servicios</li>
          <li>Noticias o blog (opcional)</li>
          <li>Otra página creativa (opcional)</li>
        </ul>
        <li>Cada página debe tener <strong>enlaces a las demás</strong></li>
      </ul>

      <p>Todo debe estar conectado con <code>&lt;a href="..."&gt;</code></p>
    </section>
    <section>
      <h2>Organización sugerida del sitio</h2>
      <pre><code class="language-bash">
    /mi-empresa/
    ├── index.html             # Página principal (Home)
    ├── acerca.html            # Acerca de nosotros
    ├── productos.html         # Productos o servicios
    ├── noticias.html          # Noticias o blog (opcional)
    └── img/
        └── logo.png           # Imágenes del sitio
      </code></pre>

      <p>
        Asegúrate de que los <code>&lt;a href="..."&gt;</code> apunten a rutas correctas.
      </p>
      <p>Usa nombres simples, sin espacios ni tildes.</p>
    </section>
  </div>
</div>
