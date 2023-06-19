import api from "./api";

export class EnigmesRequests {
    static resolveEnigme(id: string, code: string | null): Promise<any> {
        return api.post(`/enigmes/${id}`, {code}).then((response) => {
                return response.data;
            }
        );
    }

    static resetEnigme(id: string): Promise<any> {
        return api.delete(`/enigmes/${id}`).then((response) => {
                return response.data;
            }
        );
    }
}
