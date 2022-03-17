import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Page: {
            merge: true
          }
        }
      }
    }
  })
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
