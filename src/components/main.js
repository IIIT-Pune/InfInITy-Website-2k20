import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import Home from './home';
import Registration from './registration';
import Footer from './footerComponent';
import Previously from './previously';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import QuesCard from './questioncards';
import Hall from './hof';
import Ourteam from './Ourteam';

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
          <Route exact path='/ourteam' component={() => <Ourteam />} />
          <Route exact path='/halloffame' component={() => <Hall />} />

          <Route exact path='/questions/:code' component={ShowwithId} />
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/previously' component={() => <QuesCard />} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
