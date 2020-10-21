import React, { Component } from "react";
import { connect } from "react-redux";
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
       
      
         <div className="card">
          <div className="mysmcard-image">
            <div
              className="myimg-thumbnail"
              style={{ backgroundImage: `url(${user.avatarURL})` }}/>  
          </div>
 <div className="card-body">
          <div className="text-center"><h2>{user.name}</h2></div>          
<ul className="list-group list-group-flush w-100 align-items-stretch">
            <li className="text-center d-inline-block">Asked questions : {user.questions.length}</li>
            <li className="text-center d-inline-block">Answered questions :  {Object.keys(user.answers).length}</li>
            <li className="text-center d-inline-block"><h3>Total score:  {user.questions.length + Object.keys(user.answers).length}</h3></li>
        </ul>
</div>
         </div>



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