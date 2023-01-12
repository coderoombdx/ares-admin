import api from "./api";

export class DroneRequest {
    static postVolDrone(): Promise<any> {
        return api.post("/vol", {}).then((response) => {
                return response.data;
            }
        );
    }
}
