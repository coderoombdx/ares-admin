import api from "./api";

export class MessageRequest {
    static postMessage(message: string): Promise<any> {
        return api.post("/messageAide", { message }).then((response) => {
                return response.data;
            }
        );
    }
}
