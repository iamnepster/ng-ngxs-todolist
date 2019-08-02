import { Todo } from '../models/todo.model';

export class AddTodo {
    static readonly type = '[TODO] ADD';

    constructor(public payload: string) {}
}

export class DeleteTodo {
    static readonly type = '[TODO] REMOVE';

    constructor(public payload: number) {}
}

export class ToggleTodo {
    static readonly type = '[TODO] TOGGLE';

    constructor(public payload: number) {}
}