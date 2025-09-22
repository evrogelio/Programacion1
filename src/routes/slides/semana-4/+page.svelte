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
      <h1>¿Qué es Git y GitHub?</h1>
    </section>

    <section>
      <h2>¿Qué es un sistema de control de versiones?</h2>
      <ul>
        <li>Guarda el historial de cambios en un proyecto</li>
        <li>Evita tener múltiples versiones del mismo archivo</li>
        <li>Permite regresar a estados anteriores</li>
        <li>Facilita el trabajo en equipo</li>
      </ul>
    </section>

    <section>
      <h2>Git vs GitHub</h2>
      <ul>
        <li><strong>Git</strong>: herramienta local de control de versiones</li>
        <li>
          <strong>GitHub</strong>: plataforma en línea para guardar y compartir
          proyectos
        </li>
        <li>GitHub usa Git para colaborar en la nube</li>
      </ul>
    </section>

    <section>
      <h2>GitHub Desktop</h2>
      <ul>
        <li>Aplicación gráfica para usar Git sin la terminal</li>
        <li>Funciones principales:</li>
        <ul>
          <li>Crear repositorios</li>
          <li>Hacer commits</li>
          <li>Publicar proyectos en GitHub</li>
        </ul>
      </ul>
    </section>

    <section>
      <h2>Actividad: Crear cuenta en GitHub</h2>
      <ol>
        <li>Ir a <a href="https://github.com">github.com</a></li>
        <li>Registrarse con correo y contraseña</li>
        <li>Confirmar cuenta desde el correo</li>
        <li>Iniciar sesión en GitHub Desktop</li>
      </ol>
    </section>

    <section>
      <h2>Actividad: Primer repositorio</h2>
      <ol>
        <li>Abrir un proyecto HTML existente</li>
        <li>Crear un repositorio local en GitHub Desktop</li>
        <li>Escribir un mensaje de commit descriptivo</li>
        <li>Guardar el primer cambio en el historial</li>
      </ol>
    </section>

    <section>
      <h2>Conceptos clave</h2>
      <ul>
        <li>Git = control de versiones en tu computadora</li>
        <li>GitHub = la nube para guardar y colaborar</li>
        <li>GitHub Desktop = herramienta visual para manejar Git</li>
        <li>Los commits son "fotografías" del proyecto</li>
      </ul>
    </section>
    <section>
      <h2>Errores comunes</h2>
      <ul>
        <li>
          Olvidar seleccionar los archivos correctos antes de hacer commit
        </li>
        <li>Usar mensajes de commit poco descriptivos (ej. "cambio 1")</li>
        <li>
          No hacer <em>push</em> después de un commit, pensando que ya está en GitHub
        </li>
        <li>Confundir repositorio local con el remoto en GitHub</li>
      </ul>
    </section>
  </div>
</div>
