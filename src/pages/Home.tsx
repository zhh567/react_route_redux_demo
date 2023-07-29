import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h2>Home 页面内容</h2>
            <div>
                <ul className='nav nav-tabs'>
                    <li>
                        {/* 可省略父级路由 等于 to='/home/news' */}
                        <NavLink className='list-group-item' to='news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className='list-group-item' to='messages'>Message</NavLink>
                    </li>
                </ul>
            </div>
            {/* 指定路由组件呈现位置 */}
            <Outlet ></Outlet>
        </div>
    )
}
