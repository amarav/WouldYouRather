import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "../css/styles.css";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.onNameChange = this.onNameChange.bind(this);

    this.state = {
      isModalOpen: true,
      userName: "",
      register: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const selectedUser =
      state.userName === "" && props.users && props.users.length !== 0
        ? props.users[0].id
        : state.userName;
    if (!props.authedUser && !state.isModalOpen) {
      return {
        userName: selectedUser,
        isModalOpen: true,
        register: false,
      };
    }
    return {
      userName: selectedUser,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    if (!this.state.register)
      this.props.dispatch(setAuthedUser(this.state.userName));
    event.preventDefault();
  }

  onNameChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  render() {
    const { users, authedUser } = this.props;
    if (this.props.authedUser) {
      if (!this.props.location.state) {
        return (
          <Redirect
            to={{
              pathname: "/home",
              state: {
                returnPath: "/home",
              },
            }}
          />
        );
      } else {
        if (this.state.register) {
          return <Redirect to="/Register" />;
        } else {
          return <Redirect to={this.props.location.state.returnPath} />;
        }
      }
    } else {
      if (this.state.register) {
        return <Redirect to="/Register" />;
      }
    }

    return (
      <div>
        <React.Fragment>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="select"
                    onChange={this.onNameChange}
                    value={this.state.userName}
                  >
                    {users.map((e, key) => {
                      return (
                        <option key={key} value={e.value}>
                          {e.id}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={(input) => (this.password = input)}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>{" "}
                &nbsp;&nbsp;&nbsp;
                <Button
                  type="submit"
                  value="submit"
                  color="primary"
                  onClick={() => this.setState({ register: true })}
                >
                  {" "}
                  Register
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          {this.props.authedUser === null ? (
            ""
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  returnPath: "/home",
                },
              }}
            />
          )}
        </React.Fragment>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);
