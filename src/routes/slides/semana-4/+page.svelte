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
  <title>LCT1 WebDev - Semana 4</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <section>
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
          <li>
            <strong>Git</strong>: herramienta local de control de versiones
          </li>
          <li>
            <strong>GitHub</strong>: plataforma en línea para guardar y
            compartir proyectos
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
            No hacer <em>push</em> después de un commit, pensando que ya está en
            GitHub
          </li>
          <li>Confundir repositorio local con el remoto en GitHub</li>
        </ul>
      </section>
    </section>
    <section>
      <section>
        <h1>Commits e historial en GitHub Desktop</h1>
      </section>

      <section>
        <h2>¿Qué es un commit?</h2>
        <ul>
          <li>
            Un commit es como una <strong>fotografía</strong> del proyecto
          </li>
          <li>Registra los cambios hechos en los archivos</li>
          <li>Permite regresar a estados anteriores</li>
          <li>Debe llevar un <strong>mensaje claro y descriptivo</strong></li>
        </ul>
      </section>

      <section>
        <h2>El flujo de trabajo de un commit</h2>
        <ol>
          <li><strong>Editar</strong> un archivo en el proyecto</li>
          <li>
            GitHub Desktop lo detecta en la pestaña <strong>Changes</strong>
          </li>
          <li>Marcar los archivos que queremos incluir (staged)</li>
          <li>Escribir un mensaje de commit</li>
          <li>Confirmar y guardar el commit</li>
        </ol>
      </section>

      <section>
        <h2>Pestaña "Changes"</h2>
        <ul>
          <li>Muestra qué archivos se modificaron</li>
          <li>Permite seleccionar (staged) los archivos que van al commit</li>
          <li>Se escriben título y descripción del commit</li>
        </ul>
      </section>

      <section>
        <h2>Pestaña "History"</h2>
        <ul>
          <li>Muestra todos los commits realizados</li>
          <li>Cada commit incluye mensaje, autor, fecha y lista de cambios</li>
          <li>Permite comparar con versiones anteriores</li>
        </ul>
      </section>

      <section>
        <h2>Actividad práctica</h2>
        <ol>
          <li>
            Hacer <strong>3 cambios pequeños</strong> en el proyecto (ejemplo: título,
            párrafo, color)
          </li>
          <li>Revisar los archivos en <strong>Changes</strong></li>
          <li>Seleccionar los archivos modificados</li>
          <li>Escribir un mensaje descriptivo</li>
          <li>Hacer el commit y verificarlo en <strong>History</strong></li>
        </ol>
      </section>

      <section>
        <h2>Buenas prácticas de commits</h2>
        <ul>
          <li>Un commit = un cambio lógico (no mezclar muchos cambios)</li>
          <li>Mensajes cortos pero claros</li>
          <li>
            Ejemplos de mensajes:
            <ul>
              <li>"Agregar nueva sección de noticias"</li>
              <li>"Cambiar color de fondo en estilos.css"</li>
              <li>"Corregir error en enlace de contacto"</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Errores comunes</h2>
        <ul>
          <li>Olvidar seleccionar los archivos correctos (no staged)</li>
          <li>Hacer un solo commit con muchos cambios distintos</li>
          <li>Usar mensajes vagos como "cambio 1"</li>
          <li>
            Pensar que con el commit ya está en GitHub (falta <em>push</em>)
          </li>
        </ul>
      </section>
    </section>
    <section>
      <section>
        <h1>GitHub remoto, Pages y colaboración</h1>
      </section>

      <section>
        <h2>Repositorio local vs remoto</h2>
        <ul>
          <li>
            <strong>Local:</strong> está en tu computadora (GitHub Desktop)
          </li>
          <li><strong>Remoto:</strong> está en GitHub.com</li>
          <li>Conectarlos permite guardar y compartir proyectos en la nube</li>
        </ul>
      </section>

      <section>
        <h2>Publicar un repositorio</h2>
        <ol>
          <li>Abrir el proyecto en GitHub Desktop</li>
          <li>Iniciar sesión en la cuenta de GitHub</li>
          <li>Usar el botón <strong>"Publish repository"</strong></li>
          <li>El proyecto aparece en GitHub.com</li>
        </ol>
      </section>

      <section>
        <h2>¿Qué es GitHub Pages?</h2>
        <ul>
          <li>
            Servicio gratuito para publicar sitios web directamente desde un
            repositorio
          </li>
          <li>No necesitas servidor propio ni configuración complicada</li>
          <li>Tu proyecto HTML/CSS se convierte en una página web pública</li>
        </ul>
      </section>

      <section>
        <h2>Activar GitHub Pages</h2>
        <ol>
          <li>Ir al repositorio en GitHub.com</li>
          <li>Entrar a <strong>Settings → Pages</strong></li>
          <li>
            Elegir la rama <code>main</code> y la carpeta <code>/root</code>
          </li>
          <li>Guardar y esperar a que se genere la URL</li>
        </ol>
      </section>

      <section>
        <h2>Colaboración en GitHub</h2>
        <ul>
          <li>Un repositorio puede tener varios colaboradores</li>
          <li>
            El dueño invita a otros desde <strong
              >Settings → Collaborators</strong
            >
          </li>
          <li>
            Los colaboradores pueden clonar, hacer commits y subir cambios
          </li>
        </ul>
      </section>

      <section>
        <h2>Actividad colaborativa</h2>
        <ol>
          <li>En parejas: un estudiante crea y publica su repositorio</li>
          <li>Invita al compañero como colaborador en GitHub</li>
          <li>El compañero clona el repositorio en GitHub Desktop</li>
          <li>
            Ambos hacen un cambio sencillo en el proyecto (ejemplo: un nuevo
            párrafo)
          </li>
          <li>
            Cada uno hace un commit con mensaje claro y hace <strong
              >push</strong
            >
          </li>
          <li>
            Revisan en GitHub.com y en la URL de Pages que los cambios estén
            reflejados
          </li>
        </ol>
      </section>
    </section>
    <section>
      <section>
        <h1>Proyecto colaborativo</h1>
        <h2>Galería de fotos</h2>
      </section>

      <section>
        <h2>Objetivo</h2>
        <ul>
          <li>Trabajar en parejas o tercias</li>
          <li>Crear una galería de fotos en HTML y CSS</li>
          <li>Cada integrante debe hacer al menos <strong>1 commit</strong></li>
          <li>Publicar el proyecto con <strong>GitHub Pages</strong></li>
        </ul>
      </section>

      <section>
        <h2>Requisitos del proyecto</h2>
        <ul>
          <li>Página <code>galeria.html</code></li>
          <li>
            Cada tarjeta incluye:
            <ul>
              <li>Imagen</li>
              <li>Título o pie de foto</li>
              <li>Descripción breve</li>
            </ul>
          </li>
          <li>Archivo de estilos externo <code>estilos.css</code></li>
          <li>Dos fuentes de Google: títulos y contenido</li>
          <li>Diseño: cajas con bordes redondeados, fondo claro y espaciado</li>
        </ul>
      </section>

      <section>
        <h2>Organización del trabajo</h2>
        <ol>
          <li>Un integrante crea el repositorio en GitHub</li>
          <li>Agrega a sus compañeros como colaboradores</li>
          <li>Cada integrante clona el repositorio</li>
          <li>Cada uno agrega su tarjeta en la galería</li>
          <li>Commit individual con mensaje claro</li>
          <li>Hacer <strong>push</strong> de los cambios</li>
        </ol>
      </section>

      <section>
        <h2>Actividad paso a paso</h2>
        <ol>
          <li>Crear y publicar repositorio en GitHub</li>
          <li>Agregar colaboradores en <em>Settings → Collaborators</em></li>
          <li>Clonar el repositorio en sus computadoras</li>
          <li>Agregar tarjetas con imágenes y texto</li>
          <li>Commit + Push de cada integrante</li>
          <li>Activar GitHub Pages</li>
          <li>Revisar la galería en la URL pública</li>
        </ol>
      </section>

      <section>
        <h2>Reto extra: Hover en tu galería</h2>
        <p>
          Mejora tu galería aplicando un efecto <code>:hover</code> con CSS.
        </p>
        <ul>
          <li>Que las imágenes cambien de tamaño al pasar el mouse</li>
          <li>Que aparezca un borde o sombra en la tarjeta</li>
          <li>Que el título cambie de color al pasar encima</li>
        </ul>
        <p><strong>Investiga cómo hacerlo y aplícalo a tu proyecto.</strong></p>
      </section>

      <section>
        <h2>Tips para investigar</h2>
        <ul>
          <li>Busca: <em>“CSS hover effects”</em></li>
          <li>Prueba en un elemento simple antes de aplicarlo a tu galería</li>
          <li>
            Combina <code>:hover</code> con propiedades como
            <code>transform</code>, <code>color</code> o <code>box-shadow</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>¿Qué es <code>:hover</code> en CSS?</h2>
        <ul>
          <li>
            <code>:hover</code> es un selector que aplica estilos cuando el mouse
            pasa sobre un elemento
          </li>
          <li>Sirve para dar interactividad sin usar JavaScript</li>
          <li>Muy común en enlaces, botones e imágenes</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos de uso</h2>
        <ul>
          <li>Cambiar el color de un enlace cuando el cursor pasa encima</li>
          <li>Agrandar una imagen al pasar el mouse</li>
          <li>Mostrar un texto oculto en una tarjeta</li>
        </ul>
      </section>
    </section>
  </div>
</div>
