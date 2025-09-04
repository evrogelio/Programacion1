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
  <title>Semana 1</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <section>
      <h2>Programación 1</h2>
      <p>Desarrollo Web</p>
    </section>

    <section>
      <h2>¡Bienvenidas y bienvenidos!</h2>
    </section>

    <section>
      <section>
        <h2>¿Quién es el profe?</h2>
      </section>
      <section class="!items-start !justify-start text-left">
        <h3 class="m-0">Rogelio Echavarría</h3>
        <div class="flex gap-8 mt-8 w-full">
          <ul class="flex-1 self-center">
            <li>26 años</li>
            <li>Desarrollador Fullstack @ Universidad Carolina</li>
            <li>Egresado de la Licenciatura en Creatividad Tecnológica</li>
          </ul>
          <img
            src="/images/rogelio.jpg"
            alt="Ejemplo"
            class="flex-1 w-1/2 aspect-square rounded-full object-cover mx-auto"
          />
        </div>
      </section>
      <section>
        <h3>Algo sobre mí</h3>
        <p>Desde pequeño he tenido interés por la programación</p>
        <br />
        <p>Lo que más he escuchado últimamente es:</p>
        <div class="flex">
          <div class="w-1/2 flex-col justify-items-center">
            <img src="/images/eia.webp" alt="even-in-arcadia" class="w-48" />
            <small>Even in Arcadia - Sleep Token</small>
          </div>
          <div class="w-1/2 flex-col justify-items-center">
            <img
              src="/images/no-es-que-no-te-quiera-pero.webp"
              alt="even-in-arcadia"
              class="w-48"
            />
            <small>No Es Que No Te Quiera Pero... - Serbia</small>
          </div>
        </div>
      </section>
      <section>
        <h2>¿Quiénes son los alumnos?</h2>
      </section>
    </section>

    <section>
      <section>
        <h2>Calendario y Evaluación</h2>
      </section>

      <section class="!items-start !justify-start text-left">
        <h3 class="m-0">Calendario</h3>
        <div class="flex gap-8 mt-8 w-full">
          <div class="w-1/3">
            <h5>Información General</h5>
            <ul>
              <li>14 Semanas</li>
              <li>3 parciales</li>
              <li>6 faltas Máximo</li>
            </ul>
          </div>
          <div class="w-2/3">
            <h5>Evaluaciones</h5>
            <ul>
              <li>Primer Parcial: 29 sep - 3 oct</li>
              <li>Segundo Parcial: 27 oct - 31 oct</li>
              <li>Tercer Parcial: 24 nov - 28 nov</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3>Evaluación Parcial</h3>
        <ul>
          <li>
            <span class="font-semibold">Tareas Semanales:</span> 40% (90% en Tercer
            Parcial)
          </li>
          <li>
            <span class="font-semibold">Proyecto:</span> 50% (No hay en Tercer Parcial)
          </li>
          <li><span class="font-semibold">Asistencia:</span> 10%</li>
        </ul>
      </section>
      <section>
        <h3>Evaluación Final</h3>
        <ul>
          <li><span class="font-semibold">Parcial 1:</span> 25%</li>
          <li><span class="font-semibold">Parcial 2:</span> 25%</li>
          <li><span class="font-semibold">Proyecto Final:</span> 25%</li>
          <li><span class="font-semibold">Brief:</span> 25%</li>
        </ul>
      </section>
    </section>
    <section>
      <section>
        <h2>¿Qué es la Web?</h2>
      </section>
      <section class="flex">
        <h2>La Web y el Internet</h2>
        <img
          src="/images/internet.webp"
          alt=""
          class="w-96 justify-self-center"
        />
      </section>

      <section class="flex">
        <h2>¿Cómo funciona la web?</h2>
        <img src="/images/HTTP.gif" alt="" class="w-full justify-self-center" />
      </section>
    </section>

    <section>
      <section>
        <h2>Instalar Visual Studio Code</h2>
        <ol>
          <li>
            Visita <a href="https://code.visualstudio.com/" target="_blank"
              >code.visualstudio.com</a
            >
          </li>
          <li>Descarga el instalador</li>
          <li>Ejecuta el instalador y sigue las instrucciones en pantalla.</li>
        </ol>
      </section>
      <section>
        <h2>Crea una Cuenta de Codepen</h2>
        <p>
          Visita <a href="https://codepen.io/" target="_blank">codepen.io</a>
        </p>
      </section>
    </section>

    <section>
      <section>
        <h2>&lt;h1&gt;Hola Mundo&lt;/h1&gt;</h2>
        <p>El esqueleto de una página web</p>
      </section>

      <section>
        <h2>Los lenguajes de la Web</h2>
        <div class="flex justify-around mt-8 text-center">
          <div class="w-1/3 flex justify-around flex-col items-center text-4xl">
            <h4>HTML</h4>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              width="120"
              class="mx-auto"
            />
            <ul>
              <li>¿Qué elementos hay?</li>
              <li>¿Cuál es la estructura?</li>
            </ul>
          </div>

          <div class="w-1/3 flex justify-around flex-col items-center text-4xl">
            <h4>CSS</h4>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              width="120"
              class="mx-auto"
            />
            <ul>
              <li>¿Cómo se ven los elementos?</li>
              <li>¿Cómo se adaptan a las pantallas?</li>
            </ul>
          </div>

          <div class="w-1/3 flex justify-around flex-col items-center text-4xl">
            <h4>JavaScript</h4>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="120"
              class="mx-auto"
            />
            <ul class="list-disc list-inside mt-4">
              <li>¿Qué interacciones hay?</li>
              <li>¿Hay elementos dinámicos?</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>¿Qué es HTML?</h2>
        <ul>
          <li>
            Es el lenguaje de marcado que estructura el contenido de una página
            web.
          </li>
          <li>
            Funciona a base de <strong>etiquetas</strong> que indican la función
            de cada parte del contenido.
          </li>
        </ul>
      </section>
      <section>
        <h3>Anatomía de una etiqueta</h3>

        <pre class="m-0 h-full">
          <code class="language-html h-min" data-line-numbers="1-3|1|2|3|1-3"
            ><h1 id="tituloPrincipal">
  Anatomía de una etiqueta
</h1>
          </code>
        </pre>
      </section>
      <section class="flex h-full">
        <h5>Lo esencial de una página</h5>
        <pre class="h-full">
          <code
            class="language-html h-min"
            data-line-numbers="1-18|1|2|3-6|4|5|3-6|7-17|8-10|9|11-13|12|14-16|15|1-18"
            >&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;title&gt;Un Gran Título&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
      &lt;h1&gt;¡Hola, mundo!&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;p&gt;Esta es mi primera página web&lt;/p&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;p&gt;Página hecha por Rogelio en 2025&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
          </code>
        </pre>
      </section>
      <section>
        <pre>
          <code class="language-html"><h1>Heading 1</h1></code>
        </pre>
        <div>
          <h1>Heading 1</h1>
        </div>
      </section>
      <section>
        <pre>
          <code class="language-html"
            >&lt;p&gt;Este es un párrafo de ejemplo.&lt;/p&gt;</code
          >
        </pre>
        <div>
          <p>Este es un párrafo de ejemplo.</p>
        </div>
      </section>
      <section>
        <pre>
          <code class="language-html"
            >&lt;p&gt;
  Primera línea de texto.&lt;br&gt;
  Segunda línea después del salto.
&lt;/p&gt;</code
          >
        </pre>
        <div>
          <p>
            Primera línea de texto.<br />
            Segunda línea después del salto.
          </p>
        </div>
      </section>
      <section>
        <h2>Ejercicio en grupos</h2>
        <ul>
          <li>Cada grupo debe crear una receta de algún platillo sencillo.</li>
          <li>
            Investiguen cómo agregar un subtítulo dentro del <code
              >&lt;header&gt;</code
            >.
          </li>
        </ul>
      </section>

      <section>
        <pre>
          <code class="language-html"
            >&lt;h1&gt;Título Principal&lt;/h1&gt;</code
          >
        </pre>
        <div>
          <h1>Título Principal</h1>
        </div>
      </section>

      <section>
        <pre>
          <code class="language-html">&lt;h3&gt;Subtítulo&lt;/h3&gt;</code>
        </pre>
        <div>
          <h3>Subtítulo</h3>
        </div>
      </section>

      <section>
        <pre>
          <code class="language-html"
            >&lt;h6&gt;Encabezado pequeño&lt;/h6&gt;</code
          >
        </pre>
        <div>
          <h6>Encabezado pequeño</h6>
        </div>
      </section>

      <section>
        <pre>
          <code class="language-html"
            >&lt;p&gt;El texto puede ser &lt;strong&gt;importante&lt;/strong&gt; o &lt;i&gt;en cursiva&lt;/i&gt;.&lt;/p&gt;</code
          >
        </pre>
        <div>
          <p>
            El texto puede ser <strong>importante</strong> o <i>en cursiva</i>.
          </p>
        </div>
      </section>

      <section>
        <pre>
          <code class="language-html"
            >&lt;ul&gt;
  &lt;li&gt;Elemento A&lt;/li&gt;
  &lt;li&gt;Elemento B&lt;/li&gt;
&lt;/ul&gt;
          </code>
        </pre>
        <div>
          <ul>
            <li>Elemento A</li>
            <li>Elemento B</li>
          </ul>
        </div>
      </section>

      <section>
        <pre>
          <code class="language-html"
            >&lt;ol&gt;
  &lt;li&gt;Primer paso&lt;/li&gt;
  &lt;li&gt;Segundo paso&lt;/li&gt;
&lt;/ol&gt;</code
          >
        </pre>
        <div>
          <ol>
            <li>Primer paso</li>
            <li>Segundo paso</li>
          </ol>
        </div>
      </section>

      <section class="flex flex-col justify-center justify-items-center">
        <pre>
          <code class="language-html"
            >&lt;img src="/images/mono.jpg" alt="Ejemplo de imagen"&gt;</code
          >
        </pre>
        <div>
          <img src="/images/mono.jpg" alt="Ejemplo de imagen" />
        </div>
      </section>
      <section>
        <h2>Actividad: Mi perfil personal</h2>
        <p>Crea una página web en HTML que muestre información sobre ti.</p>
        <ul>
          <li>Usa etiquetas básicas de contenido.</li>
          <li>
            Organiza la información usando <code>&lt;header&gt;</code>,
            <code>&lt;main&gt;</code>
            y <code>&lt;footer&gt;</code>.
          </li>
          <li>Incluye listas, párrafos, una imagen y títulos.</li>
        </ul>
      </section>

      <section>
        <h2>¿Qué debe incluir?</h2>
        <ul>
          <li><strong>Título</strong> y una frase o cita personal</li>
          <li>Un párrafo <code>&lt;p&gt;</code> sobre ti</li>
          <li>Una lista de intereses <code>&lt;ul&gt;</code></li>
          <li>Una lista de eventos o recuerdos <code>&lt;ol&gt;</code></li>
          <li>Una imagen representativa <code>&lt;img&gt;</code></li>
          <li>Pie de página con tu nombre <code>&lt;footer&gt;</code></li>
        </ul>
      </section>
    </section>
  </div>
</div>
