<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
  :global(html, body, #svelte) {
    margin: 0;
    height: 100%;
  }
  :global(.reveal) {
    height: 100%;
  }
</style>
