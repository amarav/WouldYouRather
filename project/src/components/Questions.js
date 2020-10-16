import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component{
  render()
  {
    const {question,id} = this.props
    console.log(question)
    return(
    <div> 
     <p>{question.id}</p>
    </div>
    );
  }
}

function mapStatetoProps( {authedUser,questions}, {id})
{
  return{
     question : Object.values(questions[id]),
  }
}

export default connect(mapStatetoProps)(Question)