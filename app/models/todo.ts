import { IShare } from '../models/share';

export interface ITodo {
    id: string;
    title: string;
    date: string;
    description: string;
    completed?: boolean;
    share?: Array<IShare>
}

export class Todo implements ITodo {
    id: string;
    title: string;
    date: string;
    description: string;
    completed: boolean;
    share: Array<IShare>;

    constructor(id: string, title: string, date: string, description: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.completed = false;
        this.share = [];
    }
}