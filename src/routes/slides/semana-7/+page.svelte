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
      <!-- Slide 1 -->
      <section>
        <h1>Condicionales en JavaScript</h1>
        <p>Tomar decisiones en el código según distintas condiciones.</p>
      </section>

      <!-- Slide 2 -->
      <section>
        <h2>¿Por qué usar condicionales?</h2>
        <ul>
          <li>
            Permiten que el programa <strong>reaccione</strong> a diferentes situaciones.
          </li>
          <li>Ejemplo del mundo real:</li>
        </ul>
        <pre><code class="language-text">
Si llueve → llevo paraguas  
Si tengo hambre → como  
Si no → sigo trabajando
  </code></pre>
        <p>En JavaScript también podemos expresar esas decisiones.</p>
      </section>

      <!-- Slide 3 -->
      <section>
        <h2>Primer ejemplo</h2>
        <pre><code class="language-js">
let llueve = true;

if (llueve) &#123;
  console.log(&quot;Lleva paraguas&quot;);
&#125;
  </code></pre>
        <p>
          El bloque dentro de <code>if</code> solo se ejecuta si la condición es
          <code>true</code>.
        </p>
      </section>

      <!-- Slide 4 -->
      <section>
        <h2>Sintaxis básica</h2>
        <pre><code class="language-js">
if (condición) &#123;
  // código si la condición es verdadera
&#125;
  </code></pre>
        <pre><code class="language-js">
let edad = 18;

if (edad &gt;= 18) &#123;
  console.log(&quot;Puedes votar&quot;);
&#125;
  </code></pre>
      </section>

      <!-- Slide 5 -->
      <section>
        <h2>Usando <code>else</code></h2>
        <p>Permite ejecutar otra acción cuando la condición es falsa.</p>
        <pre><code class="language-js">
let hora = 22;

if (hora &lt; 20) &#123;
  console.log(&quot;Aún es de día&quot;);
&#125; else &#123;
  console.log(&quot;Ya es de noche&quot;);
&#125;
  </code></pre>
        <p>
          <strong>Prueba:</strong> cambia el valor de <code>hora</code> y observa
          el resultado.
        </p>
      </section>

      <!-- Slide 6 -->
      <section>
        <h2>Encadenar condiciones con <code>else if</code></h2>
        <pre><code class="language-js">
let temperatura = 30;

if (temperatura &lt; 10) &#123;
  console.log(&quot;Hace frío&quot;);
&#125; else if (temperatura &lt; 25) &#123;
  console.log(&quot;Clima agradable&quot;);
&#125; else &#123;
  console.log(&quot;Hace calor&quot;);
&#125;
  </code></pre>
        <p>El código se detiene cuando una condición se cumple.</p>
      </section>

      <!-- Slide 7 -->
      <section>
        <h2>Valores booleanos</h2>
        <pre><code class="language-js">
let tieneCuenta = false;

if (tieneCuenta) &#123;
  console.log(&quot;Bienvenido de nuevo&quot;);
&#125; else &#123;
  console.log(&quot;Crea una cuenta para continuar&quot;);
&#125;
  </code></pre>
        <p>
          También puedes invertir la condición con <code>!tieneCuenta</code>.
        </p>
      </section>

      <!-- Slide 8 -->
      <section>
        <h2>Operadores lógicos</h2>
        <ul>
          <li><code>&amp;&amp;</code> → AND (y)</li>
          <li><code>||</code> → OR (o)</li>
          <li><code>!</code> → NOT (no)</li>
        </ul>
        <pre><code class="language-js">
let edad = 20;
let licencia = true;

if (edad &gt;= 18 &amp;&amp; licencia) &#123;
  console.log(&quot;Puedes conducir&quot;);
&#125; else &#123;
  console.log(&quot;No puedes conducir&quot;);
&#125;
  </code></pre>
      </section>

      <!-- Slide 11 -->
      <section>
        <h2>Conceptos clave</h2>
        <ul>
          <li>
            <code>if</code> ejecuta código solo si la condición es verdadera.
          </li>
          <li><code>else if</code> agrega más opciones.</li>
          <li><code>else</code> cubre todos los demás casos.</li>
          <li>
            Los operadores lógicos permiten crear decisiones más complejas.
          </li>
        </ul>
      </section>
      <section>
        <h2>Reto: ¿Año bisiesto?</h2>
        <ul>
          <li>
            Usa <code>prompt()</code> para pedir al usuario un número de año.
          </li>
          <li>
            El programa debe mostrar si el año es <strong>bisiesto</strong> o no.
          </li>
          <li>
            Recuerda:
            <ul>
              <li>Un año es bisiesto si es divisible entre 4.</li>
              <li>
                Pero no si también es divisible entre 100, <em>a menos</em> que lo
                sea entre 400.
              </li>
            </ul>
          </li>
          <li>
            Usa condicionales <code>if</code>, <code>else if</code> y
            <code>else</code> para decidir.
          </li>
          <li>
            Muestra el resultado con <code>console.log()</code> o
            <code>alert()</code>.
          </li>
        </ul>
      </section>
    </section>
    <section>
      <!-- Slide 1 -->
      <section>
        <h1>Ciclos en JavaScript</h1>
        <p>Repetir código sin escribirlo una y otra vez.</p>
      </section>

<!-- Slide 2 -->
<section>
  <h2>¿Qué es un ciclo?</h2>
  <p>Un ciclo (o bucle) permite ejecutar un bloque de código varias veces.</p>
  <pre><code class="language-js">
let contador = 1;

while (contador &lt;= 5) &#123;
  console.log("Repetición número " + contador);
  contador = contador + 1;
&#125;
  </code></pre>
  <p>El bloque se repite mientras la condición sea <code>true</code>.</p>
</section>

<!-- Slide 3 -->
<section>
  <h2>Ciclo while</h2>
  <p>Evalúa la condición antes de cada repetición.</p>
  <pre><code class="language-js">
let numero = 1;

while (numero &lt;= 3) &#123;
  console.log("Número: " + numero);
  numero++;
&#125;
  </code></pre>
  <p>Si la condición nunca deja de cumplirse, el ciclo se vuelve infinito.</p>
</section>

<!-- Slide 4 -->
<section>
  <h2>Ciclo for</h2>
  <p>Ideal cuando sabes cuántas veces debe repetirse el código.</p>
  <pre><code class="language-js">
for (let i = 1; i &lt;= 5; i++) &#123;
  console.log("Iteración " + i);
&#125;
  </code></pre>
  <p>Incluye en una sola línea el inicio, la condición y la actualización.</p>
</section>

<!-- Slide 5 -->
<section>
  <h2>¿Cómo funciona el for?</h2>
  <ol>
    <li><code>let i = 1</code> → se ejecuta una vez (inicio)</li>
    <li><code>i &lt;= 5</code> → se evalúa antes de cada vuelta</li>
    <li><code>i++</code> → se ejecuta al final de cada repetición</li>
  </ol>
</section>

<!-- Slide 6 -->
<section>
  <h2>Comparando while y for</h2>
  <table>
    <thead>
      <tr>
        <th>Situación</th>
        <th>Recomendado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>No sabes cuántas veces se repetirá</td>
        <td><code>while</code></td>
      </tr>
      <tr>
        <td>Sabes cuántas veces se repetirá</td>
        <td><code>for</code></td>
      </tr>
    </tbody>
  </table>
</section>

<!-- Slide 7 -->
<section>
  <h2>Usar variables acumuladoras</h2>
  <p>Podemos acumular valores dentro del ciclo.</p>
  <pre><code class="language-js">
let suma = 0;

for (let i = 1; i &lt;= 5; i++) &#123;
  suma = suma + i;
&#125;

console.log("La suma total es: " + suma);
  </code></pre>
</section>

<!-- Slide 8 -->
<section>
  <h2>Detener o saltar ciclos</h2>
  <p><code>break</code> sale del ciclo, <code>continue</code> salta una vuelta.</p>
  <pre><code class="language-js">
for (let i = 1; i &lt;= 5; i++) &#123;
  if (i === 3) &#123;
    continue; // salta el número 3
  &#125;
  console.log(i);
&#125;
  </code></pre>
</section>

<!-- Slide 9 -->
<section>
  <h2>Ejercicio</h2>
  <ul>
    <li>Escribe un ciclo <code>for</code> que muestre los números del 1 al 10.</li>
    <li>Escribe un ciclo <code>while</code> que cuente de 5 hacia 1.</li>
    <li>Crea un programa que sume los números del 1 al 100.</li>
  </ul>
  <p>Muestra los resultados con <code>console.log()</code>.</p>
</section>

<!-- Slide 10 -->
<section>
  <h2>Reto adicional</h2>
  <ul>
    <li>Pide un número con <code>prompt()</code>.</li>
    <li>Haz que el programa muestre su tabla de multiplicar usando un ciclo <code>for</code>.</li>
    <li>Ejemplo: si el usuario escribe 3, debe mostrar 3×1 hasta 3×10.</li>
  </ul>
</section>

<!-- Slide 11 -->
<section>
  <h2>Conceptos clave</h2>
  <ul>
    <li>Los ciclos repiten código mientras una condición sea verdadera.</li>
    <li><code>for</code> es más compacto que <code>while</code> para repeticiones conocidas.</li>
    <li><code>break</code> detiene el ciclo antes de tiempo.</li>
    <li><code>continue</code> salta una vuelta sin detener el ciclo.</li>
  </ul>
</section>
    </section>
  </div>
</div>
