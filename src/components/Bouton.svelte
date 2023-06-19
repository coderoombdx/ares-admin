<script lang="ts">
    export let label: string
    export let state: "RESET" | "SEND"
    export let onClickButton: Function = () => {}

    const onClick = () => {
       console.log("onClick ")
        onClickButton()
    }
</script>

   <button
           role="button"
        class="button"
        class:button-reset={state === "RESET"}
        class:button-send={state === "SEND"}
        on:click={onClick}
   >
   </button>

<style>
    p {
        color: #ffffff;
        font-size: 12px;
    }

    .button {
        border-radius: 10px;
        height: 15px;
        width: 15px;
        text-align: center;
    }
    .button-reset {
        background-color: #f56464;
    }
    .button-send {
        background-color: #aff564;
    }
</style>
