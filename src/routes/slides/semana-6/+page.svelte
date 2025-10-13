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
      <section>
        <h1>JavaScript: Sintaxis básica y variables</h1>
        <p>
          Primera introducción a la lógica del lenguaje que da vida a la web.
        </p>
      </section>

      <section>
        <h2>¿Qué es JavaScript?</h2>
        <ul>
          <li>
            Lenguaje que permite agregar <strong>interactividad</strong> a la web.
          </li>
          <li>Se ejecuta directamente en el navegador.</li>
          <li>Puede leer, modificar y reaccionar al contenido del HTML.</li>
        </ul>
        <pre><code class="language-html">
&lt;script src="main.js"&gt;&lt;/script&gt;
  </code></pre>
      </section>

      <section>
        <h2>Primer script</h2>
        <p>Podemos escribir JavaScript directamente dentro de un HTML:</p>
        <pre><code class="language-html">
&lt;script&gt;
  console.log("Hola, mundo!");
&lt;/script&gt;
  </code></pre>
        <p>Abre la consola del navegador y observa el resultado.</p>
      </section>

      <section>
        <h2>Reglas básicas de sintaxis</h2>
        <ul>
          <li>Las instrucciones se ejecutan de arriba a abajo.</li>
          <li>Se puede usar <code>;</code> al final de cada línea.</li>
          <li>Los comentarios ayudan a explicar el código:</li>
        </ul>
        <pre><code class="language-js">
// Comentario de una línea
/* Comentario
   de varias líneas */
  </code></pre>
      </section>

      <section>
        <h2>Variables</h2>
        <p>Permiten guardar valores para usarlos después.</p>
        <pre><code class="language-js">
let nombre = "Ana";
const edad = 21;

console.log(nombre);
console.log(edad);
  </code></pre>
        <p>
          <strong>Pregunta:</strong> ¿Qué pasa si intentas cambiar una constante?
        </p>
      </section>

      <section>
        <h2>Tipos de datos básicos</h2>
        <ul>
          <li><code>String</code> → texto: "Hola"</li>
          <li><code>Number</code> → números: 10, 3.14</li>
          <li><code>Boolean</code> → true / false</li>
          <li><code>Undefined</code> → sin valor asignado</li>
          <li><code>Null</code> → valor vacío intencional</li>
        </ul>
        <p>Prueba esto en consola:</p>
        <pre><code class="language-js">
typeof "Hola"
typeof 42
typeof true
  </code></pre>
      </section>

      <section>
        <h2>Ejemplo: combinando tipos</h2>
        <pre><code class="language-js">
let nombre = "Lucía";
let edad = 18;
let estudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?", estudiante);
  </code></pre>
      </section>

      <section>
        <h2>Interacción básica</h2>
        <p>El navegador puede pedir datos al usuario:</p>
        <pre><code class="language-js">
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);
  </code></pre>
        <p>Todo lo que devuelve <code>prompt()</code> es texto.</p>
      </section>

      <section>
        <h2>Actividad rápida</h2>
        <ol>
          <li>
            Declara una variable <code>nombre</code> y otra <code>edad</code>.
          </li>
          <li>Muestra en consola un mensaje usando ambas.</li>
          <li>Cambia el valor de <code>edad</code> y ejecuta otra vez.</li>
        </ol>
        <p>Observa cómo los valores cambian dinámicamente.</p>
      </section>
    </section>
    <section>
      <section>
        <h2>Operadores aritméticos</h2>
        <p>Sirven para realizar operaciones matemáticas.</p>
        <table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Ejemplo</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>+</td><td><code>5 + 3</code></td><td>8</td></tr>
            <tr><td>-</td><td><code>10 - 4</code></td><td>6</td></tr>
            <tr><td>*</td><td><code>2 * 3</code></td><td>6</td></tr>
            <tr><td>/</td><td><code>8 / 2</code></td><td>4</td></tr>
            <tr><td>%</td><td><code>7 % 3</code></td><td>1</td></tr>
            <tr><td>**</td><td><code>2 ** 3</code></td><td>8</td></tr>
          </tbody>
        </table>
      </section>

      <!-- Slide 6 -->
      <section>
        <h2>Ejemplo aritmético</h2>
        <pre><code class="language-js">
let resultado = (10 + 2) * 3;
console.log(resultado); // 36
  </code></pre>
        <p>
          <strong>Ejercicio:</strong> cambia los números y predice el resultado antes
          de ejecutar.
        </p>
      </section>

      <!-- Slide 7 -->
      <section>
        <h2>Concatenación de texto</h2>
        <p>El operador <code>+</code> también une cadenas.</p>
        <pre><code class="language-js">
let nombre = "María";
let saludo = "Hola, " + nombre + "!";
console.log(saludo);
  </code></pre>
        <p>
          <strong>Atención:</strong> si mezclas texto y números, el resultado
          será un <code>string</code>.
        </p>
      </section>

      <!-- Slide 8 -->
      <section>
        <h2>Template strings</h2>
        <p>
          Las comillas invertidas <code>`</code> permiten incrustar variables fácilmente:
        </p>
        <pre><code class="language-js">
let nombre = "María";
let saludo = `Hola, \$&#123;nombre&#125;!`;
console.log(saludo);
  </code></pre>
        <p>También permiten escribir texto multilínea sin concatenar.</p>
      </section>

      <!-- Slide 9 -->
      <section>
        <h2>Operadores de comparación</h2>
        <p>
          Comparan valores y devuelven <code>true</code> o <code>false</code>.
        </p>
        <ul>
          <li><code>==</code> → igual (sin tipo)</li>
          <li><code>===</code> → igual (con tipo)</li>
          <li><code>!=</code> → distinto (sin tipo)</li>
          <li><code>!==</code> → distinto (con tipo)</li>
        </ul>
        <pre><code class="language-js">
5 == "5"   // true
5 === "5"  // false
  </code></pre>
      </section>

      <!-- Slide 10 -->
      <section>
        <h2>Comparaciones numéricas</h2>
        <pre><code class="language-js">
7 &gt; 3  
2 &lt; 8  
5 &gt;= 5  
4 &lt;= 2
        </code></pre>
        <p>
          <strong>Prueba:</strong> cambia los números y predice el resultado antes
          de ejecutarlo.
        </p>
      </section>

      <!-- Slide 11 -->
      <section>
        <h2>Operadores lógicos</h2>
        <p>Permiten combinar condiciones:</p>
        <ul>
          <li><code>&amp;&amp;</code> → AND (todas deben ser verdaderas)</li>
          <li><code>||</code> → OR (al menos una verdadera)</li>
          <li><code>!</code> → NOT (invierte el valor)</li>
        </ul>
        <pre><code class="language-js">
true && false 
true || false  
!true          
  </code></pre>
      </section>

      <!-- Slide 12 -->
      <section>
        <h2>Ejemplo combinado</h2>
        <pre><code class="language-js">
let edad = 20;
let tieneLicencia = true;

let puedeConducir = edad >= 18 && tieneLicencia;
console.log("¿Puede conducir?", puedeConducir);
  </code></pre>
        <p>
          <strong>Discusión:</strong> ¿Qué pasa si una de las condiciones cambia
          a <code>false</code>?
        </p>
      </section>

      <!-- Slide 13 -->
      <section>
        <h2>Actividad práctica</h2>
        <ol>
          <li>Crear <code>operadores.js</code> y enlazarlo a un HTML.</li>
          <li>Probar operaciones matemáticas y comparaciones.</li>
          <li>Usar operadores lógicos con distintas combinaciones.</li>
          <li>Mostrar mensajes usando <em>template strings</em>.</li>
        </ol>
      </section>
    </section>
    <section>
      <!-- Slide 1 -->
      <section>
        <h1>Funciones simples en JavaScript</h1>
        <p>
          Organizar el código, evitar repeticiones y hacerlo más fácil de
          mantener.
        </p>
      </section>

      <!-- Slide 2 -->
      <section>
        <h2>¿Qué es una función?</h2>
        <ul>
          <li>Un bloque de código que realiza una tarea específica.</li>
          <li>Se puede ejecutar varias veces cuando se necesite.</li>
          <li>Permite reutilizar y estructurar mejor el código.</li>
        </ul>
        <pre><code class="language-js">
function saludar() &#123;
  console.log(&quot;Hola, bienvenido al curso!&quot;);
&#125;

saludar(); // Llamada a la función
  </code></pre>
      </section>

      <!-- Slide 3 -->
      <section>
        <h2>Partes de una función</h2>
        <ol>
          <li><code>function</code> → palabra clave.</li>
          <li><strong>Nombre</strong> → describe su propósito.</li>
          <li><code>()</code> → paréntesis para parámetros.</li>
          <li><code>&#123;&#125;</code> → bloque con las instrucciones.</li>
        </ol>
        <pre><code class="language-js">
function mostrarMensaje() &#123;
  console.log(&quot;Esto es una función&quot;);
&#125;
  </code></pre>
      </section>

      <!-- Slide 4 -->
      <section>
        <h2>Parámetros y argumentos</h2>
        <p>Permiten pasar información a la función.</p>
        <pre><code class="language-js">
function saludar(nombre) &#123;
  console.log(`Hola, &#36;&#123;nombre&#125;!`);
&#125;

saludar(&quot;Lucía&quot;); // &quot;Lucía&quot; es el argumento
  </code></pre>
        <p>
          <strong>Ejercicio:</strong> Cambia el nombre y observa el resultado.
        </p>
      </section>

      <!-- Slide 5 -->
      <section>
        <h2>Varios parámetros</h2>
        <pre><code class="language-js">
function sumar(a, b) &#123;
  console.log(a + b);
&#125;

sumar(3, 4); // 7
  </code></pre>
        <p>
          <strong>Pregunta:</strong> ¿Qué pasa si llamas <code>sumar(3)</code> sin
          el segundo número?
        </p>
      </section>

      <!-- Slide 6 -->
      <section>
        <h2>Return: devolver un valor</h2>
        <p>Las funciones pueden devolver resultados con <code>return</code>.</p>
        <pre><code class="language-js">
function multiplicar(x, y) &#123;
  return x * y;
&#125;

let resultado = multiplicar(5, 2);
console.log(resultado); // 10
  </code></pre>
        <p>
          Si no hay <code>return</code>, la función devuelve
          <code>undefined</code>.
        </p>
      </section>

      <!-- Slide 7 -->
      <section>
        <h2>Funciones como expresiones</h2>
        <p>También puedes guardar funciones dentro de variables.</p>
        <pre><code class="language-js">
const restar = function(a, b) &#123;
  return a - b;
&#125;;

console.log(restar(10, 4)); // 6
  </code></pre>
      </section>

      <!-- Slide 8 -->
      <section>
        <h2>Funciones flecha (arrow functions)</h2>
        <p>Una forma más corta de escribir funciones.</p>
        <pre><code class="language-js">
const dividir = (a, b) =&gt; a / b;
console.log(dividir(10, 2)); // 5
  </code></pre>
        <p>
          <strong>Nota:</strong> No necesitas <code>return</code> si la función tiene
          una sola línea.
        </p>
      </section>

      <!-- Slide 9 -->
      <section>
        <h2>Comparando estilos</h2>
        <pre><code class="language-js">
// Tradicional
function sumar(a, b) &#123;
  return a + b;
&#125;

// Flecha
const sumar = (a, b) =&gt; a + b;
  </code></pre>
        <p><strong>Discusión:</strong> ¿Cuál te parece más clara para leer?</p>
      </section>

      <!-- Slide 10 -->
      <section>
        <h2>Actividad práctica</h2>
        <ol>
          <li>Crear <code>funciones.js</code> enlazado a un HTML.</li>
          <li>Escribir una función sin parámetros que muestre un mensaje.</li>
          <li>
            Hacer una función que sume dos números y devuelva el resultado.
          </li>
          <li>Reescribirla usando una función flecha.</li>
          <li>Mostrar los resultados en la consola.</li>
        </ol>
      </section>
    </section>

    <section>
      <section>
        <h2>Llamar una función con <code>onclick</code></h2>
        <p>
          Podemos ejecutar una función directamente al hacer clic en un botón.
        </p>

        <pre><code class="language-html">
&lt;button onclick=&quot;saludar()&quot;&gt;Haz clic&lt;/button&gt;

&lt;script&gt;
  function saludar() &#123;
    alert(&quot;¡Hola desde la función!&quot;);
  &#125;
&lt;/script&gt;
  </code></pre>

        <ul>
          <li>El atributo <code>onclick</code> se usa en el elemento HTML.</li>
          <li>
            Cuando se hace clic, JavaScript ejecuta la función especificada.
          </li>
          <li>La función debe estar declarada con <code>function</code>.</li>
        </ul>
      </section>
      <!-- Slide 1 -->
      <section>
        <h2>¿Dónde viven las variables?</h2>
        <p>
          Las variables existen solo en ciertos lugares del programa. A eso lo
          llamamos <strong>scope</strong> o <em>alcance</em>.
        </p>
      </section>

      <!-- Slide 2 -->
      <section>
        <h2>Variables globales</h2>
        <p>
          Una variable declarada fuera de una función se puede usar desde
          cualquier parte.
        </p>
        <pre><code class="language-js">
let mensaje = "Hola";

function saludar() &#123;
  console.log(mensaje);
&#125;

saludar(); // "Hola"
console.log(mensaje); // "Hola"
  </code></pre>
        <p>
          <strong>Idea clave:</strong> Las variables globales viven “afuera” y todas
          las funciones pueden verlas.
        </p>
      </section>

      <!-- Slide 3 -->
      <section>
        <h2>Variables locales</h2>
        <p>
          Las variables creadas dentro de una función solo existen ahí dentro.
        </p>
        <pre><code class="language-js">
function saludar() &#123;
  let mensaje = "Hola";
  console.log(mensaje);
&#125;

saludar();           // "Hola"
console.log(mensaje); // Error: mensaje no está definida
  </code></pre>
        <p>
          <strong>Idea clave:</strong> Una variable “local” desaparece cuando la
          función termina.
        </p>
      </section>

      <!-- Slide 4 -->
      <section>
        <h2>Ejemplo combinado</h2>
        <pre><code class="language-js">
let saludoGlobal = "Hola global";

function mostrarSaludo() &#123;
  let saludoLocal = "Hola local";
  console.log(saludoGlobal);
  console.log(saludoLocal);
&#125;

mostrarSaludo();
console.log(saludoGlobal); // Correcto
console.log(saludoLocal);  // Error
  </code></pre>
        <p>
          Una función puede usar variables globales, pero las globales no pueden
          ver lo que está dentro.
        </p>
      </section>

      <!-- Slide 5 -->
      <section>
        <h2>Recomendación</h2>
        <ul>
          <li>
            Usa variables <strong>locales</strong> dentro de tus funciones.
          </li>
          <li>Evita crear muchas variables globales.</li>
          <li>Así tu código es más ordenado y evita errores.</li>
        </ul>
      </section>

      <section>
        <h2>Ejercicio: contador</h2>
        <ul>
          <li>
            Crea un contador que aumente cada vez que se haga clic en un botón.
          </li>
          <li>Muestra el resultado en la consola.</li>
          <li>
            Usa una variable para llevar el conteo y una función para
            actualizarlo.
          </li>
          <li>Conecta la función al botón con <code>onclick</code>.</li>
        </ul>
      </section>
      <section>
        <h3>Reto adicional</h3>
        <ul>
          <li>
            Haz que el programa pregunte con <code>prompt()</code> cuánto debe sumar
            o restar.
          </li>
          <li>Si el usuario escribe un número negativo, debe restarse.</li>
          <li>Muestra el valor actualizado después de cada clic.</li>
        </ul>
      </section>
    </section>
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
  </div>
</div>
