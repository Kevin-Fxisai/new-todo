import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../action/action";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

const todoReducer = (state = initialState, action) => {
    console.log(state, 'action state');

    switch (action.type) {
        case ADD_TODO:

        let newTodos = [
            ...state.todos,
            { id: state.todos.length + 1, text: action.payload }
        ]

        localStorage.setItem('todos', JSON.stringify(newTodos));

        return{
            ...state,
            todos: newTodos
        }

        case EDIT_TODO:

            console.log(state, 'this is state');
            let updatedTodo = state.todos.map(todo =>
                todo.id == action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            )

            localStorage.setItem('todos', JSON.stringify(updatedTodo));

            
            return {
                ...state,
                todos: updatedTodo
            };

        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(ele => ele.id != action.payload) }


        default:
            return state
    }
}

export default todoReducer