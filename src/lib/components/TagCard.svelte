<script lang="ts">
  import hljs from "highlight.js/lib/core";
  import html from "highlight.js/lib/languages/xml";
  import "highlight.js/styles/github-dark.css";

  hljs.registerLanguage("html", html);

  let { etiqueta, descripcion, ejemplo } = $props<{
    etiqueta: string;
    descripcion?: string;
    ejemplo: string;
  }>();

  const highlighted = $derived(
    hljs.highlight(ejemplo, { language: "html" }).value
  );

  let copied = $state(false);

  async function copiar() {
    await navigator.clipboard.writeText(ejemplo);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<div class="border rounded-lg p-4 bg-neutral-900 text-neutral-100">
  <h3 class="font-bold text-lg mb-2">{etiqueta}</h3>
  {#if descripcion}
    <p class="text-sm mb-2">{descripcion}</p>
  {/if}

  <div class="mb-2 prose prose-invert max-w-none p-2 border rounded bg-neutral-800">
    {@html ejemplo}
  </div>

  <div class="relative">
    <button 
      onclick={copiar}
      class="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-neutral-700 hover:bg-neutral-600"
    >
      {copied ? "Copiado!" : "Copiar"}
    </button>
    <pre class="overflow-x-auto text-sm p-2 bg-neutral-950 rounded">
      <code class="hljs language-html">
{@html highlighted}
      </code>
    </pre>
  </div>
</div>

