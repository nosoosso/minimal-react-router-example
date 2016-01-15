import React from 'react';
import ReactDom from 'react-dom'

import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Index from './component/index.jsx'
import Hoge from './component/hoge.jsx'
import Fuga from './component/fuga.jsx'

window.App = {
    render: function () {
        ReactDom.render(
            <Router history={createBrowserHistory()}>
                <Route path="/" component={Index}>
                    <Route path="hoge" component={Hoge}/>
                    <Route path="fuga" component={Fuga}/>
                </Route>
            </Router>,
            document.getElementById('root')
        );
    }
};
