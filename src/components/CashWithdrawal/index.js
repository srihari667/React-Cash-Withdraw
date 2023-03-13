// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onDenominationReduce = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="profile-container">
            <div className="profile-image">
              <p className="s">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="cash-container">
              <p className="balance">{cash}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw"> Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denomination={eachDenomination}
                key={eachDenomination.id}
                onDenominationReduce={this.onDenominationReduce}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
