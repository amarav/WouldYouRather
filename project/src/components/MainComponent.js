import React,{Component,Fragment} from 'react';
import Header from './Header.js'
import Home from './Home.js'
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
       <Redirect to="/home" />
    </Switch> 
    </Fragment>
  );

  }


}

function mapStateToProps ({ authedUser }) {
  return {
   
  }
}

export default connect(mapStateToProps)(Main);