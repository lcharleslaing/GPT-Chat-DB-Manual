<script context="module">
    export async function load({ fetch }) {
        const response = await fetch("/env.json");
        const env = await response.json();

        const manifest = {
            name: env.VITE_APP_NAME,
            short_name: env.VITE_APP_SHORT_NAME,
            description: env.VITE_APP_DESCRIPTION,
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            theme_color: "#000000",
            icons: [
                {
                    src: "/icon-192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/icon-512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        };

        return {
            manifest,
        };
    }
</script>

<script>
    export let manifest = {};
</script>

<svelte:head>
    <link rel="manifest" href="data:application/manifest+json,{manifest}" />
</svelte:head>
