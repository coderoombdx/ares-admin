<script>
    import {CompteAReboursRequests} from "@/api/CompteAReboursRequests.ts";

    let value = "";
    let addedSecList = []
    const addTime = () => {
        CompteAReboursRequests.updateCompteARebours(value).then(() => {
            addedSecList.push(value)
            value = "";
        })
    }
</script>

<div>
    <input placeholder="temps additionnel (en sec)" bind:value={value} />
    <button on:click={addTime} disabled={value === ""} >Ajouter</button>
</div>

<style>
    textarea {
        width: 100%;
        height: 200px;
    }
</style>
