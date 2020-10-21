import React, { Component } from 'react';
import FeedbackModal from './feedbackModal';
import '../assets/scss/footer.css';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <footer id='footer'>
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 '>
                  <div className='footer-info'>
                    <h3>InfInIty 2k20 !</h3>
                    <p className='pb-3'>
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
                    <div className='social-links mt-3'>
                      <a href='#' className='twitter'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                      <a href='#' className='facebook'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                      <a href='#' className='instagram'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                      <a href='#' className='google-plus'>
                        <i className='bx bxl-skype'></i>
                      </a>
                      <a href='#' className='linkedin'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-5 footer-links '>
                  <h4>Useful Links</h4>
                  <ul>
                    <li className='footlink'>
                      <i className='bx bx-chevron-right'></i> <a href='#'>Home</a>
                    </li>
                    <li className='footlink'>
                      <i className='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Registration</a>
                    </li>
                    <li className='footlink'>
                      <i className='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Live Stats</a>
                    </li>
                    <li className='footlink'>
                      <i className='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Previous Year Question Set</a>
                    </li>
                    <li className='footlink'>
                      <i className='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Hall of Fame</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='copyright'>
              &copy; Copyright{' '}
              <strong>
                <span>Infinity </span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
