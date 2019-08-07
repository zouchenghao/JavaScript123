import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
// const app = dva();
const app = dva({
    history: createHistory(),
    // initialState 里每一个键值必须对应 models 里的相应文件名
    initialState: {
        count: { count: 10 },
        counter: { number: 30 },
        products: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 }
        ]
    },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/counter').default);
app.model(require('./models/products').default);
app.model(require('./models/count').default);
app.model(require('./models/users').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');