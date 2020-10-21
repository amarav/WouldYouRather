import React,{Component} from 'react';
import { Col, Form, FormGroup, Label, Input , Button} from 'reactstrap';
import {addNewQuestion} from '../actions/questions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component{
  
  state = {
     optionOneText:'',
     optionTwoText:'',
     gotoHome:false,
  }
  
  handleInputChange = (event) => {
    event.preventDefault()
    const {id,value} = event
    this.setState( () => ({[id]:[value]}))
  }

  render(){
    
    const {optionOneText,optionTwoText,gotoHome } = this.state
   if(!this.props.authedUser){
     return <Redirect to={{
                            pathname :"/login",
                            state : {
                                     returnPath:'/new'
                            }
                         }}
            />      
   }

   if(gotoHome === true) {
      return <Redirect to='/home' />
   }
    
  return (
    <Form className="col-md-4 offset-md-4">      
      <section className="page-section bg-light">
            <div className="container-fluid">
              <div className="text-center">
                <h3 className="section-heading text-uppercase">
                  Create new question
                </h3>
                <h3 className="section-subheading text-muted">
                  Complete the question
                </h3>                
              
                <h3 className="section-heading">
                  Would You Rather...
                </h3>
                </div>
            </div>
    <br/>
      <FormGroup row>
        <Col className="offset-md-1" sm={10}>
          <Input type="text"  id="optionOneText"  placeholder="Enter Option one text here"  value={optionOneText} onChange={this.handleInputChange}/>
        </Col>
      </FormGroup>
      <Label className="text-center offset-md-5" >OR</Label>
      <FormGroup row>
        <Col className="offset-md-1" sm={10}>
          <Input type="text"  id="optionTwoText" placeholder="Enter Option two text here" value={optionTwoText} onChange={this.handleInputChange}/>
        </Col>
      </FormGroup>
<br/>
         <Button color="secondary" size="lg" block>Submit</Button>
          </section>

    </Form>
  );
 }
}

function mapStateToProps({authedUser}) {
  return {   
    authedUser,
  }  
}


export default connect(mapStateToProps)(NewQuestion)