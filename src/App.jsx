import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header/Header.jsx';
import { store } from './store'
import Home from './pages/Home';
import Detail from './pages/Detail/loadable'
import Login from './pages/Login';
import Witer from './pages/Witer';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route path='/' exact component={Home} />
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/login' component={Login} />
                        <Route path='/witer' component={Witer} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;