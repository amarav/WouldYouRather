import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component{
  render()
  {
    const {question} = this.props
    
    return(
    <div> 
      {question.id}
    </div>
    );
  }
}

function mapStatetoProps( {authedUser,questions}, {id})
{  
  return{
     questions : questions[id]
  }
}

export default connect(mapStatetoProps)(Question)