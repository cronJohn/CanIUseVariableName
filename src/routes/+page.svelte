<script lang="ts">
    import "/src/global.css";
    import {flip} from "svelte/animate";
    import {scale} from "svelte/transition";
    import {cubicOut} from "svelte/easing";

    import { getAllValidLanguages } from "$lib/validators/utils";
    import { validatorLibrary } from "$lib/validators/langs";

    var inputName: string = $state("");
    var languages: string[] = $state([]);

    $inspect(languages);

    const getIconName = (language: string) => {
        return validatorLibrary[language].iconName || language.toLowerCase();
    }

</script>

<style>
    :global(body) {
        overflow-x: hidden;
    }

    .valid {
        border: 3px solid green;
    }

    .invalid {
        border: 3px solid red;
    }
</style>

<main class="flex min-h-screen flex-col items-center mb-10">
    <section class="flex flex-col w-full mt-25vh justify-center items-center">
        <h1 class="c-white font-main mb-3">Enter variable name</h1>
        <input type="text" autofocus bind:value={inputName} oninput={async () => {
            languages = await getAllValidLanguages(inputName);
        }}
        class:invalid={inputName.length > 0 && languages.length == 0}
        class:valid={languages.length > 0}
        class="rounded border-none font-main w-300px font-size-1.5em text-center py-.2em" />
        <span class="relative mt-1 rounded-md text-sm tracking-wider font-main font-bold"
        class:c-green={languages.length > 0}
        class:c-red={inputName.length > 0 && languages.length == 0}
        >
            {#if languages.length > 0}
                Valid
            {:else if inputName.length > 0}
                Invalid
            {/if}
        </span>
    </section>

    <section class="flex flex-gap-2 flex-wrap w-500px">
        {#each languages as language, i (language)}
            <div
            in:scale={{ start: 0, delay: (70 * i), duration: 300, easing: cubicOut }} 
            out:scale={{ start: 0, duration: 300, easing: cubicOut }}
            animate:flip={{duration: 500 }}
            class="c-white relative bg-#2a2a2b rounded flex-[1_0_200px] flex flex-justify-between items-center"
            >
                <h2 class=" text-center py-2.5 m-1.3 px-2 font-main">{language}</h2>
                <div class="i-skill-icons:{getIconName(language)} size-50px"></div>
            </div>
        {/each}
    </section>
</main>
