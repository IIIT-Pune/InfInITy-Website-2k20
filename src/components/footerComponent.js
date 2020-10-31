import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import '../assets/scss/footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="footer-info">
                    <h3>InfInIty 2k20 !</h3>
                    <p className="pb-3">
                      <em>
                        InfInITy is IIIT Pune's annual flagship coding contest
                        hosted every year on Codechef. A 3 hour coding contest
                        that's guaranteed to get your head itching and your
                        heart wanting more. InfInITy started in 2017 and was
                        limited only to IIIT Pune.
                      </em>
                    </p>
                    <p>
                      <strong>Email:</strong> infinity@iiitp.ac.in
                    </p>
                    <div className="social-links mt-3">
                      <a
                        target="_blank"
                        href="https://www.codechef.com/INFY20"
                        className="twitter"
                      >
                        <span
                          class="iconify"
                          data-icon="simple-icons:codechef"
                          data-inline="false"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 footer-links ">
                  <h4>Useful Links</h4>
                  <ul>
                    <li className="footlink">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="/">Home</Link>
                    </li>
                    <li className="footlink">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <HashLink to="/#registration">Registration</HashLink>
                    </li>
                    <li className="footlink">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="/livestats">Live Stats</Link>
                    </li>
                    <li className="footlink">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="/previously">Previous Year Question Set</Link>
                    </li>
                    <li className="footlink">
                      <i className="bx bx-chevron-right"></i>{" "}
                      <Link to="/halloffame">Hall of Fame</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" row copyright">
            <div className="col-12 col-md-8 " >
              &copy; Copyright{" "}
              <strong>
                <span>Infinity </span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <table cellpadding="0" width="94" cellspacing="0" border="0">
                <tr>
                  <td width="94" height="23">
                    <a target="_blank" href="">
                      <img
                        height="23"
                        width="94"
                        border="0"
                        alt=""
                        src="http://www.image-free-counter.net/steads/720.php5?N=153"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td height="16">
                    <a href="http://www.free-counter-plus.com/" target="_blank">
                      <img
                        height="16"
                        border="0"
                        width="59"
                        src="http://www.image-free-counter.net/rampancy/coppers/91.gif"
                        alt="www.free-counter-plus.com"
                      />
                    </a>
                    <a
                      href="http://www.free-counter-plus.com/counter/stats/stats.asp?id=555575740"
                      target="_blank"
                    >
                      <img
                        src="http://www.image-free-counter.net/batts/junkets916128.php5?ftwe=5"
                        alt=""
                        border="0"
                        height="16"
                        width="35"
                      />
                    </a>
                  </td>
                </tr>
                <tr align="CENTER">
                  <td height="15" colspan="2"></td>
                </tr>
              </table>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
