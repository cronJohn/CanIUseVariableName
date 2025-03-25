<script lang="ts">
    import { onMount } from "svelte";
  let {text = "", speed = 100, done} = $props();

  let displayedText = $state("");
  let index = 0;

  const type = () => {
    if (index < text.length) {
      displayedText += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
        done();
    }
  };

  onMount(() => type());
</script>

<h1 class="c-white font-main overflow-hidden b-r-[2px_red] mb-3">{displayedText}</h1>

