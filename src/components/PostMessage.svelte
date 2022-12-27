<script>
    import {MessageRequest} from "@/api/MessageRequest.ts";
    import {addMessage, messages} from "@/store/GameState.ts";

    let value = "";
    const postMessage = () => {
        console.log("ici ", value)
        MessageRequest.postMessage(value).then(() => {
            addMessage(value)
            value = "";
        })
    }
</script>

<div>
    <textarea placeholder="taper votre message..." bind:value={value}></textarea>
    <button on:click={postMessage} >Envoyer</button>
    {#each $messages as message}
        <p>{message}</p>
    {/each}
</div>

<style>
    textarea {
        width: 100%;
        height: 200px;
    }
</style>
