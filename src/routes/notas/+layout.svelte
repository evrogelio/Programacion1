<script lang="ts">
  export let data: {
    notes: { title: string; slug: string }[];
  };
  let open = false;

  const toggle = () => (open = !open);
  const close = () => (open = false);
</script>

<div class="flex h-screen bg-[#1e1e1e] text-white flex-col lg:flex-row">
  <!-- Topbar móvil -->
  <header
    class="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 h-14 border-b border-[#333] bg-[#1e1e1e]"
  >
    <button
      class="inline-flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#373737] transition"
      on:click={toggle}
      aria-expanded={open}
      aria-controls="mobile-sidebar"
      aria-label="Abrir menú de notas"
    >
      <!-- ícono hamburguesa -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span class="text-sm">Notas</span>
    </button>

    <h1 class="text-sm font-semibold opacity-80">Programación Web</h1>
  </header>

  <aside
    class="hidden md:block w-64 bg-[#252526] p-4 overflow-y-auto border-r border-[#333]"
  >
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

  {#if open}
    <div class="md:hidden fixed inset-0 z-40" role="dialog" aria-modal="true">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50" on:click={close}></div>

      <!-- Panel -->
      <aside
        id="mobile-sidebar"
        class="absolute left-0 top-0 h-full w-72 max-w-[85%] bg-[#252526] p-4 border-r border-[#333] shadow-xl transform transition-transform duration-200 ease-out"
        style="translate: 0"
      >
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-lg font-bold">Notas</h1>
          <button
            class="inline-flex items-center px-2 py-1 rounded hover:bg-[#373737] transition"
            on:click={close}
            aria-label="Cerrar menú"
          >
            <!-- ícono X -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z"
              />
            </svg>
          </button>
        </div>

        <ul class="space-y-1 text-sm">
          {#each data.notes as note}
            <li>
              <a
                href={`/notas/${note.slug}`}
                class="block px-2 py-1 rounded hover:bg-[#373737] hover:text-blue-400"
                on:click={close}
              >
                {note.title}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
    </div>
  {/if}

  <main class="flex-1 overflow-y-auto p-6">
    <slot />
  </main>
</div>

<style>
  [role="dialog"] aside {
    transform: translateX(-100%);
  }
  [role="dialog"] aside[style*="translate: 0"] {
    transform: translateX(0);
  }
</style>
