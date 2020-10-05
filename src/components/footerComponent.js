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
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-4 col-md-6'>
                  <div class='footer-info'>
                    <h3>InfInIty 2k20 !</h3>
                    <p class='pb-3'>
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
                    <div class='social-links mt-3'>
                      <a href='#' class='twitter'>
                        <i class='bx bxl-twitter'></i>
                      </a>
                      <a href='#' class='facebook'>
                        <i class='bx bxl-facebook'></i>
                      </a>
                      <a href='#' class='instagram'>
                        <i class='bx bxl-instagram'></i>
                      </a>
                      <a href='#' class='google-plus'>
                        <i class='bx bxl-skype'></i>
                      </a>
                      <a href='#' class='linkedin'>
                        <i class='bx bxl-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class='bx bx-chevron-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Registration</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Live Stats</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Previous Year Question Set</a>
                    </li>
                    <li>
                      <i class='bx bx-chevron-right'></i>{' '}
                      <a href='#'>Hall of Fame</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-3 col-md-6 footer-newsletter '>
                  <h4 class='feedbackheading'>Feedback</h4>
                  <p style={{ marginRight: '62px' }}>
                    We would love to hear from you !
                  </p>
                  <p style={{ marginLeft: '20px' }}>
                    <FeedbackModal />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='container'>
            <div class='copyright'>
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
