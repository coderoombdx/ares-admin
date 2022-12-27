import api from "./api";

export class CompteAReboursRequests {
    static updateCompteARebours(compteARebours: number): Promise<any> {
        return api.post("/compteARebours", {
            compteARebours: {
                delta: compteARebours
            }
        }).then((response) => {
                return response.data;
            }
        );
    }

    static resetCompteARebours(): Promise<any> {
        return api.delete("/compteARebours").then((response) => {
                return response.data;
            }
        );
    }
}
