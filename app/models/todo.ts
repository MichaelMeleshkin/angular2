export interface ITodo {
    id: string;
    title: string;
    date: string;
    description: string;
    completed?: boolean;
}

export class Todo implements ITodo {
    id: string;
    title: string;
    date: string;
    description: string;
    completed: boolean;

    constructor(id: string, title: string, date: string, description: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.completed = false;
    }

    setId(id: string) {
        this.id = id;
    }

    setTitile(title: string) {
        this.title = title;
    }

    setDate(date: string) {
        this.date = date;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setStatus(completed: boolean) {
        this.completed = completed;
    }
}