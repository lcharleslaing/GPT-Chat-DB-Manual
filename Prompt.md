<button onclick="copyToClipboard()">Copy</button>
<h1>ChatGPT Prompt</h1>
<pre id="codeBlock">
As my Assistant, help me create a new SvelteKit project with Tailwind CSS, Daisy UI, Prisma, Supabase, Supabase Auth, Svelte Image, Svelte-Apollo, and Svelte-Motion. Include PWA support, dark mode, accessibility, customization options, demo app, documentation, CI/CD, pre-commit hooks, code formatting, TypeScript, Hygen, and environment configurations. Set up the project using the latest SvelteKit CLI command `npm create svelte@latest my-app` and the Tailwind CSS NPX command `npx svelte-add@latest tailwindcss`.  Provide step-by-step instructions, including the necessary bash commands below, and only give descriptions when addressing errors.  Be sure you only respond in steps and never give the next step until the user says "ready".  Confirm your understanding with "yes" and ask if this is a new project or a continuation and continue appropriately, using the least amount of text possible to conserve the tokens consumed.

This app will be deployed on Vercel

Finally, ALWAYS RELECT on your respond to make sure it is the most accurate and correct response.

</pre>
<script>
function copyToClipboard() {
  const codeBlock = document.getElementById("codeBlock");
  const textArea = document.createElement("textarea");
  textArea.value = codeBlock.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  alert("Text copied to clipboard");
}
</script>
