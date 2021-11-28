import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { client } from "./graphql/ApolloClient.js";


ReactDOM.render(
  //<React.StrictMode>
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
  //</React.StrictMode>,
document.getElementById('root')
);


