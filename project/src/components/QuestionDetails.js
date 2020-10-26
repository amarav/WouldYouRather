import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import Results from './AnsweredQues'
import Poll from './Poll'

class QuestionDetails extends Component {

  render() {
    const { id, showResults , question } = this.props;

    if (!this.props.authedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              returnPath: '/questions/' + id
            },
          }}
        />
      );
    } 
    return (
      <div className="col-md-8 offset-md-2">
       {question ? 
        (showResults  ? <Results id={id} />   :  <Poll id={id} /> ) :
             <Redirect to={{ pathname: "/MissingErr", }}
        />       
        }
      </div>
    );
  }
}

function mapStatetoProps({ questions, users,authedUser }, props) {
  const id = props.match.params.id.toString();
  const currentUser = users[authedUser]
  const question = questions[id];
  return {
    id,
    authedUser,
    question,
    showResults: Object.keys(currentUser.answers).includes(id),
  };
}

export default connect(mapStatetoProps)(QuestionDetails);
