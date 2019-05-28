import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Layout, Content, Footer} from 'react-mdl';
import Landing from './components/landing';
import Beta from './components/beta';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Layout>
            <Content>
              <div className="page-content">
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <Route path='/beta' component={Beta} />
                </Switch>
              </div>
            </Content>
            <Footer className="footer">
              <p>Canal Pty Ltd &copy; 2019</p>
            </Footer>
          </Layout>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
