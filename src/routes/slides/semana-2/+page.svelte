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
      <p>Usa nombres simples, sin espacios.</p>
    </section>
    <section>
      <h2>¿Qué es un formulario?</h2>
      <p>
        Un formulario en HTML permite que el usuario ingrese información para
        ser enviada a un servidor.
      </p>
    </section>

    <section>
      <h2>Usos de los formularios</h2>
      <ul>
        <li>Registro de usuarios</li>
        <li>Inicios de sesión</li>
        <li>Búsquedas en un sitio</li>
        <li>Encuestas y comentarios</li>
        <li>Pedidos o compras en línea</li>
      </ul>
    </section>

    <section>
      <h2>Estructura básica</h2>
      <pre>
        <code class="language-html">
    &lt;form action="..." method="POST"&gt;
      &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
      &lt;input type="text" name="nombre"&gt;

      &lt;label for="email"&gt;Correo:&lt;/label&gt;
      &lt;input type="email" name="email"&gt;

      &lt;button type="submit"&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
        </code>
      </pre>
      <div>
        <form class="flex flex-col gap-2">
          <div class="flex gap-2 p-0">
            <div class="flex flex-col w-1/2 items-start">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                name="nombre"
                class="border-1 border-gray-500 p-2 rounded-lg"
              />
            </div>
            <div class="flex flex-col w-1/2 items-start">
              <label for="email">Correo:</label>
              <input
                type="email"
                name="email"
                class="border-1 border-gray-500 p-2 rounded-lg"
              />
            </div>
          </div>
          <button class="text-black bg-white px-2 rounded-lg" type="submit"
            >Enviar</button
          >
        </form>
      </div>
    </section>

    <section>
      <h2>Elemento: input</h2>
      <pre>
        <code class="language-html">
    &lt;input type="text" name="usuario"&gt;
    &lt;input type="password" name="clave"&gt;
    &lt;input type="email" name="correo"&gt;
        </code>
      </pre>
      <div>
        <p>
          <input
            class="border-1 border-gray-500 p-2 rounded-lg"
            type="text"
            placeholder="Texto"
          />
        </p>
        <p>
          <input
            class="border-1 border-gray-500 p-2 rounded-lg"
            type="password"
            placeholder="Contraseña"
          />
        </p>
        <p>
          <input
            class="border-1 border-gray-500 p-2 rounded-lg"
            type="email"
            placeholder="Correo"
          />
        </p>
      </div>
    </section>

    <section>
      <h2>Elemento: textarea</h2>
      <pre>
        <code class="language-html">
    &lt;textarea name="comentario"&gt;Escribe aquí...&lt;/textarea&gt;
        </code>
      </pre>
      <div>
        <textarea
          class="border-1 border-gray-500 p-2 rounded-lg"
          placeholder="Escribe aquí..."
        ></textarea>
      </div>
    </section>

    <section>
      <h2>Checkbox</h2>
      <pre>
    <code class="language-html">
    &lt;label&gt;
      &lt;input type="checkbox" name="newsletter"&gt; 
      Suscribirme al boletín
    &lt;/label&gt;
    </code>
  </pre>
      <div>
        <label>
          <input type="checkbox" name="newsletter" />
          Suscribirme al boletín
        </label>
      </div>
      <p>Permite seleccionar opciones múltiples o activar/desactivar algo.</p>
    </section>

    <section>
      <h2>Radio buttons</h2>
      <pre>
    <code class="language-html">
    &lt;p&gt;Método de pago:&lt;/p&gt;

    &lt;label&gt;
      &lt;input type="radio" name="pago" value="tarjeta"&gt;
      Tarjeta
    &lt;/label&gt;

    &lt;label&gt;
      &lt;input type="radio" name="pago" value="paypal"&gt;
      PayPal
    &lt;/label&gt;
    </code>
  </pre>
      <div>
        <p>Método de pago:</p>
        <label>
          <input type="radio" name="pago" value="tarjeta" />
          Tarjeta
        </label>
        <label>
          <input type="radio" name="pago" value="paypal" />
          PayPal
        </label>
      </div>
      <p>Permite elegir <strong>una sola opción</strong> de un grupo.</p>
    </section>
    <section>
      <h2>Date</h2>
      <pre>
    <code class="language-html">
    &lt;label&gt;
      Fecha de cita:
      &lt;input type="date" name="fecha"&gt;
    &lt;/label&gt;
    </code>
  </pre>
      <div>
        <label>
          Fecha de cita:
          <input type="date" name="fecha" />
        </label>
      </div>
      <p>Permite al usuario elegir una fecha con un calendario.</p>
    </section>
    <section>
      <h2>Elemento: select</h2>
      <pre>
        <code class="language-html">
    &lt;select name="opcion"&gt;
      &lt;option&gt;Opción 1&lt;/option&gt;
      &lt;option&gt;Opción 2&lt;/option&gt;
      &lt;option&gt;Opción 3&lt;/option&gt;
    &lt;/select&gt;
        </code>
      </pre>
      <div>
        <select class="border-1 border-gray-500 p-2 rounded-lg">
          <option>Opción 1</option>
          <option>Opción 2</option>
          <option>Opción 3</option>
        </select>
      </div>
    </section>
    <section>
      <h2>Radio buttons</h2>
      <pre>
        <code class="language-html">
    &lt;p&gt;Método de pago:&lt;/p&gt;

    &lt;label&gt;
      &lt;input type="radio" name="pago" value="tarjeta"&gt;
      Tarjeta
    &lt;/label&gt;

    &lt;label&gt;
      &lt;input type="radio" name="pago" value="paypal"&gt;
      PayPal
    &lt;/label&gt;
        </code>
      </pre>
      <div>
        <p>Método de pago:</p>
        <label>
          <input type="radio" name="pago" value="tarjeta" />
          Tarjeta
        </label>
        <label>
          <input type="radio" name="pago" value="paypal" />
          PayPal
        </label>
      </div>
      <p>Permite elegir <strong>una sola opción</strong> de un grupo.</p>
    </section>
    <section>
      <h2>Color</h2>
      <pre>
        <code class="language-html">
    &lt;label&gt;
      Elige un color:
      &lt;input type="color" name="favorito"&gt;
    &lt;/label&gt;
        </code>
      </pre>
      <div>
        <label>
          Elige un color:
          <input type="color" name="favorito" />
        </label>
      </div>
      <p>Permite seleccionar un color usando un selector gráfico.</p>
    </section>
    <section>
      <h2>Range</h2>
      <pre>
        <code class="language-html">
    &lt;label&gt;
      Nivel de satisfacción:
      &lt;input type="range" name="satisfaccion" min="0" max="10"&gt;
    &lt;/label&gt;
        </code>
      </pre>
      <div>
        <label>
          Nivel de satisfacción:
          <input type="range" name="satisfaccion" min="0" max="10" />
        </label>
      </div>
      <p>
        Permite elegir un valor dentro de un rango, usando un control
        deslizante.
      </p>
    </section>

    <section>
      <h2>Elemento: button</h2>
      <pre>
        <code class="language-html">
    &lt;button type="submit"&gt;Enviar&lt;/button&gt;
    &lt;button type="reset"&gt;Resetear&lt;/button&gt;
        </code>
      </pre>
      <div>
        <button class="text-black bg-white px-2 rounded-lg" type="submit"
          >Enviar</button
        >
        <button class="text-black bg-white px-2 rounded-lg" type="reset"
          >Resetear</button
        >
      </div>
    </section>
    <section>
      <h2>¿Qué hace Getform?</h2>
      <p>
        Cuando creamos un <code>&lt;form&gt;</code> en HTML, los datos necesitan
        ir a un <strong>servidor</strong> para ser guardados o enviados por correo.
      </p>
      <p>
        Como todavía no veremos backend, usaremos <strong>Getform</strong>, que
        ya tiene un servidor listo para recibir los datos.
      </p>
    </section>
    <section>
      <h2>Getform en pocas palabras</h2>
      <ul>
        <li>Tú diseñas el formulario en HTML.</li>
        <li>Getform recibe la información en su servidor.</li>
        <li>Allí puedes ver los envíos o recibirlos en tu correo.</li>
      </ul>
      <p>
        Solo necesitas poner el <code>action="..."</code> que te da Getform en
        la etiqueta <code>&lt;form&gt;</code>.
      </p>
    </section>

    <section>
      <h2>Actividad: Contacto</h2>
      <p>
        Añade una página <strong>contacto.html</strong> a tu sitio de empresa.
      </p>

      <ul class="text-2xl">
        <li>
          Debe contener un <strong>formulario</strong> con los siguientes campos:
        </li>
        <ul>
          <li>Nombre (input type="text")</li>
          <li>Correo electrónico (input type="email")</li>
          <li>Producto o servicio de interés (select)</li>
          <li>Comentario o mensaje (textarea)</li>
        </ul>
        <li>El formulario debe estar conectado a <strong>Getform</strong></li>
      </ul>

      <p>
        Usa la etiqueta <code>&lt;form action="..." method="POST"&gt;</code> con
        el enlace que te proporcione Getform.
      </p>
    </section>
  </div>
</div>
