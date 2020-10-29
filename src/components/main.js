import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import LiveStats from './LiveStatsComponent';
import Home from './home';
import Registration from './registration';
import Footer from './footerComponent';
import LiveStatsComponent from './LiveStatsComponent';
import Previously from './previously';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import QuesCard from './questioncards';
import Hall from './hof';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ isLoaded: true });
        console.log(this.state.isLoaded);
      }.bind(this),
      5000
    );
  }
  render() {
    const ShowwithId = ({ match }) => {
      let quesid = match.params.code;
      return <Previously code={quesid} />;
    };
    return (
      <div>
        <div
          className={`loader ${!this.state.isLoaded ? "notloaded" : "loaded"}`}>
          <img src={require("../assets/img/beeeee.gif")} alt="preloader"></img>
          <span>Decontaminating</span>
        </div>
        <Switch location={this.props.location}>
          <Route exact path='/feedback' component={() => <FeedbackModal />} />
          <Route
            exact
            path='/livestats'
            component={() => <LiveStatsComponent />}
          />

          <Route exact path='/halloffame' component={() => <Hall />} />

          <Route exact path='/questions/:code' component={ShowwithId} />
          <Route exact path='/previously' component={() => <QuesCard />} />
          <Route path='/' component={() => <Home />} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
