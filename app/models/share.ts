export interface IShare {
    name: string;
}

export class Share implements IShare {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}