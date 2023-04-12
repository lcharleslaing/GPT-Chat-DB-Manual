import { writable } from 'svelte/store';

function getStoredTheme() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') || 'light';
    }
    return 'light';
}

export const theme = writable(getStoredTheme());

theme.subscribe(($theme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', $theme);
        document.documentElement.setAttribute('data-theme', $theme);
    }
});