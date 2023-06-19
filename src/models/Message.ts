export class Message {
    message = "";
    date = null as Date | null;

    constructor(message: string) {
        this.message = message;
        this.date = new Date();
    }

    getMessageDate() {
        return `${this.date?.getHours().toString().padStart(2, '0')}h${this.date?.getMinutes().toString().padStart(2, '0')}`
    }
}
