import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, other } from "../redux/counter/counterSlice"

export default function News() {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                <li>News01</li>
                <li>News02</li>
                <li>News03</li>
            </ul>
            <br />
            <div>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(other())}>network request</button>
            </div>
        </div>
    )
}
