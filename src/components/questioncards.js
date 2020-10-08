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
      <div
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage:
            'linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)',
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
        <div class='mparent'>
          <div class='row justify-content-center'>
            {questions.map((obj) => {
              return (
                <div
                  class='col-lg-3 animate__animated animate__bounceIn'
                  style={{ padding: '60px' }}
                >
                  <a href='#'>
                    <figure
                      onClick={(event) => {
                        var urlnew = '/questions/' + obj.code;
                        return (window.location.href = urlnew);
                      }}
                      style={{ backgroundImage: 'url(' + obj.url + ')' }}
                    >
                      <figcaption>
                        <h4>
                          {' '}
                          <span>Problem Code: {obj.code}</span>
                        </h4>
                        <p>{obj.heading}</p>
                        <p style={{ fontWeight: 'bolder' }}>
                          Successfull Submissions : {obj.successfulSub}
                        </p>
                        <p style={{ fontWeight: 'bolder' }}>
                          Accuracy : {obj.accuracy}
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default QuesCard;
