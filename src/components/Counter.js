import React, { Component } from 'react';
// Component'i Reducer'a bagla.
import {connect} from "react-redux"

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

////////////////////////// STATE BAGLAMA //////////////////////////////

// buraya Reducer'dan gelecek state bilgisini gonderirim.
function mapStateToProps(state){
  // state bilgisini counterReducer'dan cek.
  return {counter:state.counterReducer}
}

// Counter'in props'una state'i bagla
export default connect(mapStateToProps)(Counter);