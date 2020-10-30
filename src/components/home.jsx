import React, { Component } from 'react';
import '../assets/scss/pages.scss';
import '../assets/scss/snap.css';
import Footer from './footerComponent';
import Registration from './registration';
import FeedbackModal from './feedbackModal';
import Ourteam from './Ourteam';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-snap">
          <div className="wrapper-snap">
            <div className="home cont">
              <section className="landing">
                <img
                  className="--typography"
                  src={require("../assets/img/Typography.png")}
                  alt=""
                />

                <img
                  className="--year"
                  src={require("../assets/img/2k20.png")}
                  alt=""
                />

                <span className="--hosted">Hosted On</span>
                <img
                  className="--codechefTypo"
                  src={require("../assets/img/Codechef.png")}
                  alt=""
                />

                <img
                  className="--DateTypo"
                  src={require("../assets/img/date.png")}
                  alt=""
                />
                <img
                  className="--TimeTypo"
                  src={require("../assets/img/time.png")}
                  alt=""
                />
              </section>
            </div>
          </div>
          <div className="wrapper-snap">
            <FeedbackModal />
          </div>

          <div className="wrapper-snap" id="registration">
            <Registration />
          </div>
          <div className="wrapper-snap">
            <div className="home cont">
              <section className="about">
                <h2 id="abt_h2">About</h2>
                <div className="content">
                  <p>
                    InfInITy is IIIT Pune's annual flagship coding contest
                    hosted every year on Codechef. A 3 hour coding contest
                    that's guaranteed to get your head itching and your heart
                    wanting more. InfInITy started in 2017 and was limited only
                    to IIIT Pune.
                  </p>
                  <p>
                    The contest follows ACM style scoring and consists of
                    problems designed for particpants ranging from beginners to
                    experts. Anyone having a knack for coding is encouraged to
                    participate.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className="wrapper-snap">
           <Ourteam/>
          </div>
          <div className="wrapper-snap">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
