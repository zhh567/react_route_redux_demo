import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo/todoSlice'

function AddTodo() {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const clickEvent = () => {
        const value = inputRef.current?.value.trim()
        if (!value) {
            return
        }
        dispatch(addTodo(value))
        inputRef.current!.value = ''
    }

    return (
        <div className='input-group mb-3'>
            <input type="text" ref={inputRef} className='input-group-text'/>
            <button onClick={clickEvent} className='btn btn-success'>添加</button>
        </div>
    )
}

export default connect(null, { addTodo })(AddTodo)