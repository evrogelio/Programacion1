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
  <title>LCT1 WebDev - Semana 3</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <section>
      <h2>De Inline a reglas CSS</h2>
      <p>
        Hasta ahora usamos <code>style=""</code> para dar color, fondo o tamaño.
      </p>
      <p>
        ¿Qué pasa si quiero el <strong>mismo estilo</strong> en muchos
        <code>&lt;h1&gt;</code>?
      </p>
    </section>

    <section>
      <h2>Problema con Inline</h2>
      <pre>
    <code class="language-html">
&lt;h1 style="color: red;"&gt;Título 1&lt;/h1&gt;
&lt;h1 style="color: red;"&gt;Título 2&lt;/h1&gt;
&lt;h1 style="color: red;"&gt;Título 3&lt;/h1&gt;
    </code>
  </pre>
      <p>
        Repetir el mismo estilo en cada etiqueta se vuelve <strong
          >poco práctico</strong
        >.
      </p>
    </section>

    <section>
      <h2>Solución: usar &lt;style&gt;</h2>
      <p>
        Podemos escribir una regla para todos los <code>&lt;h1&gt;</code>.
      </p>
      <pre>
    <code class="language-html">
&lt;head&gt;
  &lt;style&gt;
    h1 &#123;
      color: red;
    &#125;
  &lt;/style&gt;
&lt;/head&gt;
    </code>
  </pre>
    </section>

    <section>
      <h2>Ventaja</h2>
      <p>
        Con una sola regla, todos los <code>&lt;h1&gt;</code> cambian de estilo.
      </p>
      <pre>
    <code class="language-html">
&lt;h1&gt;Título 1&lt;/h1&gt;
&lt;h1&gt;Título 2&lt;/h1&gt;
&lt;h1&gt;Título 3&lt;/h1&gt;
    </code>
  </pre>
    </section>

    <section>
      <h2>Actividad rápida</h2>
      <p>
        Crea un archivo <code>actividad.html</code> y escribe:
      </p>
      <ul>
        <li>3 títulos con <code>&lt;h1&gt;</code></li>
        <li>3 párrafos con <code>&lt;p&gt;</code></li>
        <li>3 elementos de lista <code>&lt;li&gt;</code></li>
      </ul>
      <p>
        Dentro de <code>&lt;style&gt;</code>, aplica:
      </p>
      <ul>
        <li><code>h1</code> → color rojo</li>
        <li><code>p</code> → fondo amarillo</li>
        <li><code>li</code> → tamaño de letra 20px</li>
      </ul>
      <p><em>Tiempo: 10 minutos</em></p>
    </section>

    <section>
      <h2>Reto extra (opcional)</h2>
      <ul>
        <li>Cambiar el <strong>fondo de toda la página</strong></li>
        <li><strong>Centrar el texto</strong> de los elementos</li>
      </ul>
      <p>
        <em
          >Pista: investiga cómo se escribe la regla para
          <code>&lt;body&gt;</code> y qué propiedad alinea texto.</em
        >
      </p>
    </section>

    <section>
      <h2>Repetición otra vez</h2>
      <pre>
    <code class="language-html">
&lt;!-- index.html --&gt;
&lt;head&gt;
  &lt;style&gt;
    h1 &#123;
      color: red;
    &#125;
  &lt;/style&gt;
&lt;/head&gt;

&lt;!-- about.html --&gt;
&lt;head&gt;
  &lt;style&gt;
    h1 &#123;
      color: red;
    &#125;
  &lt;/style&gt;
&lt;/head&gt;
    </code>
  </pre>
      <p>Estamos repitiendo las mismas reglas en cada archivo.</p>
    </section>

    <section>
      <h2>Solución: archivo externo</h2>
      <p>
        Guardamos los estilos en un archivo <code>estilos.css</code>.
      </p>
      <pre>
    <code class="language-css">
h1 &#123;
  color: red;
&#125;
    </code>
  </pre>
    </section>

    <section>
      <h2>Enlazando CSS externo</h2>
      <p>En cada HTML solo añadimos:</p>
      <pre>
    <code class="language-html">
&lt;link rel="stylesheet" href="estilos.css"&gt;
    </code>
  </pre>
      <p>
        Ahora <strong>todos los documentos</strong> comparten la misma hoja de estilos.
      </p>
    </section>

    <section>
      <h2>Ventaja</h2>
      <ul>
        <li>El código es más limpio.</li>
        <li>Si cambias un estilo, se actualiza en todas las páginas.</li>
        <li>
          El navegador puede <strong>guardar en caché</strong> el archivo CSS.
        </li>
      </ul>
    </section>

    <section>
      <h2>Profundizando en estilos</h2>
      <p>
        No solo se puede aplicar a <code>&lt;h1&gt;</code>.<br />
        También podemos crear reglas para:
      </p>
      <ul>
        <li>
          Todas las etiquetas de un tipo (ej. <code>p</code>, <code>h2</code>)
        </li>
        <li>Un grupo específico de elementos (clases)</li>
        <li>Un elemento único (ID)</li>
      </ul>
    </section>

    <section>
      <h2>Ejemplo con clase</h2>
      <pre>
    <code class="language-html">
&lt;p class="destacado"&gt;Texto resaltado&lt;/p&gt;
    </code>
  </pre>
      <pre>
    <code class="language-css">
.destacado &#123;
  font-weight: bold;
  color: orange;
&#125;
    </code>
  </pre>
    </section>

    <section>
      <h2>Ejemplo con ID</h2>
      <pre>
    <code class="language-html">
&lt;h1 id="titulo"&gt;Soy único&lt;/h1&gt;
    </code>
  </pre>
      <pre>
    <code class="language-css">
#titulo &#123;
  font-size: 32px;
&#125;
    </code>
  </pre>
    </section>
    <section>
      <h2>Usar fuentes de Google</h2>
      <p>
        Podemos importar tipografías desde <a href="https://fonts.google.com"
          >Google Fonts</a
        >.
      </p>
      <pre>
    <code class="language-html">
&lt;head&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap" rel="stylesheet"&gt;
&lt;/head&gt;
    </code>
  </pre>
      <pre>
    <code class="language-css">
h1 &#123;
  font-family: 'Pacifico', cursive;
&#125;
    </code>
  </pre>
    </section>

    <section>
      <h2>Margin</h2>
      <p>Es el espacio <strong>afuera</strong> de un elemento.</p>
      <pre>
    <code class="language-css">
p &#123;
  margin: 20px;
&#125;
    </code>
  </pre>
      <p><em>Ejemplo: separa el párrafo de otros elementos alrededor.</em></p>
    </section>

    <section>
      <h2>Padding</h2>
      <p>
        Es el espacio <strong>interno</strong> entre el contenido y el borde.
      </p>
      <pre>
    <code class="language-css">
p &#123;
  padding: 15px;
  background-color: lightgray;
&#125;
    </code>
  </pre>
      <p><em>Ejemplo: el texto no pega al borde, tiene espacio dentro.</em></p>
    </section>

    <section>
      <h2>Border</h2>
      <p>Podemos dar borde a las cajas.</p>
      <pre>
    <code class="language-css">
div &#123;
  border: 2px solid blue;
&#125;
    </code>
  </pre>
      <p><em>Ejemplo: un cuadro con borde azul de 2px.</em></p>
    </section>

    <section>
      <h2>Border Radius</h2>
      <p>Sirve para redondear bordes.</p>
      <pre>
    <code class="language-css">
div &#123;
  border: 2px solid red;
  border-radius: 15px;
&#125;

img &#123;
  border-radius: 50%;
&#125;
    </code>
  </pre>
      <p><em>Ejemplo: esquinas redondeadas o imágenes circulares.</em></p>
    </section>

    <section>
      <h2>Width y Height</h2>
      <p>Controlan ancho y alto de un elemento.</p>
      <pre>
    <code class="language-css">
div.px &#123;
  width: 200px;
  height: 100px;
  background: lightblue;
&#125;

div.porcentaje &#123;
  width: 50%;
  height: 150px;
  background: lightgreen;
&#125;

div.relativo &#123;
  width: 20em;
  height: 10em;
  background: pink;
&#125;
    </code>
  </pre>
      <p><em>Ejemplo: tamaños con px, %, em.</em></p>
    </section>
    <section>
      <h2>¿Qué es un &lt;div&gt;?</h2>
      <p>
        La etiqueta <code>&lt;div&gt;</code> se usa para
        <strong>agrupar contenido</strong>.
      </p>
      <p>
        Es un <strong>contenedor genérico</strong>, no tiene significado por sí
        mismo.
      </p>
      <p>Sirve para organizar y aplicar estilos a varios elementos juntos.</p>
    </section>
    <section>
      <h2>&lt;div&gt; como contenedor</h2>
      <div
        style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;"
      >
        <pre class="h-full">
      <code class="language-html">
&lt;div class="card"&gt;
  &lt;img src="https://picsum.photos/200" alt="Imagen"&gt;
  &lt;h3&gt;Título del card&lt;/h3&gt;
  &lt;p&gt;Una breve descripción dentro de la tarjeta.&lt;/p&gt;
&lt;/div&gt;
      </code>
    </pre>
        <div
          style="border:1px solid #ccc; border-radius:8px; background:#f9f9f9; padding:10px; width:200px; text-align:center;"
        >
          <img
            src="https://picsum.photos/200"
            alt="Imagen"
            style="border-radius:8px; max-width:100%;"
          />
          <strong style="margin:10px 0 5px; color: black;"
            >Título del card</strong
          >
          <p style="font-size:14px; color:#555;">
            Una breve descripción dentro de la tarjeta.
          </p>
        </div>
      </div>
      <p><em>El &lt;div&gt; agrupa y da estilo al card completo.</em></p>
    </section>
    <section>
      <h2>Actividad semanal: Sitio de noticias</h2>
      <p>
        Crea un sitio con una página <code>noticias.html</code> que muestre al
        menos
        <strong>3 noticias</strong>.
      </p>
      <ul>
        <li>Cada noticia debe tener:</li>
        <ul>
          <li>Un título</li>
          <li>Dos párrafos</li>
          <li>Una cita (&lt;blockquote&gt;)</li>
          <li>Una imagen</li>
        </ul>
      </ul>
    </section>

    <section>
      <h2>Estructura básica</h2>
      <p>
        La página debe incluir un título principal, enlaces a las noticias y el
        archivo de estilos compartido <code>estilos.css</code>.
      </p>
      <p>
        Importa <strong>dos fuentes de Google</strong>, una para los títulos y
        otra para el contenido.
      </p>
    </section>

    <section>
      <h2>Ejemplo de una noticia</h2>
      <ul>
        <li>Título de la noticia</li>
        <li>Imagen representativa</li>
        <li>Dos párrafos con texto</li>
        <li>Una cita o frase destacada con <code>&lt;blockquote&gt;</code></li>
      </ul>
    </section>

    <section>
      <h2>Estilos en CSS</h2>
      <p>
        Usa un solo archivo <code>estilos.css</code> para dar formato a toda la página.
      </p>
    </section>

    <section>
      <h2>Requisitos</h2>
      <ul>
        <li>Una página <code>noticias.html</code></li>
        <li>Al menos <strong>3 noticias</strong></li>
        <li>Cada noticia con al menos título, 2 párrafos, cita y una imagen</li>
        <li>Todos los estilos en <code>estilos.css</code> compartido</li>
        <li>Usar <strong>2 fuentes de Google</strong> diferentes</li>
      </ul>
    </section>
  </div>
</div>
