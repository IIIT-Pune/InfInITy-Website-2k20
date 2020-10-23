import React, { Component } from 'react';
import '../assets/scss/questioncard.scss';
import questions from '../shared/Questions_2k19';

class QuesCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(questions);
    return (
      <div class='mparent'>
        <div
          style={{
            backgroundImage:
              'url(https://cdnb.artstation.com/p/assets/images/images/012/370/613/large/steve-lund-castle-color2.jpg?1534439770)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div class='textparent'>
            <div class='row fancy-grid' style={{ justifyContent: 'center' }}>
              <div class='fancy-heading'>
                <h1
                  class='animated_heading'
                  style={{
                    backgroundImage:
                      'url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/musico/demo/wp-content/uploads/2018/10/ruvim-noga-711147-unsplash.jpg)',
                  }}
                >
                  2k19
                </h1>
              </div>
            </div>
          </div>

          <div class='row justify-content-center'>
            {questions.map((obj) => {
              return (
                <div
                  class='col-lg-3 animate__animated animate__bounceIn'
                  style={{ padding: '60px' }}
                >
                  <a href='#' classname='figclass'>
                    <figure
                      onClick={(event) => {
                        var urlnew = '/questions/' + obj.code;
                        return (window.location.href = urlnew);
                      }}
                      style={{
                        backgroundImage: 'url(' + obj.url + ')',
                        height: '100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    >
                      <figcaption style={{ padding: '20px' }}>
                        <h4 style={{ marginBottom: '20px' }}>
                          {' '}
                          <span
                            style={{ whiteSpace: 'nowrap', fontSize: '26px' }}
                          >
                            Problem Code: {obj.code}
                          </span>
                        </h4>
                        <p
                          style={{
                            fontWeight: 'bolder',
                            fontSize: '25px',
                          }}
                        >
                          {obj.heading}
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                          Successfull Submissions : {obj.successfulSub}
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                          Accuracy : {obj.accuracy}
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              );
            })}
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
            }}
          >
            <div class='textparent'>
              <div class='row fancy-grid' style={{ justifyContent: 'center' }}>
                <div class='fancy-heading'>
                  <h1
                    class='animated_heading'
                    style={{
                      backgroundImage:
                        'url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/musico/demo/wp-content/uploads/2018/10/ruvim-noga-711147-unsplash.jpg)',
                      fontSize: '35px',
                      textAlign: 'center',
                    }}
                  >
                    2K17 AND 2K18 Question Set
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class='mparent'>
            <div class='row justify-content-center'>
              <div
                class='col-lg-3 animate__animated animate__bounceIn'
                style={{ padding: '60px' }}
              >
                <a href='https://www.codechef.com/INF2017'>
                  <figure
                    style={{
                      backgroundImage:
                        'url(https://logopond.com/logos/eb5243f573674cf7437c3d9b0f073909.png)',
                    }}
                  >
                    <figcaption>
                      {' '}
                      <div class='textparent'>
                        <div
                          class='row fancy-grid'
                          style={{ justifyContent: 'center' }}
                        >
                          <div class='fancy-heading'>
                            <h1
                              class='animated_heading'
                              style={{
                                backgroundImage:
                                  'url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/musico/demo/wp-content/uploads/2018/10/ruvim-noga-711147-unsplash.jpg)',
                              }}
                            >
                              2K17
                            </h1>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div
                class='col-lg-3 animate__animated animate__bounceIn'
                style={{ padding: '60px' }}
              >
                <a href='https://www.codechef.com/INTY2018'>
                  <figure
                    style={{
                      backgroundImage:
                        'url(https://logopond.com/logos/eb5243f573674cf7437c3d9b0f073909.png)',
                    }}
                  >
                    <figcaption>
                      {' '}
                      <div class='textparent'>
                        <div
                          class='row fancy-grid'
                          style={{ justifyContent: 'center' }}
                        >
                          <div class='fancy-heading'>
                            <h1
                              class='animated_heading'
                              style={{
                                backgroundImage:
                                  'url(https://themegoods-cdn-pzbycso8wng.stackpathdns.com/musico/demo/wp-content/uploads/2018/10/ruvim-noga-711147-unsplash.jpg)',
                              }}
                            >
                              2K18
                            </h1>
                          </div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuesCard;
