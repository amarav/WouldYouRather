import React,{Component,Fragment} from 'react';
import Header from './Header'
import Home from './Home'
import NewQuestion from './NewQuestion'
import QuestionDetails from './QuestionDetails'
import Login from './Login'
import MissingErr from './MissingErr'
import { handleInitialData } from '../actions/shared'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class Main extends Component
{
   componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render()
  {    
   
    
  return (
    <Fragment>
    <Header />
    <Switch>    
       <Route path='/login' component={Login} /> 
       <Route exact path='/home' component={Home} /> 
       <Route exact path='/new' component={NewQuestion} /> 
       <Route path="/questions/:id" component={QuestionDetails}/>
       <Route exact path="/MissingErr" component={MissingErr} />
       <Redirect to="/login" />
    </Switch> 
    </Fragment>
  );
  }
}

function mapStateToProps ({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Main);