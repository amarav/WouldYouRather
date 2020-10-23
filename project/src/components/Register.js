import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../actions/users";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    username: "",
    name: "",
    avatarURL: "",
    gotoLogin: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, name, avatarURL } = this.state;
    this.props.addNewUser(username, name, avatarURL);
    this.setState({ gotoLogin: true });
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState(() => ({ [id]: [value] }));
  };

  render() {
    const { gotoLogin } = this.state;

    if (gotoLogin === true) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
          <section className="page-section bg-light">
            <div className="container-fluid">
              <div className="text-center">
                <h3 className="section-heading text-uppercase">SIGN UP</h3>
              </div>
            </div>
            <br />
            <FormGroup>
              <Label for="userid">User ID</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="optionOne">Avatar URL</Label>
              <Input
                type="text"
                id="avatarUrl"
                placeholder="Avatar URL"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              type="submit"
              id="_submit"
              name="_submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Register
            </Button>
            <Link to="/login">Login Now !!!</Link>
          </section>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (userID, userName, avatarURL) => {
      dispatch(addNewUser(userID, userName, avatarURL));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
