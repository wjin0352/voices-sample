import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form' 
import { getShows } from '../modules/findShows/findShowsAction';


const renderFieldInput = ({ input, label, meta: { touched, warning, error }}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} />
    </div>
    { touched && (error && <div className="text-help">{error}</div>)}
  </div>
)

// URL: /search/shows?q=:query
// Example: http://api.tvmaze.com/search/shows?q=girls

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;

  return (
      <form onSubmit={handleSubmit(this.props.getShows)}>
        <Field name="showTitle" label="Show Title" component={renderFieldInput} type="text" placeholder="Show Title" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default connect(null, { getShows })(reduxForm({
  form: 'form'
})(Form));