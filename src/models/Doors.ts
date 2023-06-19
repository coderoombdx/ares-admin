export enum EtatPorte {
    FERMEE = "FERMEE",
    OUVERT = "OUVERT"
}

export interface IDoor {
    etat: number,
    id: string,
    code: string
}

export interface DoorsInformation {}


export class UnsetDoors implements DoorsInformation {
}

export class ValidDoors implements DoorsInformation {

    constructor(public doors: Array<IDoor>) {
    }
}
