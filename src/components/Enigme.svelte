<script lang="ts">
    import {type Enigme} from "@/models/GameState.ts";
    import {EnigmesRequests} from "@/api/EnigmesRequests.ts";
    import Button from "@/components/Bouton.svelte"

    export let enigme: Enigme

    const resoudre = () => {
        EnigmesRequests.resolveEnigme(enigme.id, enigme.code)
    }
    const reset = () => {
        EnigmesRequests.resetEnigme(enigme.id)
    }

    $: resolu = enigme?.resolu ? "✓" : "🗙"
</script>

<div>
    {#if enigme !== null}
        <span class="pb-2" id={`description-${enigme.id}`}>{enigme.description}
            <span
                    class={enigme.resolu ? "resolved" : "to-achieve"}
            >
            {resolu}
        </span></span>

        <div class="d-flex flex-row w-100 mb-3 mt-1">
            <Button onClickButton={resoudre} label="Résoudre" state="SEND"></Button>
            <Button onClickButton={reset} label="Reset" state="RESET"></Button>
        </div>
    {/if}
</div>

<style>
    p {
        color: #ffffff;
        font-size: 12px;
    }

    span {
        color: #9b9b9b;
        font-size: 12px;
    }

    .d-flex {
        gap: 10px
    }

    .to-achieve {
        color: #f56464;
    }

    .resolved {
        color: #aff564;
    }
</style>
