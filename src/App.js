import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Layout, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Landing from './components/landing';
import Beta from './components/beta';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';



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
            <footer className="footer">
              <Grid>
                <Row className="footer-text">
                  <p>Canal Pty Ltd &copy; 2019</p>
                </Row>
              </Grid>
            </footer>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
