import React, { useEffect } from 'react';
import '../assets/scss/ourteam.css';
import 'aos/dist/aos.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import AOS from 'aos';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Ourteam() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <section id='team' class='team section-bg'>
        <div class='container'>
          <div class='section-title' data-aos='fade-up'>
            <h2>
              Our <strong>Team</strong>
            </h2>
            <p>
              <h3>Website Developers</h3>
            </p>
          </div>

          <div class='row'>
            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5103AQEfuswPxV6Gyw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=JG_WVhYWPCnlUR_jpEpAcLbrnDV9jU5KlTPYFHCTP2I'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/rohanlekhwani/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a href='https://github.com/RonLek' target='_blank'>
                      <GitHubIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/rohanlekhwani/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Rohan Lekhwani</h4>
                  <span>Website Manager</span>
                </div>
              </div>
            </div>

            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='100'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5603AQEMeG2ptsblrw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=33bTd_0Qw7mExxVn0M_kforVI_OWNHWTHcSueRL3a54'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/rakshitjain13/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a href='https://github.com/rakshitjain13' target='_blank'>
                      <GitHubIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/rakshit-jain-9b83b570/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Rakshit Jain</h4>
                  <span>Website Developer</span>
                </div>
              </div>
            </div>

            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='200'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C4E03AQHXhha9zl_AhA/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=d7-5VUTYVDeDRyRizKSTUY2XKlwunkf6eBFPz_R3-k8'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/mukuboi/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a href='https://github.com/mukhrit' target='_blank'>
                      <GitHubIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/mukhrit-gupta-553196194/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Mukhrit Gupta</h4>
                  <span>Website Developer</span>
                </div>
              </div>
            </div>

            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='300'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5603AQF2dtQNEAFH8g/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=-rDVtw42w2W7UFnFfVNfR4WhMHzF7rkWFDYumCnc5AI'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/jayeshbhole_/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a href='https://github.com/jayeshbhole' target='_blank'>
                      <GitHubIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/jayesh-bhole-701086193/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Jayesh Bhole</h4>
                  <span>Website Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div class='section-title' data-aos='fade-up'>
            <p>
              <h3>Problem Setters,Tester and Editorialist </h3>
            </p>
          </div>
          <div className='row'>
            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5103AQFIY9TltCs6Og/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=wWBVP8gloXcGfKmNj2DnIqnNv2SVna-Yvi4BJ2y4uGI'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a href='#'>
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/abhishekjugdar/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Abhishek Judgar</h4>
                  <span>Problem Setter</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='100'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5103AQHBXCKVijY-WQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=NbVLpul8cr4ZYRftRRVY9nnqfQjAwkxUzSS_6gfIL5U'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/_.yasho._/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/yashodhan-agnihotri/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Yashodhan Agnihotri</h4>
                  <span>Problem setter</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='200'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5603AQHzk4mOiHm77A/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=4vnSuMkFTB-gPx8mY4E9DSRUVL9ouXOAKmuLEi2DZwc'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/aman_singhal.1111/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/aman-singhal-805167199/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Aman Singhal</h4>
                  <span>Problem Setter</span>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='300'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C5603AQGEjkaGn9DqgQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=mVBqwE32IRKdjfdC2uZsoyLnRDAFbL4lSR3G-hB3-rE'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/nishitsharma03/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/nishit-sharma-146961197/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Nishit Sharma</h4>
                  <span>Problem Setter</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div class='col-lg-6 col-md-6 d-flex  justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='300'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C4D03AQG7nkBYR_IBAA/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=mv8BD29F4FVwyWsFu6iAgrNr196mJX5gNx6Jco__PDs'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/deer_darshan/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/darshanlokhande/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Darshan Lokhande </h4>
                  <span>Problem Tester</span>
                </div>
              </div>
            </div>
            <div class='col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center'>
              <div class='member' data-aos='fade-up' data-aos-delay='300'>
                <div class='member-img'>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C4E03AQFqaN3nNYBdTw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=HcuCniN7D3jkA3SlyQ-sA-_3WaAUVXuNcwTE5VfBR1E'
                    class='img-fluid'
                    alt=''
                  />
                  <div class='social'>
                    <a
                      href='https://www.instagram.com/preritkrjha/'
                      target='_blank'
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/prerit-kumar-jha-5513a3134/'
                      target='_blank'
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
                <div class='member-info'>
                  <h4>Prerit Kumar Jha</h4>
                  <span>Problem Tester</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
