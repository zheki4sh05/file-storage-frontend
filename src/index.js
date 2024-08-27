import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { setContext } from '@apollo/client/link/context';
import { API_ENDPOINT, AUTH_TOKEN } from "./utils/constants";
const authLink = setContext((_, { headers }) => {
  //const token = localStorage.getItem(AUTH_TOKEN);
  const token = ""
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` :''
    }
  };
});

const client = new ApolloClient({
  uri: authLink.concat(API_ENDPOINT),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
