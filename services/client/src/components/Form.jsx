import React from 'react';
import { Redirect } from 'react-router-dom';


const Form = (props) => {
  // new
  if (props.isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <h1 className="title is-1">{props.formType}</h1>
      <hr/><br/>
      <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        {props.formType === 'Register' &&
          <div className="field">
            <input
              name="username"
              className="input is-medium"
              type="text"
              placeholder="Enter a username"
              required
              value={props.formData.username}
              onChange={props.handleFormChange}
            />
          </div>
        }
        <div className="field">
          <input
            name="email"
            className="input is-medium"
            type="email"
            placeholder="Enter an email address"
            required
            value={props.formData.email}
            onChange={props.handleFormChange}
          />
        </div>
        <div className="field">
          <input
            name="password"
            className="input is-medium"
            type="password"
            placeholder="Enter a password"
            required
            value={props.formData.password}
            onChange={props.handleFormChange}
          />
        </div>
        <input
          type="submit"
          className="button is-primary is-medium is-fullwidth"
          value="Submit"
        />
      </form>
    </div>
  )
};

export default Form;
