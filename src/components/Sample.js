import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sample extends Component {
  render() {
    return (
      <div>
        <h1>Samples page</h1>
        
      </div>
    );
  }
}

export default connect(null)(Sample);