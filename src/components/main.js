import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import Home from './home';
import Registration from './registration';
import Footer from './footerComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <div>
        <Switch location={this.props.location}>
          <Route exact path='/livestats' component={() => <LiveStats />} />
          <Route exact path='/feedback' component={() => <FeedbackModal />} />
          <Route
            exact
            path='/registration'
            component={() => <Registration />}
          />
          <Route exact path='/' component={() => <Home />} />
          <Redirect to='/'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
