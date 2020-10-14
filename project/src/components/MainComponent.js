import React,{Component,Fragment} from 'react';
import Header from './Header'
import Home from './Home'
import NewQuestion from './NewQuestion'
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
    const HomePage = () => {
      return(
         <Home />
      );
    }
    
  return (
    <Fragment>
    <Header />
    <Switch>    
       <Route path='/home' component={HomePage} /> 
       <Route path='/new' component={NewQuestion} /> 
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