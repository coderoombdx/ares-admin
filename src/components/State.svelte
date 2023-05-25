<script lang="ts">
    import {Etat} from "@/models/GameState.ts";

    export let state;
    export let size: "L" | "XS" = "L";
</script>

<div>
    <div
            class="module-state"
            class:module-adebuter={state === Etat.ADEBUTER}
            class:module-encours={state === Etat.ENCOURS}
            class:module-termine={state === Etat.TERMINE}
            class:module-large={size === "L" }
            class:module-small={size === "XS" }
    >
    </div>

</div>

<style>
    .module-state {
        border-radius: 50%;
        background-color: #f1f1f1;
    }

    .module-adebuter {
        background-color: #c70000;
    }

    .module-encours {
        background-color: #ff995f;
    }

    .module-termine {
        background-color: #72d352;
    }

    .module-large {
        width: 20px;
        height: 20px;
    }

    .module-small {
        width: 10px;
        height: 10px;
    }
</style>
