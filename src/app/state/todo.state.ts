import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import { AddTodo, DeleteTodo, ToggleTodo } from '../actions/todo.actions';

export class TodoStateModel {
    todos: Todo[];
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: []
    }
})
export class TodoState {
    index: number = 0;

    @Selector()
    static getTodos(state: TodoStateModel) {
        return state.todos;
    }

    @Action(AddTodo)
    addEventListener({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
        patchState({
            todos: [...getState().todos, {
                id: this.index++,
                text: payload,
                completed: false
            }]
        });
    }

    @Action(DeleteTodo)
    delete({ getState, patchState }: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
        patchState({
            todos: getState().todos.filter(todo => todo.id !== payload)
        });
    }

    @Action(ToggleTodo)
    toggle({ getState, patchState }: StateContext<TodoStateModel>, { payload }: ToggleTodo) {
        patchState({
            todos: getState().todos.map(todo => {
                if(todo.id === payload) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }
}