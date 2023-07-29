const {createProxyMiddleware} = require('http-proxy-middleware');

// 本地代理，用于处理跨域问题
module.exports = function (app: { use: (arg0: string, arg1: any) => void; }) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.baidu.com',
            changeOrigin: true,
            patchRewrite: { '^/api': '' },
        })
    );
}