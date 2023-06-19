<script>
    import {GameStateRequests} from "@/api/GameStateRequests.ts";
    import {gameState, setGame} from "@/store/GameState.ts";
    import {ValidGameState} from "@/models/GameState.ts";
    import PostMessage from "@/components/PostMessage.svelte";
    import Timer from "@/components/Timer.svelte";
    import Alarm from "@/components/Alarm.svelte";
    import AllStates from "@/components/AllStates.svelte";
    import LaunchDrone from "@/components/LaunchDrone.svelte";

    const interval = setInterval(() =>
        GameStateRequests.getGameState().then(gameDescription => setGame(gameDescription)), 1000);

</script>

<svelte:head>
    <title>Ares Game Administrator</title>
    <meta name="description" content="Ares administrator app"/>
</svelte:head>

<div class="">
    {#if $gameState instanceof ValidGameState}

        <div class="d-flex flex-row  align-content-stretch w-100 pt-3 ">
            <div class="mx-2 px-5 py-5 bg-white bg-opacity-50  justify-content-center align-items-center d-flex">
                <LaunchDrone/>
            </div>
            <div class="mx-2 px-5 py-5 bg-white bg-opacity-50">
                <Timer time={ $gameState.compteARebours }/>
            </div>
            <div class="mx-2 px-5 py-5 bg-white bg-opacity-50  justify-content-center align-items-center d-flex">
                <PostMessage/>
            </div>
            <div class="mx-2 px-5 py-5 bg-white bg-opacity-50  justify-content-center align-items-center d-flex">
                <Alarm time={ $gameState.derniereAlarme }/>
            </div>
        </div>
        <div>
            <div class="d-flex flex-row">
                {#each Object.entries($gameState.scenarios) as scenario, index}
                    <div class="d-flex flex-column bg-white bg-opacity-50  justify-content-center align-items-center my-5 mx-2 w-100"
                         key={index}>
                        <p class="text-white pt-2">Scénario {index}</p>
                        <div class=" d-flex flex-row px-5 py25 " key={index}>
                            {#each scenario[1] as module, index}
                                <div key="{index}" class="my-2">
                                    <AllStates
                                            module="{module}"
                                            id={module.id}
                                            title={module.description}
                                            enigmes={module.enigmes}
                                            state={module.etat}
                                    />
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>
