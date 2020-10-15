import React,{Component,Fragment} from 'react';
import Header from './Header'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Login from './Login'
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
       <Route path='/home' component={Home} /> 
       <Route path='/new' component={NewQuestion} /> 
       <Route path='/login' component={Login} /> 
       <Redirect to="/home" />
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