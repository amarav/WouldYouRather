import React, { Component  } from "react";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
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
import { NavLink } from "react-router-dom";
import "../css/styles.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    
    this.state = {   
      isModalOpen:true,
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
    
    const {users,authedUser} = this.props
    console.log('authed user is as below')
    console.log(authedUser)
    
    const username = users.filter( user => user.id === authedUser ).map(user => user.name)[0]
    console.log(this.state.isModalOpen)
    
    return (
      <div>
        <React.Fragment>
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
  }
}

export default connect(mapStateToProps)(Login);

