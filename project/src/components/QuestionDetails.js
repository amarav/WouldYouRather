import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class QuestionDetails extends Component{
  render(){
    
    const {question} = this.props
    console.log(question)
    return(
      <div>
      {question.author}  
      </div>
    )
  }
}


function mapStatetoProps({questions},props)
{
  const id = props.match.params
  const question = questions['am8ehyc8byjqgar0jgpub9'];              
  return {
    question,
  }
}

export default connect(mapStatetoProps)(QuestionDetails)