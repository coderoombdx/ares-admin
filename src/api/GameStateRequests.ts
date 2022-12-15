import api from "./api";

export class GameStateRequests {
    static getGameState(): Promise<any> {
        return api.get("/jeu").then((response) => {
                return response.data;
            }
        );
    }
}
