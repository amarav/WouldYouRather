import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Question extends Component {
  render() {
    const { question, author, id, authedUser } = this.props;
    if (!authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: "/questions",
            },
          }}
        />
      );
    }

    return (
      <div>
        <div className="card">
          <div className="myrow">
            <div className="mycolumn">
              <div
                className="fullcard-avatar"
                style={{ backgroundImage: `url(${author.avatarURL})` }}
              />
            </div>
            <div className="mycolumn">
              <div className="card-body text-center">
                <h2 className="font-italic">{question.author} asks...</h2>
                <p className="font-weight-bold">Would you Rather...</p>
                <label>{question.optionOne.text}</label>
                <br /> OR <br />
                <label>{question.optionTwo.text}</label>
                <br />
              </div>
            </div>
            <div className="mycolumn">
              <div className="card-body text-center">
                <Link to={`/questions/${id}`}>
                  <label>Answer question</label>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
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
    authedUser,
  };
}

export default connect(mapStatetoProps)(Question);
