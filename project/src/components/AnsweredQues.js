import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

class AnsweredQues extends Component {
  render() {
    const {
      question,
      author,
      voted,
      percentOne,
      percentTwo,
      total,
    } = this.props;
    return (
      <div>
        <div className="card">
          <div className="myrow">
            <div className="mycolumn">
              {" "}
              <div
                className="fullcard-avatar"
                style={{ backgroundImage: `url(${author.avatarURL})` }}
              />
            </div>
            <div className="mycolumn">
              <div className="card-body text-center">
                <p className="font-italic text-center">
                  {question.author} asks...
                </p>
                <p className="font-weight-bold text-center">
                  Would you Rather...
                </p>
                <div className="myrow">
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="optionOne"
                        checked={voted === "optionOne"}
                        readOnly
                      />
                      {question.optionOne.text}
                    </label>
                  </div>
                  <br />
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="optionTwo"
                        checked={voted === "optionTwo"}
                        readOnly
                      />
                      {question.optionTwo.text}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mycolumn card-body text-center">
              <br />
              <br />
              <br />
              {question.optionOne.votes.length} out of {total} votes
              <Progress striped animated color="info" value={percentOne} />
              <br />
              {question.optionTwo.votes.length} out of {total} votes
              <Progress striped color="info" value={percentTwo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStatetoProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const user = users[authedUser];
  let total = question.optionOne.votes.length + question.optionTwo.votes.length;
  let percentOne = ((question.optionOne.votes.length / total) * 100).toFixed(2);
  let percentTwo = ((question.optionTwo.votes.length / total) * 100).toFixed(2);
  let voted = user.answers[id];
  console.log(percentOne);
  return {
    question,
    id,
    author: users[question.author],
    voted,
    total,
    percentOne,
    percentTwo,
  };
}

export default connect(mapStatetoProps)(AnsweredQues);
