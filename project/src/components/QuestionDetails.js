import React,{Component} from 'react'
import {connect} from 'react-redux'
import {answerQuestion} from '../actions/questions'
import MissingErr from './MissingErr'
import {withRouter} from 'react-router-dom'


class QuestionDetails extends Component{
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
    const {dispatch} = this.props
    dispatch(answerQuestion(this.props.id,this.state.selectedOption))
  }
  
  render(){    
    const {question,users} = this.props
    return(
      <div className="col-md-8 offset-md-3">
      {question ? 
       <div className="mysmcard">
          <div className="mysmcard-image">
            <div
              className="myimg-thumbnail"
              style={{ backgroundImage: `url(${users[question.author].avatarURL})` }}/>
          </div>
          <div className="mysmcard-content">
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
            <button className="btn btn-info" type="submit" onClick={this.SubmitVote}>
              VOTE
            </button>
          </div>
        </div> 
      :  this.props.history.push('/MissingErr') }
      </div>
    )
  }
}


function mapStatetoProps({questions,users},props)
{
  const id = props.match.params.id.toString()
  const question = questions[id];
  return {
    question,
    id,
    users    
  }
}

export default connect(mapStatetoProps)(QuestionDetails)