<script lang="ts">
  // Puedes sobrescribir desde el loader o props
  let semanas: string[] = ["semana-1", "semana-2"];

  // Utilidad: "semana-1" -> "SEMANA 1"
  const toTitle = (slug: string) => slug.replaceAll("-", " ").toUpperCase();

  const href = (slug: string) => `/slides/${slug}`;
</script>

<main class="min-h-screen bg-[#1e1e1e] text-white">
  <!-- Header -->
  <section class="px-4 py-8 border-b border-[#333]">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-2xl font-bold">Presentaciones</h1>
      <p class="mt-1 text-sm text-neutral-400">
        Explora las sesiones de la materia. Se irán agregando más semanas.
      </p>
    </div>
  </section>

  <!-- Contenido -->
  <section class="px-4 py-6">
    <div class="max-w-5xl mx-auto">
      {#if semanas.length === 0}
        <!-- Estado vacío -->
        <div
          class="rounded-xl border border-dashed border-[#333] bg-[#252526] p-6"
        >
          <h2 class="text-lg font-semibold">No hay presentaciones aún</h2>
          <p class="mt-2 text-neutral-400">
            Crea el primer archivo para comenzar:
          </p>
          <p class="mt-3">
            <code
              class="px-2 py-1 rounded bg-[#1e1e1e] border border-[#333] text-sm"
            >
              src/routes/slides/semana-1/+page.svelte
            </code>
          </p>
          <a
            href="/slides"
            class="mt-4 inline-block rounded-md border border-[#333] px-3 py-1.5 text-sm hover:bg-[#373737] transition"
          >
            Ir a /slides
          </a>
        </div>
      {:else}
        <!-- Lista de semanas -->
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each semanas as s}
            <li>
              <article
                class="group rounded-xl border border-[#333] bg-[#252526] p-4 hover:bg-[#373737] transition"
              >
                <header class="flex items-start justify-between gap-3">
                  <h3 class="text-base font-semibold leading-tight">
                    <a href={href(s)} class="text-blue-400 hover:underline">
                      {toTitle(s)}
                    </a>
                  </h3>
                  <!-- Badge simple opcional -->
                  <span
                    class="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border border-[#333] bg-[#1e1e1e] text-neutral-300"
                  >
                    Slide
                  </span>
                </header>

                <p class="mt-2 text-sm text-neutral-300">
                  Material y notas correspondientes a {toTitle(
                    s,
                  ).toLowerCase()}.
                </p>

                <div class="mt-4">
                  <a
                    href={href(s)}
                    class="inline-block rounded-md border border-[#333] px-3 py-1.5 text-sm hover:bg-[#1e1e1e] transition"
                    aria-label={`Abrir ${toTitle(s)}`}
                  >
                    Abrir
                  </a>
                </div>
              </article>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>
</main>

