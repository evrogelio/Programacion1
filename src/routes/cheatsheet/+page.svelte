<script lang="ts">
  import TagCard from "$lib/components/TagCard.svelte";

const tags = [
  {
    etiqueta: "<h1> ... <h6>",
    descripcion: "Títulos, del más grande (h1) al más pequeño (h6).",
    ejemplo: `<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Encabezado 3</h3>`
  },
  {
    etiqueta: "<p>",
    descripcion: "Define un párrafo de texto.",
    ejemplo: `<p>Este es un párrafo de ejemplo.</p>`
  },
  {
    etiqueta: "<br>",
    descripcion: "Inserta un salto de línea.",
    ejemplo: `Primera línea<br>
Segunda línea`
  },
  {
    etiqueta: "<strong>",
    descripcion: "Texto importante o en negrita.",
    ejemplo: `<p>Usa <strong>negrita</strong> para resaltar.</p>`
  },
  {
    etiqueta: "<i>",
    descripcion: "Texto en cursiva.",
    ejemplo: `<p>Esto está en <i>cursiva</i>.</p>`
  },
  {
    etiqueta: "<a>",
    descripcion: "Crea un enlace a otra página o sección.",
    ejemplo: `<a href="https://google.com" target="_blank">
  Ir a Google
</a>`
  },
  {
    etiqueta: "<img>",
    descripcion: "Inserta una imagen con texto alternativo.",
    ejemplo: `<img src="https://via.placeholder.com/150" alt="Ejemplo">`
  },
  {
    etiqueta: "<ul> / <ol> / <li>",
    descripcion: "Listas desordenadas, ordenadas y sus elementos.",
    ejemplo: `<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>`
  },
  {
    etiqueta: "<header> / <nav> / <main> / <footer>",
    descripcion: "Elementos semánticos para estructurar la página.",
    ejemplo: `<header>
  <h1>Título</h1>
  <nav>Menú</nav>
</header>`
  },
  {
    etiqueta: "<form>",
    descripcion: "Contenedor de un formulario.",
    ejemplo: `<form>
  <label>Nombre:
    <input type="text" placeholder="Tu nombre">
  </label>
  <button type="submit">Enviar</button>
</form>`
  }
];
</script>


<main class="min-h-screen bg-neutral-900 text-neutral-100">
  <section class="p-6">
    <h1 class="text-2xl font-bold mb-4">HTML Cheat Sheet</h1>
    <p class="text-neutral-400 mb-6">
      Ejemplos de las etiquetas de contenido vistas en clase.
    </p>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each tags as t}
        <TagCard
          etiqueta={t.etiqueta}
          descripcion={t.descripcion}
          ejemplo={t.ejemplo}
        />
      {/each}
    </div>
  </section>
</main>
