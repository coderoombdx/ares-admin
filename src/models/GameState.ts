export interface GameDescription {
    compteARebours: number,
    timestampFinDuJeu: number,
    messageAide: string,
    electriciteGenerale: "ON" | "OFF",
    derniereAlarme: number,
    scenario1: any,
    scenario: any
}

export interface GameStateInfo {
}

export class UnsetGameState implements GameStateInfo {

}

export class InvalidGameState implements GameStateInfo {

}

export class LoadingGameState implements GameStateInfo {

}

export class ValidGameState implements GameStateInfo {
    compteARebours = 0;
    timestampFinDuJeu = 0;
    messageAide = "";
    electriciteGenerale = "OFF";
    derniereAlarme = 0;
    scenario1 = null;
    scenario = null;

    constructor(game: GameDescription) {
        this.compteARebours = game.compteARebours;
        this.timestampFinDuJeu = game.compteARebours;
        this.messageAide = game.messageAide;
        this.electriciteGenerale = game.electriciteGenerale;
        this.derniereAlarme = game.compteARebours;
        this.scenario1 = game.scenario1;
        this.scenario = game.scenario;
    }
}
