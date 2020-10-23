import React, { Component } from "react";
import { connect } from "react-redux";
import { answerQuestion } from "../actions/questions";

class QuestionDetails extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: "optionOne",
    };
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  SubmitVote = (event) => {
    const { dispatch } = this.props;
    dispatch(answerQuestion(this.props.id, this.state.selectedOption));
    this.props.history.push("/home");
  };

  render() {
    const { question, users } = this.props;
    return (
      <div className="col-md-8 offset-md-2">
        {question ? (
          <div className="card">
            <div className="myrow">
              <div className="mycolumn">
                {" "}
                <div
                  className="fullcard-avatar"
                  style={{
                    backgroundImage: `url(${users[question.author].avatarURL})`,
                  }}
                />
              </div>
              <div className="mycolumn">
                <div className="card-body text-center">
                  <p className="font-italic">{question.author} asks...</p>
                  <p className="font-weight-bold">Would you Rather...</p>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="optionOne"
                        checked={this.state.selectedOption === "optionOne"}
                        onChange={this.handleOptionChange}
                      />
                      {question.optionOne.text}
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value="optionTwo"
                        checked={this.state.selectedOption === "optionTwo"}
                        onChange={this.handleOptionChange}
                      />
                      {question.optionTwo.text}
                    </label>
                  </div>
                  <button
                    className="btn btn-info"
                    type="submit"
                    onClick={this.SubmitVote}
                  >
                    VOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          this.props.history.push("/MissingErr")
        )}
      </div>
    );
  }
}

function mapStatetoProps({ questions, users }, props) {
  const id = props.match.params.id.toString();
  const question = questions[id];
  return {
    question,
    id,
    users,
  };
}

export default connect(mapStatetoProps)(QuestionDetails);
