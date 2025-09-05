<script lang="ts">
  export let data: {
    notes: { title: string; slug: string }[];
  };
</script>

<div class="flex h-screen bg-[#1e1e1e] text-white">
  <!-- Sidebar -->
  <aside class="w-64 bg-[#252526] p-4 overflow-y-auto border-r border-[#333]">
    <h1 class="text-lg font-bold mb-4">Notas</h1>
    <ul class="space-y-1 text-sm">
      {#each data.notes as note}
        <li>
          <a
            href={`/notas/${note.slug}`}
            class="block px-2 py-1 rounded hover:bg-[#373737] hover:text-blue-400"
          >
            {note.title}
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 overflow-y-auto p-6">
    <slot />
  </main>
</div>
