import React,{Component} from "react";
import { connect } from "react-redux";
import Login from './Login'

class LoginCheck extends Component{
 
  render(){
    const { authedUser } = this.props;
    return (
           <React.Fragment>
      { authedUser ? this.props.children : <Login /> }
           </React.Fragment>
    );
}
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}


export default connect(mapStateToProps)(LoginCheck)