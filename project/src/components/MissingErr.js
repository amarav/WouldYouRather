import React,{Component} from "react";
import { connect } from "react-redux";
import { Redirect,Link } from "react-router-dom";

class MissingErr extends Component{
 
  render(){
   if (!this.props.authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: "/new",
            },
          }}
        />
      );
    }
  return (
    <div>
      <h1>ERROR 404: No questions found !!! </h1>
      <br/>
      <Link to='/home'>Go Home</Link>
    </div>
  );
}
}


function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}


export default connect(mapStateToProps)(MissingErr)
