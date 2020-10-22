import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { Nav, Navbar, NavbarBrand, NavItem, Button, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(logoutAuthedUser());
  }

  render() {
    const { loggedUser } = this.props;

    return (
      <div>
        <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
            <div className="container">
              <NavbarBrand>Would You Rather?</NavbarBrand>
              <Nav navbar className="text-uppercase">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    {" "}
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/new">
                    {" "}
                    New Question
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Leaderboard">
                    {" "}
                    LeaderBoard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    {this.props.authedUser === null ? (
                      <Button
                        type="submit"
                        value="submit"
                        color="primary"
                        onClick={this.handleLogin}
                      >
                        Login
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        value="submit"
                        color="primary"
                        onClick={this.handleLogout}
                      >
                        Logout
                      </Button>
                    )}
                  </NavLink>
                </NavItem>
              </Nav>
              <Label>
                <h4 className="text-white">Hi {loggedUser.name} ! </h4>
              </Label>
              <div
                className="myimg-thumbnail"
                style={{ backgroundImage: `url(${loggedUser.avatarURL})` }}
              />
            </div>
          </Navbar>
        </React.Fragment>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    loggedUser: users[authedUser],
  };
}

export default connect(mapStateToProps)(Header);
