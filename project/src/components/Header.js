import React, { Component ,useState } from "react";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import Example from './Login'
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.onNameChange = this.onNameChange.bind(this);

    this.state = {
      isModalOpen: true,
      userName:"",
    };
  }
  
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();  
    this.props.dispatch(setAuthedUser(this.state.userName));
    event.preventDefault();
  }
  
  onNameChange(event){  
    this.setState({
      userName: event.target.value
    });  
  }
  
  render() {
    
    const users = this.props.users
    console.log(this.props.loggedUser)
    
    return (
      <div>
        <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
            <div className="container">           
              <NavbarBrand className="mr-auto" href="/">              
              Would You Rather?              
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
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
                    <NavLink className="nav-link" to="/home"> 
                        <Button type="sub mit" value="submit" color="primary" onClick={this.handleLogin}>
                           Logout
                        </Button>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>             
              <Label htmlFor="hello"><h3 className="text-white">{this.state.userName}</h3></Label>              
            </div>
          </Navbar>         

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input type="select" onChange={this.onNameChange} value={this.state.userName}>
                     {users.map((e, key) => {
                       return <option key={key} value={e.value}>{e.id}</option>;
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
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </React.Fragment>       
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    users:Object.values(state.users),
    authedUser:state.authedUser,
    loggedUser: state.users[state.authedUser],
  }
}

export default connect(mapStateToProps)(Header);

