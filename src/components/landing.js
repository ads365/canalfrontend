import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import CanalLogo from '../images/canalother1.png';
import GitHubLogo from '../images/GitHub-Mark-120px-plus.png';
import KyberLogo from '../images/kyber-logo.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', textAlign: 'center'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={CanalLogo} alt=""/>
            <br/>
            <h3>Enhanching The Flow Of Funds Via Blockchain</h3>
            <br/>
            <h5>View Our Code</h5>
            <a href="https://github.com/Canal-Protocol">
              <img className="git-logo" src={GitHubLogo} alt=""/>
            </a>
            <br/>
            <h5>Powered By Kyber Network</h5>
            <a href="https://kyber.network/">
              <img className="kyber-logo" src={KyberLogo} alt=""/>
            </a>
            <br/>
            <h5>Contact Us</h5>
            <h5>genesis@canalprotocol.com</h5>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
