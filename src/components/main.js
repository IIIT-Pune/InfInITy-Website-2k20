import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import Home from './home';
import Registration from './registration';
import Footer from './footerComponent';
import Previously from './previously';
import feedbackModal from './feedbackModal';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import QuesCard from './questioncards';
class Main extends Component {
  render() {
    const ShowwithId = ({ match }) => {
      let quesid = match.params.code;
      return <Previously code={quesid} />;
    };
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
          <Route exact path='/questions/:code' component={ShowwithId} />

          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/quescard' component={() => <QuesCard />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
