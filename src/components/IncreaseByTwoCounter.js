import React, { Component } from "react"
import { increaseByTwoCounter } from "../redux/actions/counterActions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.props.dispatch(increaseByTwoCounter())
          }}
        >2 arttir</button>
      </div>
    )
  }
}
function mapDispatchtoProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}
export default connect(mapDispatchtoProps)(IncreaseByTwoCounter)
