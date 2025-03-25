<script lang="ts">
    import "/src/global.css";
    import {flip} from "svelte/animate";
    import {scale} from "svelte/transition";
    import {cubicOut} from "svelte/easing";

    import { getAllValidLanguages } from "$lib/validators/utils";
    import { validatorLibrary } from "$lib/validators/langs";

    var inputName: string = $state("");

    var validLanguages: string[] = $state([]);
    var invalidLanguages = $derived(Object.keys(validatorLibrary).filter((language) => !validLanguages.includes(language)));

    var displayValid: boolean = $state(true);

    // Since you can switch between valid and invalid languages, we need to keep track of the target length
    const targetLanguageLength = $derived(displayValid ? validLanguages.length: invalidLanguages.length);

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
            validLanguages = await getAllValidLanguages(inputName);
        }}
        class:invalid={inputName.length > 0 && targetLanguageLength == 0}
        class:valid={targetLanguageLength > 0}
        class="rounded border-none font-main w-300px font-size-1.5em text-center py-.2em" />
        <button class="relative mt-1 bg-transparent b-none rounded-md text-sm tracking-wider font-main
                       underline underline-offset-3"
        class:c-green={displayValid}
        class:c-red={!displayValid}
        class:hidden={inputName.length == 0}
        onclick={() => displayValid = !displayValid}
        >
            {#if displayValid}
                Valid for
            {:else}
                Invalid for
            {/if}
        </button>
    </section>

    {#if displayValid}
        {@render displayLanguages(validLanguages)}
    {:else}
        {@render displayLanguages(invalidLanguages)}
    {/if}
</main>

{#snippet displayLanguages(languages: string[])}
    <section class="flex flex-gap-2 flex-wrap w-500px">
        {#each languages as language, i (language)}
            <div
            in:scale|global={{ start: 0, delay: (70 * i), duration: 300, easing: cubicOut }} 
            out:scale|global={{ start: 0, duration: 300, easing: cubicOut }}
            animate:flip={{duration: 500 }}
            class="c-white relative bg-#2a2a2b rounded flex-[1_0_200px] flex flex-justify-between items-center"
            >
                <h2 class=" text-center py-2.5 m-1.3 px-2 font-main">{language}</h2>
                <div class="i-skill-icons:{getIconName(language)} size-50px"></div>
            </div>
        {/each}
    </section>
{/snippet}
