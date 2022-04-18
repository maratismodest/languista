import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { AppProvider } from './context/AppContext';
import reportWebVitals from './reportWebVitals';

// const client = new ApolloClient({
//     uri: 'http://localhost:4000/graphql',
//     cache: new InMemoryCache()
// })
const client = new ApolloClient({
    uri: 'http://80.78.253.184:4000/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <React.StrictMode>
         <ApolloProvider client={client}>
        <Router>
            <AppProvider>
                <App/>
            </AppProvider>
        </Router>
         </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
