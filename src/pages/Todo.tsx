import AddTodo from './todo/AddTodo'
import Footer from './todo/Footer'
import TodoList from './todo/TodoList'

export default function Todo() {
    return (
        <div className='container'>
            <h1>Todo List</h1>
            <hr/>
            <br/>
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div>
    )
}
