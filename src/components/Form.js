import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form' 
import { getShows } from '../modules/findShows/findShowsAction';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500} from 'material-ui/styles/colors';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// validation functions
const required = value => (value == null ? 'Required' : undefined);

const renderTextField = ({ ...input, label, meta: {touched, error}, ...custom }) => (
   <TextField
      {...input}
      {...custom}
      errorText={touched && error}
      floatingLabelText={input.placeholder}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
);

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class Form extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

  return (
      <MuiThemeProvider>
        <form className="showsForm" onSubmit={handleSubmit(this.props.getShows)}>
          <Field 
            name="showTitle" 
            component={renderTextField} 
            type="text" 
            placeholder="Enter a Title" />
          <RaisedButton className="showButton" type="submit" label="Submit" />
        </form>
      </MuiThemeProvider>
    );
  }
}

export default connect(null, { getShows })(reduxForm({
  form: 'form'
})(Form));