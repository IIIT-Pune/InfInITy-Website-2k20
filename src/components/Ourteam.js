import React,{useEffect} from 'react';
import '../assets/scss/ourteam.css';
import "aos/dist/aos.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import AOS from "aos";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export default function Ourteam() {
    useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);
    return (
      <div>
        <section id="team" class="team section-bg">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2>
                Our <strong>Team</strong>
              </h2>
              <p>
                <h3>Website Developers</h3>
              </p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up">
                  <div class="member-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C5103AQEfuswPxV6Gyw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=JG_WVhYWPCnlUR_jpEpAcLbrnDV9jU5KlTPYFHCTP2I"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <InstagramIcon />
                      </a>
                      <a href="">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Rohan Lekhwani</h4>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                  <div class="member-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C5603AQEMeG2ptsblrw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=33bTd_0Qw7mExxVn0M_kforVI_OWNHWTHcSueRL3a54"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <InstagramIcon />
                      </a>
                      <a href="">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Rakshit Jain</h4>
                    <span>Website Developer</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                  <div class="member-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQHXhha9zl_AhA/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=d7-5VUTYVDeDRyRizKSTUY2XKlwunkf6eBFPz_R3-k8"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <InstagramIcon />
                      </a>
                      <a href="">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Mukhrit Gupta</h4>
                    <span>Website Developer</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                  <div class="member-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C5603AQF2dtQNEAFH8g/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=-rDVtw42w2W7UFnFfVNfR4WhMHzF7rkWFDYumCnc5AI"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href="">
                        <InstagramIcon />
                      </a>
                      <a href="">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>Jayesh Bhole</h4>
                    <span>Website Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-title" data-aos="fade-up">
              <p>
                <h3>Problem Setters,Tester and Editorialist </h3>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}
