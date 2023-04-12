export async function get() {
    const env = {
        VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
        VITE_APP_SHORT_NAME: import.meta.env.VITE_APP_SHORT_NAME,
        VITE_APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION,
    };

    return {
        body: JSON.stringify(env),
    };
}