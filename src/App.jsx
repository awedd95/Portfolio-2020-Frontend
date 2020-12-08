import React, { useState, useCallback, Suspense } from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom"
import Home from './views/home'
import Blog from './views/blog'
import { Spin, Layout } from 'antd';
import NavBar from './components/navBar'

const {Header, Content} = Layout;

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const App = () => {
    //const current = useLocation();
  return (
        <>
                <Layout theme="dark">
            <Router>
                    <Header className="header" theme="dark">
                        <NavBar />
                    </Header>
                    <Content>
                        <Switch>
                            <Route path="/about-me"> 
                                <h1>Hello</h1>
                            </Route>
                            <Route path="/projects"> 
                                <Suspense fallback={<Spin />}>
                                    <h1>Hello</h1>
                                </Suspense>
                            </Route>
                            <Route path="/blog"> 
                                <Suspense fallback={<Spin />}>
                                    <Blog/>
                                </Suspense>
                            </Route>
                            <Route path="/"> 
                                <Home/>
                            </Route>
                        </Switch>
                    </Content>
            </Router>
                </Layout>
        </>  
  )
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >
)
