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
  <title>LCT1 WebDev - Semana 5</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <section>
      <section>
        <h2>Box Model en CSS</h2>
        <p>Todos los elementos en HTML son cajas</p>
        <p>Comprender el box model es la base para construir layouts.</p>
      </section>

      <section>
        <h2>Partes del Box Model</h2>
        <ul>
          <li><strong>Content</strong>: el texto o imagen</li>
          <li><strong>Padding</strong>: espacio interno</li>
          <li><strong>Border</strong>: el borde que rodea la caja</li>
          <li><strong>Margin</strong>: espacio externo</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplo simple</h2>
        <pre><code class="css"
            >div &#123;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 30px;
&#125;</code
          ></pre>
        <p><em>¿Qué tamaño ocupa realmente esta caja?</em></p>
      </section>

      <section>
        <h2>Padding</h2>
        <p>Agrega espacio dentro de la caja, alrededor del contenido.</p>
        <pre><code class="css"
            >.caja &#123;
  padding: 40px;
&#125;</code
          ></pre>
        <p><em>El texto se separa del borde</em></p>
      </section>

      <section>
        <h2>Margin</h2>
        <p>Agrega espacio afuera de la caja, separándola de otros elementos.</p>
        <pre><code class="css"
            >.caja &#123;
  margin: 50px;
&#125;</code
          ></pre>
        <p><em>La caja se aleja de las demás</em></p>
      </section>

      <section>
        <h2>Border</h2>
        <p>El borde rodea la caja y también ocupa espacio.</p>
        <pre><code class="css"
            >.caja &#123;
  border: 10px dashed red;
&#125;</code
          ></pre>
        <p><em>Prueba diferentes estilos: solid, dashed, dotted, double</em></p>
      </section>

      <section>
        <h2>Box-sizing</h2>
        <p>Define cómo se calcula el tamaño total de la caja.</p>
        <ul>
          <li>
            <code>content-box</code> (por defecto): width solo incluye el contenido
          </li>
          <li><code>border-box</code>: width incluye padding y border</li>
        </ul>
        <pre><code class="css"
            >.caja &#123;
  box-sizing: border-box;
&#125;</code
          ></pre>
      </section>

      <section>
        <h2>Ejemplo práctico</h2>
        <p>Dos cajas con el mismo <code>width: 200px</code></p>
        <ul>
          <li>Caja A: <code>content-box</code></li>
          <li>Caja B: <code>border-box</code></li>
        </ul>
        <p><em>¿Cuál ocupa más espacio?</em></p>
      </section>

      <section>
        <h2>Actividad en clase</h2>
        <ol>
          <li>Crear una caja con color de fondo.</li>
          <li>Agregar padding diferente en cada lado.</li>
          <li>Poner un border distinto en cada lado.</li>
          <li>Separar cajas con margin.</li>
          <li>Comparar <code>content-box</code> y <code>border-box</code>.</li>
        </ol>
      </section>

      <section>
        <h2>Errores comunes</h2>
        <ul>
          <li>Confundir <code>margin</code> con <code>padding</code>.</li>
          <li>No contar el espacio que ocupa el <code>border</code>.</li>
          <li>
            Olvidar <code>box-sizing: border-box</code> al calcular tamaños.
          </li>
        </ul>
      </section>

      <section>
        <h2>Reto adicional</h2>
        <p>Haz un card con:</p>
        <ul>
          <li>Un título y un párrafo</li>
          <li>Padding interno</li>
          <li>Border con estilo</li>
          <li>Margin que la separe de otras tarjetas</li>
        </ul>
      </section>
    </section>
    <section>
      <section>
        <h2>Introducción a Flexbox</h2>
        <p>Una forma moderna y flexible de organizar elementos en CSS.</p>
      </section>

      <section>
        <h2>Problema</h2>
        <p>
          Antes de Flexbox se usaban <code>float</code> o
          <code>inline-block</code>, pero eran difíciles de controlar.
        </p>
        <p><strong>Flexbox</strong> simplifica la alineación y distribución.</p>
      </section>

      <section>
        <h2>Activar Flexbox</h2>
        <pre><code class="css"
            >.contenedor &#123;
  display: flex;
&#125;</code
          ></pre>
        <p>Todos los hijos directos se convierten en <em>flex items</em>.</p>
      </section>

      <section>
        <h2>Dirección</h2>
        <p>Propiedad <code>flex-direction</code>:</p>
        <ul>
          <li><code>row</code> (por defecto): izquierda a derecha</li>
          <li><code>row-reverse</code>: derecha a izquierda</li>
          <li><code>column</code>: arriba a abajo</li>
          <li><code>column-reverse</code>: abajo a arriba</li>
        </ul>
      </section>

      <section>
        <h2>Distribución horizontal</h2>
        <p>Propiedad <code>justify-content</code>:</p>
        <ul>
          <li><code>flex-start</code> (por defecto)</li>
          <li><code>center</code></li>
          <li><code>flex-end</code></li>
          <li><code>space-between</code></li>
          <li><code>space-around</code></li>
          <li><code>space-evenly</code></li>
        </ul>
      </section>

      <section>
        <h2>Alineación vertical</h2>
        <p>Propiedad <code>align-items</code>:</p>
        <ul>
          <li><code>flex-start</code></li>
          <li><code>center</code></li>
          <li><code>flex-end</code></li>
          <li><code>stretch</code> (por defecto)</li>
          <li><code>baseline</code></li>
        </ul>
      </section>

      <section>
        <h2>Espacios entre items</h2>
        <p>Propiedad <code>gap</code>:</p>
        <pre><code class="css"
            >.contenedor &#123;
  display: flex;
  gap: 20px;
&#125;</code
          ></pre>
        <p><em>Más sencillo que usar margin</em></p>
      </section>

      <section>
        <h2>Ejemplo: menú horizontal</h2>
        <pre><code class="css"
            >nav &#123;
  display: flex;
  justify-content: space-around;
&#125;</code
          ></pre>
        <p><em>Los enlaces se reparten en todo el ancho</em></p>
      </section>

      <section>
        <h2>Ejemplo: galería simple</h2>
        <pre><code class="css"
            >.galeria &#123;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
&#125;

.galeria img &#123;
  width: 150px;
  height: 100px;
&#125;</code
          ></pre>
        <p><em>Las imágenes se organizan en filas</em></p>
      </section>

      <section>
        <h2>Actividad en clase</h2>
        <ol>
          <li>Crear un contenedor con 4 cajas dentro.</li>
          <li>Organizarlas en fila con <code>flex-direction: row</code>.</li>
          <li>Centrarlas horizontalmente con <code>justify-content</code>.</li>
          <li>Centrarlas verticalmente con <code>align-items</code>.</li>
          <li>Agregar espacio entre cajas con <code>gap</code>.</li>
        </ol>
      </section>

      <section>
        <h2>Errores comunes</h2>
        <ul>
          <li>Olvidar <code>display: flex</code> en el contenedor.</li>
          <li>
            Confundir <code>justify-content</code> (horizontal) con
            <code>align-items</code> (vertical).
          </li>
          <li>
            No usar <code>flex-wrap</code> y que los elementos se salgan de la pantalla.
          </li>
        </ul>
      </section>

      <section>
        <h2>Reto adicional 🎯</h2>
        <p>Haz una “tarjeta de perfil” con:</p>
        <ul>
          <li>Imagen a la izquierda</li>
          <li>Texto (nombre y descripción) a la derecha</li>
          <li>Usa <code>flex</code> para organizarlo</li>
        </ul>
      </section>
    </section>
  </div>
</div>
