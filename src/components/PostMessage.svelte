<script>
    import {MessageRequest} from "@/api/MessageRequest.ts";

    let value = "";
    let messagesList = []
    const postMessage = () => {
        MessageRequest.postMessage(value).then(() => {
            messagesList.push(value)
            value = "";
        })
    }
</script>

<div>
    <textarea placeholder="taper votre message..." bind:value={value}></textarea>
    <button on:click={postMessage} disabled={value === ""} >Envoyer</button>
</div>

<style>
    textarea {
        width: 100%;
        height: 200px;
    }
</style>
