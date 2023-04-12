<script>
  import "../app.postcss";
  import DarkToggleButton from "$lib/components/DarkToggleButton.svelte";
  import Manifest from "../manifest.svelte";
</script>

<Manifest />
<DarkToggleButton />
<slot />
