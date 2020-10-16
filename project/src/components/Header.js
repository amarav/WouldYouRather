import React, { Component } from "react";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Button,
  Label
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {  
    this.props.dispatch(setAuthedUser(null));
  }
  
  render() {    
    const {users,authedUser} = this.props    
    const username = users.filter( user => user.id === authedUser ).map(user => user.name)[0] 
    
    return (
      <div>
        <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
            <div className="container">           
              <NavbarBrand className="mr-auto" href="/">              
              Would You Rather?              
              </NavbarBrand>
                <Nav navbar className="text-uppercase ml-auto">
                  <NavItem>
                    <NavLink className="nav-link" to="/home"> Home
                    </NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink className="nav-link" to="/new"> New Question
                    </NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink className="nav-link" to="/home"> LeaderBoard
                    </NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink className="nav-link" to="/login"> 
                     {this.props.authedUser === null 
                       ? (<Button type="sub mit" value="submit" color="primary" onClick={this.handleLogin}>
                           Login
                        </Button>)
                       : (<Button type="sub mit" value="submit" color="primary" onClick={this.handleLogout}>
                           Logout
                        </Button>)
                     }
                    </NavLink>
                  </NavItem>
                </Nav>       
              <Label htmlFor="hello"><h3 className="text-white offset-md-1">{username}</h3></Label>              
            </div>
          </Navbar>         
         
        </React.Fragment>       
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    users:Object.values(state.users),
    authedUser:state.authedUser,
  }
}

export default connect(mapStateToProps)(Header);

