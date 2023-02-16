
export enum EtatPorte {
    FERMEE = "FERMEE",
    OUVERT = "OUVERT"
}

export interface Scenario {
    porte1: EtatPorte
}

export interface GameDescription {
    compteARebours: number,
    timestampFinDuJeu: number,
    messageAide: string,
    electriciteGenerale: "ON" | "OFF",
    derniereAlarme: number,
    scenario1: Scenario,
    scenario2: Scenario
}

export interface GameStateInfo {
}

export class UnsetGameState implements GameStateInfo {

}

export class ValidGameState implements GameStateInfo {
    compteARebours = 0;
    timestampFinDuJeu = 0;
    messageAide = "";
    electriciteGenerale = "OFF";
    derniereAlarme = 0;
    scenario1: Scenario | null = null;
    scenario2: Scenario | null = null;

    constructor(game: GameDescription) {
        this.compteARebours = game.compteARebours;
        this.timestampFinDuJeu = game.compteARebours;
        this.messageAide = game.messageAide;
        this.electriciteGenerale = game.electriciteGenerale;
        this.derniereAlarme = game.compteARebours;
        this.scenario1 = game.scenario1;
        this.scenario2 = game.scenario2;
    }
}
