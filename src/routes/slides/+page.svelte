<script lang="ts">
  const semanas = ["semana-1"];
</script>

<section class="p-4 text-neutral-100">
  <h1 class="text-2xl font-bold">Presentaciones</h1>

  {#if semanas.length === 0}
    <p class="mt-2 text-neutral-400">No hay presentaciones aún.</p>
    <p class="text-neutral-400">
      Crea <code
        class="px-1 py-0.5 rounded bg-neutral-900 border border-neutral-800"
        >src/routes/slides/semana-1/+page.svelte</code
      > para empezar.
    </p>
  {:else}
    <ul class="mt-4 space-y-2">
      {#each semanas as s}
        <li>
          <a class="text-blue-400 hover:underline" href={`/slides/${s}`}
            >{s.replace("-", " ").toUpperCase()}</a
          >
        </li>
      {/each}
    </ul>
  {/if}
</section>
