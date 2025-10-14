<script lang="ts">
  const slides: { href: string; title: string }[] = [
    { href: "/slides/semana-1", title: "Semana 1" },
    { href: "/slides/semana-2", title: "Semana 2" },
    { href: "/slides/semana-3", title: "Semana 3" },
    { href: "/slides/semana-4", title: "Semana 4" },
    { href: "/slides/semana-5", title: "Semana 5" },
    { href: "/slides/semana-6", title: "Semana 6" },
    { href: "/slides/semana-7", title: "Semana 7" },
  ];
  const notasSugeridas = [
    { title: "Mapa Curricular", href: "/notas/mapa-curricular" },
    { title: "Semana 1", href: "/notas/semana-1" },
    { title: "Semana 2", href: "/notas/semana-2" },
    { title: "Semana 3", href: "/notas/semana-3" },
    { title: "Semana 4", href: "/notas/semana-4" },
  ];
</script>

<svelte:head>
  <title>LCT1 WebDev</title>
</svelte:head>
<main class="min-h-screen bg-neutral-900 text-neutral-100">
  <section class="text-center px-4 py-12">
    <h1 class="text-3xl font-bold">Programación Web</h1>
    <p class="mt-2 text-neutral-400">
      HTML, CSS y JavaScript nativos — material y notas de clase.
    </p>
    <div class="mt-6 flex items-center justify-center gap-3">
      <a
        href="/slides"
        class="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition"
        >Ver presentaciones</a
      >
      <a
        href="/notas"
        class="inline-block rounded-lg border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-900 transition"
        >Explorar notas</a
      >
    </div>
  </section>

  <section class="grid gap-4 p-4 sm:grid-cols-2">
    <article
      class="rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur p-5"
    >
      <h2 class="text-xl font-semibold">Presentaciones</h2>
      {#if slides.length === 0}
        <p class="mt-2 text-neutral-400">Aún no hay presentaciones.</p>
        <ol class="mt-3 list-decimal pl-5 text-sm text-neutral-400 space-y-1">
          <li>
            Crea <code
              class="px-1 py-0.5 rounded bg-neutral-900 border border-neutral-800"
              >src/routes/slides/semana-1/+page.svelte</code
            >.
          </li>
          <li>Agrega una slide base.</li>
          <li>Vuelve aquí y verás la lista.</li>
        </ol>
        <a
          href="/slides"
          class="mt-4 inline-block rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-900 transition"
          >Ir a /slides</a
        >
      {:else}
        <ul class="mt-3 space-y-2">
          {#each slides as s}
            <li>
              <a class="text-blue-400 hover:underline" href={s.href}
                >{s.title}</a
              >
            </li>
          {/each}
        </ul>
      {/if}
    </article>

    <article
      class="rounded-xl border border-neutral-800 bg-neutral-950/60 backdrop-blur p-5"
    >
      <h2 class="text-xl font-semibold">Notas</h2>
      <ul class="mt-3 space-y-2">
        {#each notasSugeridas as n}
          <li>
            <a class="text-blue-400 hover:underline" href={n.href}>{n.title}</a>
          </li>
        {/each}
      </ul>
      <a
        href="/notas"
        class="mt-4 inline-block rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-900 transition"
        >Abrir todas las notas</a
      >
    </article>
  </section>
</main>
