import api from "./api";
import type {IDoor} from "@/models/Doors";

enum ActionPorte {
    OUVRE = "Ouvre",
    FERME = "Ferme",
}

export class DoorsRequests {
    static getDoors(): Promise<Array<IDoor>> {
        return api.get("/portes").then((response) => {
                return response.data;
            }
        );
    }

    static openDoor(id: string, codePorte: string, actionPorte: ActionPorte): Promise<any> {
        return api.post(`/portes/${id}`, {codePorte, actionPorte}).then((response) => {
                return response.data;
            }
        );
    }

    static closeDoor(id: string): Promise<any> {
        return api.post(`/portes/${id}`, {}).then((response) => {
                return response.data;
            }
        );
    }
}
