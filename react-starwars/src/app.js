import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import reducer from './reducer';
import { getCharacters } from './reducer/characters/actions';
import App from './components/App.js';

require('./index.html');

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(getCharacters());

const container = document.querySelector('#app-container');

ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    , container
);

// Hot module reloading
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppContainer>
        , container
        );
    });
}