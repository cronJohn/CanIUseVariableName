<script lang="ts">
    import "/src/global.css";
    import {flip} from "svelte/animate";
    import {scale} from "svelte/transition";
    import {cubicOut} from "svelte/easing";

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

<main class="flex min-h-screen flex-col mb-10">
    <section class="flex flex-col w-full mt-25vh mb-4 justify-center items-center">
        <h1 class="c-white font-main mb-3">Enter variable name</h1>
        <input type="text" autofocus bind:value={inputName} oninput={async () => {
            languages = await getAllValidLanguages(inputName);
        }}
        class="rounded border-none font-main w-300px font-size-1.5em text-center py-.2em" />
    </section>

    <section class="flex flex-col justify-center items-center">
        {#each languages as language, i (language)}
            <h2 class="c-white relative bg-#2a2a2b rounded w-300px text-center py-2.5 m-1.3 px-2 font-main"
            transition:scale={{ start: 0.5, delay: (100 * i), duration: 400, easing: cubicOut }} 
            animate:flip={{duration: 500 }}>{language}</h2>
        {/each}
    </section>
</main>
