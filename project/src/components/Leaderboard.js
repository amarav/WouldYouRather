import React, { Component } from "react";
import { connect } from "react-redux";
import {Label, Media} from 'reactstrap'
import {Redirect} from 'react-router-dom'

class Leaderboard extends Component{
  
  render(){
    
    const {users,authedUser} = this.props
   
    if(!authedUser)
    {
      return <Redirect to={ { pathname:'/login',
                              state: {
                               returnPath:'/LeaderBoard'
                              }   
                          }}/>
    }    
    return(
    <React.Fragment>
        <div className="col-md-8 offset-md-2">
     <br/><br/>     
     { users.map( user => (
        <Media key={user.id}>
          <Media object src={user.avatarURL} className="myimg-thumbnail" />
          <Media heading>
                        {user.name}
                    </Media>
                    <div className="float-left">
                        <Label for="asked">Asked:</Label><span id="asked">{user.questions.length}</span>
                    </div>
                    <div className="float-right">
                        <Label for="answered">Answered:</Label><span id="answered">{Object.keys(user.answers).length}</span>
                    </div>
                   <div className="float-right">
                        <Label for="answered">Total score:</Label><span id="answered">{user.questions.length + Object.keys(user.answers).length}</span>
                    </div>
          
        </Media>    
     ))}
  </div>
    </React.Fragment>
    )
  }  
}

function mapStateToProps({users,authedUser}) {
  return {
    users: Object.keys(users).sort((a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) 
                                          - (users[a].questions.length + Object.keys(users[a].answers).length))
                             .map((user) => users[user]),    
    authedUser,
  }  
}


export default connect(mapStateToProps)(Leaderboard)