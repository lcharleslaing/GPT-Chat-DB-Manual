<script>
    import { theme } from "../../stores/theme";

    function toggleTheme() {
        $theme === "light" ? ($theme = "dark") : ($theme = "light");
    }
</script>

<button class="btn btn-primary m-4" on:click={toggleTheme}>Toggle Theme</button>
