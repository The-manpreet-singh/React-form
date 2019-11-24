import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints-bootstrap4';

/* const {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} = ReactFormWithConstraints;
 */
class Form extends React.Component {
  handleChange = e => {
    this.form.validateFields(e.target);
  }

  contactSubmit = e => {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      alert('form is invalid: do not submit');
    } else {
      alert('form is valid: submit successfully');
    }
  }

  render() {
    return (
      <FormWithConstraints
        ref={form => this.form = form}
        onSubmit={this.contactSubmit}
        noValidate>
 
        <div className="col-md-6">
          <input name="name" size="30" placeholder="Name"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="name">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
           
          <input type="email" name="email" size="30" placeholder="Email"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="email">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <input type="password" name="password" size="30" placeholder="password"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="password">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <input name="phone" size="30" placeholder="Phone"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="*" />
          </FieldFeedbacks>

          <input name="address" size="30" placeholder="Address"
                 required onChange={this.handleChange}
                 className="form-control" />
          <FieldFeedbacks for="address">
            <FieldFeedback when="*" />
          </FieldFeedbacks>
        </div>

        <div className="col-md-12">
          <button className="btn btn-lg btn-primary">Submit</button>
        </div>
      </FormWithConstraints>
    );
  }
}

const App = () => (
  <div className="container">
    <br />
    <Form />
  </div>
);

export default App;
