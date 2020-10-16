import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: "option1",
    };
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  render() {
    const { question, id, author } = this.props;
    return (
      <div>
        <div className="mysmcard">
          <div className="mysmcard-image">
            <div
              className="myimg-thumbnail"
              style={{ backgroundImage: `url(${author.avatarURL})` }}
            ></div>
          </div>
          <div className="mysmcard-content">
            <p className="font-italic">{question.author} asks...</p>
            <p className="font-weight-bold">Would you Rather...</p>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={this.state.selectedOption === "option1"}
                  onChange={this.handleOptionChange}
                />
                {question.optionOne.text}
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={this.state.selectedOption === "option2"}
                  onChange={this.handleOptionChange}
                />
                {question.optionTwo.text}
              </label>
            </div>
            <button className="btn btn-info" type="submit">
              VOTE
            </button>
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
  };
}

export default connect(mapStatetoProps)(Question);
