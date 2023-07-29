import { createSelector } from '@reduxjs/toolkit'
import { connect, useDispatch } from 'react-redux'

import { doneTodo, deleteTodo, TodoItem } from '../../redux/todo/todoSlice'
import {VisibilityFilters} from '../../redux/todo/filterSlice'

function TodoList({todos}: {todos: TodoItem[]}) {
    // const todos = useSelector((state: any) => state.todos) // 直接获取对应 state
    const dispatch = useDispatch()

    const listItemClassName = (todo: TodoItem) => {
        return todo.completed ? 'list-group-item list-group-item-dark' : 'list-group-item'
    }

    return (
        <div>
            <ul className='list-group'>
                {
                    todos.map((todo: TodoItem) => (
                        <li key={todo.id} className={listItemClassName(todo)}>
                            {todo.text}
                            <span style={{ float: 'right' }}>
                                <button className='btn btn-info btn-sm' onClick={() => { dispatch(doneTodo(todo.id)) }} >完成</button>
                                <button className='btn btn-danger btn-sm' onClick={() => { dispatch(deleteTodo(todo.id)) }}>删除</button>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// const selectTodos = createSelector(
//     (state: any) => state.todos,
//     (todos) => todos
// )
const selectTodos = createSelector(
    [
        (state: any) => state.todos, 
        (state: any) => state.filter,
    ],
    (todos, visibilityFilter) => {
        switch (visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                return todos
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter((todo: TodoItem) => todo.completed)
            case VisibilityFilters.SHOW_UNCOMPLETED:
                return todos.filter((todo: TodoItem) => !todo.completed)
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)

export default connect((state) => ({ todos: selectTodos(state) }), { doneTodo, deleteTodo })(TodoList)
