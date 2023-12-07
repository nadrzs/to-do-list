import { Injectable } from '@angular/core'

interface Todo { 
    id: number;
    description: string
}

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor() {
        //
    }

    public getTodos(): Todo[] {
        return [];
    }

    public createTodo(todo: Todo) {
        // Do something
        return {}        
    }

    public updateTodo(todo: Todo) {
        // Do something        
        return {}        
    }

    public deleteTodo(todo: Todo) {
        // Do something
        return {}        
    }
}