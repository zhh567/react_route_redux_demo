import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

export default function Messages() {
    const [messages] = useState([
        { id: 1, title: 'Message001', content: '123' },
        { id: 2, title: 'Message002', content: '456' },
        { id: 3, title: 'Message003', content: '789' },
        { id: 4, title: 'Message004', content: 'xxx' }
    ])

    const navigate = useNavigate()

    function showDetail({
        id,
        title,
        content
    }: { id: number, title: string; content: string }) {
        navigate(`/home/messages/${id}?title=${title}`,
            {
                replace: true,
                state: { content: content }
            })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((message) => {
                        return (
                            <li key={message.id}>
                                <Link
                                    to={`/home/messages/${message.id}?title=${message.title}`}
                                    state={{ content: message.content }}
                                >
                                    {message.title}
                                </Link>
                                <button onClick={() => showDetail({ id: message.id, title: message.title, content: message.content })}>点击查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
