
<script lang="ts">
  import Reveal from "reveal.js";
  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/black.css";
  import '@catppuccin/highlightjs/css/catppuccin-frappe.css'
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
        <br>
        <p>Lo que más he escuchado últimamente es:</p>
        <div class="flex">
          <div class="w-1/2 flex-col justify-items-center">
            <img src="/images/eia.webp" alt="even-in-arcadia" class="w-48">
            <small>Even in Arcadia - Sleep Token</small>
          </div>
          <div class="w-1/2 flex-col justify-items-center">
            <img src="/images/no-es-que-no-te-quiera-pero.webp" alt="even-in-arcadia" class="w-48">
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
            <h5>
              Información General
            </h5>
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
          <li><span class="font-semibold">Tareas Semanales:</span> 40% (90% en Tercer Parcial)</li>
          <li><span class="font-semibold">Proyecto:</span> 50% (No hay en Tercer Parcial)</li>
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
        <img src="/images/internet.webp" alt="" class="w-96 justify-self-center">
      </section>

      <section class="flex">
        <h2>¿Cómo funciona la web?</h2>
        <img src="/images/HTTP.gif" alt="" class="w-full justify-self-center">
      </section>
    </section>

    <section>
      <section>
        <h2>HTML</h2>
        <p>Hyper Text Markup Language</p>
      </section>
      <section class="flex">
        <h2>HTML</h2>
        <pre>
          <code class="language-html" data-line-numbers="1-8|2|3-7|1-8" data-ln-start-from="91">            <div class="w-2/3">
              <h5>Evaluaciones</h5>
              <ul>
                <li>Primer Parcial: 29 sep - 3 oct</li>
                <li>Segundo Parcial: 27 oct - 31 oct</li>
                <li>Tercer Parcial: 24 nov - 28 nov</li>
              </ul>
            </div>
          </code>
        </pre> 
      </section>
    </section>
    <section>
      <h2>Instalar Visual Studio Code</h2>
      <ol>
        <li>Visita <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a></li>
        <li>Descarga el instalador</li>
        <li>Ejecuta el instalador y sigue las instrucciones en pantalla.</li>
      </ol>
    </section>
    <section>
      <h2>Hola Mundo</h2>
      <p>Mi primera Página</p>
    </section>
  </div>
</div>
