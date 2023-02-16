import api from "./api";

export class MessageRequest {
    static postMessage(message: string): Promise<any> {
        return api.post("/messageAide", { aide: message }).then((response) => {
                return response.data;
            }
        );
    }
}
