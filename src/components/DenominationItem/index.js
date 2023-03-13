// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {denomination, onDenominationReduce} = this.props
    const {value} = denomination
    const onReduce = () => {
      onDenominationReduce(value)
    }

    return (
      <li>
        <button type="button" className="reduce-button" onClick={onReduce}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
