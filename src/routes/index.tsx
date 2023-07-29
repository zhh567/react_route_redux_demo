import { Navigate } from "react-router-dom";

import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Messages from "../pages/Messages"
import Detail from "../pages/Detail"
import Todo from "../pages/Todo"

const reoutes = [
    {
        path: '/',
        element: <Navigate to='/home'/> 
    },
    {
        path: '/about',
        element: <About /> 
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'messages',
                element: <Messages />,
                children: [
                    {
                        path: ':id',
                        element: <Detail/>
                    },
                ]
            }
        ]
    },
    {
        path: '/todo',
        element: <Todo/>
    }    
]

export default reoutes