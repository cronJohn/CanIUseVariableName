<script lang="ts">
    import "/src/global.css";
    import {flip} from "svelte/animate";
    import {scale} from "svelte/transition";

    import { getAllValidLanguages } from "$lib/validators/utils";

    var inputName: string = $state("");
    var languages: string[] = $state([]);

    $inspect(languages);

</script>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>

<main class="flex flex-col w-100vw mt-25vh mb-4 justify-center items-center">
    <h1 class="c-white font-main mb-3">Enter variable name</h1>
    <input type="text" autofocus bind:value={inputName} oninput={async () => {
        languages = await getAllValidLanguages(inputName);
    }}
    class="rounded border-none font-main w-300px font-size-1.5em text-center py-.2em" />
</main>

<div class="flex w-100vw flex-col justify-center items-center mb-7">
    {#each languages as language, i (language)}
        <h2 class="c-white bg-#2a2a2b rounded w-300px text-center py-2.5 m-1.3 px-2 font-main"
        in:scale={{ start: 0.5, delay: (100 * i), duration: 500 }}
        animate:flip={{duration: 500 }}>{language}</h2>
    {/each}
</div>

<footer class="w-100vw text-center bg-#4D4D4D">
    <a href="https://www.flaticon.com/free-icons/code" title="code icons" class="c-white font-main">Favicon created by Royyan Wijaya - Flaticon</a>
</footer>

