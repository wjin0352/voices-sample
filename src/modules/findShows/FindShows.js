import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from '../../components';

class FindShows extends Component {
  render() {
    return (
      <div>
        <Form/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    newShows: state.shows
  }
}

export default connect(mapStateToProps)(FindShows);
