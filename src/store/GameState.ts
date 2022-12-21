import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { GameDescription, GameStateInfo } from "@/models/GameState";
import { UnsetGameState, ValidGameState } from "@/models/GameState";


const gameState: Writable<GameStateInfo> = writable(new UnsetGameState());

const setGame = (gameDescription: GameDescription) => gameState.set(new ValidGameState(gameDescription));

export { gameState, setGame };
