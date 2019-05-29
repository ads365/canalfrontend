import React, { Component } from "react";
import getWeb3 from "../utils/getWeb3";
import CanalLogo from '../images/canalother1.png';
import { Chip } from 'react-mdl';

import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';

import "../App.css";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import Instructions from '../pdfs/canal-instructions.pdf'

const etherscanBaseUrl = "https://ropsten.etherscan.io";

const contractAddr = '0x90049f0dDCD4D39c5AC1F9e62EBA2C833A15Ed1D';
const abi = [{"constant":true,"inputs":[],"name":"raisedBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_adminStake","type":"uint256"},{"name":"_adminCarry","type":"uint256"}],"name":"setFundScheme","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isContributor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"stake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_adminP","type":"uint256"},{"name":"_raiseP","type":"uint256"},{"name":"_opperateP","type":"uint256"},{"name":"_liquidP","type":"uint256"}],"name":"setTimePeriods","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"adminRefund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contributors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"contributorDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"adminP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"raiseP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"opperateP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"contributorRefund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"pullToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"liquidP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"checkBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"backupAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"adminStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endBalanceLogged","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adminDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"logEndBal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"contributorClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hasClaimed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adminClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_reserve","type":"address"}],"name":"setReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContributors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contributor","type":"address"}],"name":"removeContributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contributor","type":"address"}],"name":"addContributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adminCarry","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"pullEther","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"reserve","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"timePeriodsSet","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"adminStaked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"},{"name":"_backupAdmin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_contributor","type":"address"}],"name":"ContributorAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_contributor","type":"address"}],"name":"ContributorRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ContributorDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_contributor","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ContributorDepositReturn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"AdminDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"AdminDepositReturned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenPulled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherPulled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"}];


class Beta extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      fwInstance: undefined,
      contributeAmount: undefined,
      etherscanLink: "https://ropsten.etherscan.io",
      account: null,
      web3: null
    }

    this.handleContribution = this.handleContribution.bind(this)
    this.handleClaim = this.handleClaim.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const instance = new web3.eth.Contract(abi, contractAddr);

      //raisedBal

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ fwInstance: instance, web3: web3, account: accounts[0]})
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  // Handle form data change

  handleChange(event)
  {
    switch(event.target.name) {
        case "contributeAmount":
            this.setState({"contributeAmount": event.target.value})
            break;
        default:
            break;
    }
  }

  async handleContribution(event)
   {
     if (typeof this.state.fwInstance !== 'undefined') {
       event.preventDefault();

       await this.state.fwInstance.methods.contributorDeposit().send({from: this.state.account, value: this.state.web3.utils.toWei(this.state.contributeAmount, 'ether')})
     }
   }

 async handleClaim(event)
  {
    if (typeof this.state.fwInstance !== 'undefined') {
      event.preventDefault();

      await this.state.fwInstance.methods.contributorClaim().send({from: this.state.account})
    }
  }


  setLastTransactionDetails(result)
    {
      if(result.tx !== 'undefined')
      {
        this.setState({etherscanLink: etherscanBaseUrl+"/tx/"+result.tx})
      }
      else
      {
        this.setState({etherscanLink: etherscanBaseUrl})
      }
    }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      console.log(this.state.raisedBal),
      <div className="beta">
        <Grid>
          <Row>
            <a href="/">
              <img className="beta-canal-logo" src={CanalLogo} alt=""/>
            </a>
          </Row>
          <Row className="beta-title">
            <h4>Contributor Beta</h4>
          </Row>
          <Row>
            <Chip>This Project Is In A Closed Beta. Use At Your Own Risk.</Chip>
          </Row>
          <br/>
          <Row className="instructions-row">
            <a className="instructions" href={Instructions}>Help/Instructions</a>
          </Row>
          <Row className="contribution-row">
            <Panel>
              <Panel.Heading style={{backgroundColor:"#c1d5f2", fontWeight:"bold", fontSize:"17px", letterSpacing:"0.5px"}}>Make Contribution</Panel.Heading>
              <Form onSubmit={this.handleContribution}>
                  <FormGroup controlId="fromCreateBounty">
                    <FormControl
                      type="text"
                      name="contributeAmount"
                      value={this.state.contributeAmount}
                      placeholder="Enter Contribution Amount In Ether"
                      onChange={this.handleChange}/>
                    <HelpBlock style={{color:"#333", fontSize:"14px"}}>Enter contribution amount in Ether in the field above. For example if you wish to conribute 1.5 Ether enter "1.5" above and then click "Contribute".</HelpBlock><br/>
                    <Button className="beta-button" type="submit">Contribute</Button>
                  </FormGroup>
              </Form>
            </Panel>
          </Row>
          <Row className="claim-row">
            <Panel>
              <Panel.Heading style={{backgroundColor:"#c1d5f2", fontWeight:"bold", fontSize:"17px", letterSpacing:"0.5px"}}>Claim Funds</Panel.Heading>
              <Form onSubmit={this.handleClaim}>
                  <FormGroup controlId="fromCreateBounty">
                    <HelpBlock style={{color:"#333", fontSize:"14px"}}>Click the "Claim" button below to claim your funds - note this can only be done in the claim period.</HelpBlock><br/>
                    <Button className="beta-button" type="submit">Claim</Button>
                  </FormGroup>
              </Form>
            </Panel>
          </Row>
          <Row className="contract-link">
            <a className="contract-link-text" href={"https://ropsten.etherscan.io/address/"+this.state.fwInstance.address} target="_blank" rel="noopener noreferrer">Etherscan Link To Smart Contract</a>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Beta;
