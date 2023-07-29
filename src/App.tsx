import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom'

import routes from './routes'
import Header from './components/Header';

export default function App(props: React.PropsWithChildren<{}>) {

    // 激活样式
    const activateClassName = ({ isActive }: { isActive: boolean; }) => {
        return isActive ? 'list-group-item active' : 'list-group-item';
    }

    // 根据路由表生成路由组件
    const elementsRoutes = useRoutes(routes)

    return (
        <div className='container'>
            <div className='row'>
                <Header />
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='list-group'>
                        {/* 路由链接 */}
                        <NavLink className={activateClassName} to='/about'>About</NavLink>
                        <NavLink className={activateClassName} end to='/home'>Home</NavLink>
                        <NavLink className={activateClassName} to='/todo'>Todo List</NavLink>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='panel'>
                        <div className='panel-body'>
                            {/* 注册路由，此处 Navigate 只要渲染，就自动跳转到 /home，实现重定向功能 */}
                            {/* <Routes>
                                <Route path='/about' caseSensitive={true} element={<About />} />
                                <Route path='/home' element={<Home />} />
                                <Route path='/' element={<Navigate to='/home' />} />
                            </Routes> */}
                            {elementsRoutes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
