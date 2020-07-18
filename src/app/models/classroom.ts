export class Classroom {
    ID: number;
    RoomName: string;
    Capactiy: number;
    Checkins: number;
    isCheckedIn: boolean;

    constructor(ID: number,
        RoomName: string,
        Capactiy: number,
        Checkins: number,
        isCheckedIn: boolean)
    {
        this.ID = ID;
        this.RoomName = RoomName;
        this.Capactiy = Capactiy;
        this.Checkins = Checkins;
        this.isCheckedIn = isCheckedIn;
    }

    getAvailable(): number {
        return this.Capactiy - this.Checkins;
    }
}