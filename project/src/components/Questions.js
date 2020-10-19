import React, { Component } from "react";
import { connect } from "react-redux";
import {answerQuestion} from '../actions/questions'
import {Link} from 'react-router-dom'

class Question extends Component {

  render() {
    const { question,author,id} = this.props;
    return (
      <div>      
        <Link to ={`/questions/${id}`}>
        <div className="mysmcard">
          <div className="mysmcard-image">
            <div
              className="myimg-thumbnail"
              style={{ backgroundImage: `url(${author.avatarURL})` }}/>
          </div>
          <div className="mysmcard-content">
            <p className="font-italic">{question.author} asks...</p>
            <p className="font-weight-bold">Would you Rather...</p>            
              <label>
                 {question.optionOne.text}
              </label>
                <br/>  OR  <br/>
              <label>
                {question.optionTwo.text}
              </label>  
          </div>
        </div>    
       </Link>
      </div>
    );
  }
}

function mapStatetoProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  return {
    question,
    id,
    author: users[question.author],
  };
}

export default connect(mapStatetoProps)(Question);
