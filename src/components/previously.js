import zIndex from '@material-ui/core/styles/zIndex';
import React, { Component } from 'react';
import '../assets/scss/previously.css';
import questions from '../shared/Questions_2k19';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
class Previously extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var quesobj = {};
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].code === this.props.code) {
        quesobj = questions[i];
      }
    }

    return (
      <div>
        <div class='problem-description assessment-problem-description no-select fullscreen-problem-description'>
          <div class='problem-statement'>
            <div>
              <div class='weight-700 large dark medium-margin-bottom'>
                {ReactHtmlParser(quesobj.heading)}
              </div>
              <div class='complete-problem-statement dark'>
                {ReactHtmlParser(quesobj.description)}
                <strong>Input:</strong>
                <p>
                  <ul style={{ marginLeft: '20px' }}>
                    {quesobj.input.map((inp) => (
                      <li>{ReactHtmlParser(inp)}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong>Output</strong>:{ReactHtmlParser(quesobj.output)}
                </p>
                <p>
                  <strong>Constraints</strong>:
                  <ul style={{ marginLeft: '40px' }}>
                    {quesobj.constraints.map((con) => {
                      return <li>{ReactHtmlParser(con)}</li>;
                    })}
                  </ul>
                </p>
                <p>
                  <strong>Example :</strong>
                  <p>Input: </p>
                  <ul style={{ marginLeft: '20px' }}>
                    {quesobj.example[0].map((inp) => {
                      return <div>{ReactHtmlParser(inp)}</div>;
                    })}
                  </ul>
                </p>
                <p>
                  <p>Output: </p>
                  <ul style={{ marginLeft: '20px' }}>
                    {quesobj.example[1].map((con) => {
                      return <div>{ReactHtmlParser(con)}</div>;
                    })}
                  </ul>
                </p>
                <p>
                  {quesobj.explanation.length > 0 && (
                    <strong>Explanation :</strong>
                  )}
                  <ul style={{ marginLeft: '20px' }}>
                    {quesobj.explanation.map((ele) => {
                      return <li>{ReactHtmlParser(ele)}</li>;
                    })}
                  </ul>
                </p>
                <p>
                  <strong>Reference: </strong>
                  <ul>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={ReactHtmlParser(quesobj.reference)}
                    >
                      {ReactHtmlParser(quesobj.reference)}
                    </a>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Previously;
