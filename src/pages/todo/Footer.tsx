import { connect, useDispatch } from 'react-redux'

import { setVisibilityFilter, VisibilityFilters } from '../../redux/todo/filterSlice'

function Footer() {
    const dispatch = useDispatch()

    return (
        <div className='row btn-group'>
            <span style={{display: 'flex', alignItems: 'center'}}>Show:</span>
            <button className='btn btn-link' onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)) }}>All</button>
            <button className='btn btn-link' onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_UNCOMPLETED)) }}>UnCompleted</button>
            <button className='btn btn-link' onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)) }}>Completed</button>
        </div>
    )
}

export default connect(null, { setVisibilityFilter })(Footer)