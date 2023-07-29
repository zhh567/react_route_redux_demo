import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>  {/* 通过 Provider 组件将 store 传递给所有的容器组件 */}
            <BrowserRouter>       {/* 通过 BrowserRouter 组件将路由相关的对象传递给所有的容器组件 */}
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

