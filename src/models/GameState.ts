export interface GameDescription {
    compteARebours: number,
    timestampFinDuJeu: number,
    messageAide: string,
    electriciteGenerale: "ON" | "OFF",
    derniereAlarme: number,
    modules: Array<Module>,
}

export interface GameStateInfo {
}

export class UnsetGameState implements GameStateInfo {

}

export interface Enigme {
    "id": string,
    "description": string,
    "resolu": boolean,
    "code": null | string
}

export enum Etat {
    ADEBUTER = "ADEBUTER",
    ENCOURS = "ENCOURS",
    TERMINE = "TERMINE",
}

export interface Module {
    "id": string,
    "idScenario": string,
    "description": string,
    "etat": Etat,
    "enigmes": Array<Enigme>
}

export class ValidGameState implements GameStateInfo {
    compteARebours = 0;
    timestampFinDuJeu = 0;
    messageAide = "";
    electriciteGenerale = "OFF";
    derniereAlarme = 0;
    scenarios = {} as any
    modules = [] as Array<Module>

    constructor(game: GameDescription) {
        this.compteARebours = game.compteARebours;
        this.timestampFinDuJeu = game.compteARebours;
        this.messageAide = game.messageAide;
        this.electriciteGenerale = game.electriciteGenerale;
        this.derniereAlarme = game.compteARebours;
        this.modules = game.modules;
        this.scenarios = this.modules.reduce(function (rv, x) {
            // @ts-ignore
            (rv[x.idScenario] = rv[x.idScenario] || []).push(x);
            return rv;
        }, {})
    }
}
