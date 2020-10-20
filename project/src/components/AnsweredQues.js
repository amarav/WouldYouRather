import React, { Component } from "react";
import { connect } from "react-redux";
import {answerQuestion} from '../actions/questions'
import {Link} from 'react-router-dom'
import { Progress } from 'reactstrap';

class AnsweredQues extends Component {

  render() {
    const { question,author,id,voted,percentOne,percentTwo,total } = this.props;
    return (
      <div>   
        <div className="mysmcard">
          <div className="mysmcard-image">
            <div
              className="myimg-thumbnail"
              style={{ backgroundImage: `url(${author.avatarURL})` }}/>
          </div>
          <div className="mysmcard-content">
            <p className="font-italic">{question.author} asks...</p>
            <p className="font-weight-bold">Would you Rather...</p>            
              <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionOne"
                  checked={voted === "optionOne"}
                  readOnly/>
                {question.optionOne.text}
              </label>
            </div>
            {question.optionOne.votes.length} out of {total} votes
            <Progress striped animated color="info" value={percentOne}  />
            <br/>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionTwo"
                  checked={voted === "optionTwo"}
                  readOnly/>
                {question.optionTwo.text}
              </label>
            </div>
            {question.optionTwo.votes.length} out of {total} votes
           <Progress striped color="info" value={percentTwo} />
         </div>
        </div>           
      </div>
    );
  }
}

function mapStatetoProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const user = users[authedUser]
  let total = question.optionOne.votes.length + question.optionTwo.votes.length; 
  let percentOne =  ((question.optionOne.votes.length/total)*100).toFixed(2)
  let percentTwo =  ((question.optionTwo.votes.length/total)*100).toFixed(2)
  let voted = user.answers[id]
  console.log(percentOne)
  return {
    question,
    id,
    author: users[question.author],
    voted,
    total,
    percentOne,
    percentTwo
  };
}

export default connect(mapStatetoProps)(AnsweredQues);
