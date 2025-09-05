<script lang="ts">
  export let data: {
    title: string;
    html: string;
    frontmatter: Record<string, any>;
  };
</script>

<svelte:head>
  <title>LCT1 WebDev - {data.title}</title>
</svelte:head>

<article
  class="prose prose-invert dark:prose-invert text-lg leading-relaxed max-w-3xl mx-auto px-4 py-8 font-serif"
>
  <h1 class="text-3xl font-bold text-white mb-6">{data.title}</h1>

  {@html data.html}
</article>
