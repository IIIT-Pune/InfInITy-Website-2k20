import zIndex from '@material-ui/core/styles/zIndex';
import React, { Component } from 'react';
import '../assets/scss/previously.css';

class Previously extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class='problem-description assessment-problem-description no-select fullscreen-problem-description'>
          <div class='problem-statement'>
            <div>
              <div class='weight-700 large dark medium-margin-bottom'>
                Covid Run
              </div>
              <div class='complete-problem-statement dark'>
                <p>
                  Covid-19 is spreading fast! There are N cities, numbered from
                  0 to (N−1), arranged in a circular manner. City 0 is connected
                  to city 1, 1 to 2, …, city (N−2) to city (N−1), and city (N−1)
                  to city 0. The virus is currently at city X. Each day, it
                  jumps from its current city, to the city K to its right, i.e.,
                  from city X to the city (X+K)%N. As the virus jumps, the
                  cities in between don't get infected. Cities once infected
                  stay infected. You live in city Y. Find if it will reach your
                  city eventually. If it will, print YES, else print NO.
                </p>
                <strong>Input:</strong>
                <p>
                  <ul style={{ marginLeft: '20px' }}>
                    <li>
                      The first line of the input consists of an integer T, the
                      number of test cases.
                    </li>
                    <li>
                      The first and only line of each test case contains four
                      space-separated integers - N, K, X and Y, denoting the
                      number of cities, the size of jumps, Covid's current city,
                      and the city that you live in, respectively.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Output</strong>:
                  <p>
                    For each test case, in a new line, print YES if Covid shall
                    reach your city after a finite number of days, else print
                    NO.
                  </p>
                </p>
                <p>
                  <strong>Constraints</strong>:
                  <ul style={{ marginLeft: '40px' }}>
                    <li>1≤T≤100</li>
                    <li>1≤N≤1000</li>
                    <li>0≤X,Y≤N−1</li>
                    <li>0≤K≤1000</li>
                  </ul>
                </p>
                <p>
                  <strong>Subtasks</strong>:
                  <ul style={{ marginLeft: '40px' }}>
                    <li>Subtask 1 - 100% - Original constraints</li>
                  </ul>
                </p>
                <p>
                  <strong>Example :</strong>:<p>Input: </p>
                  <ul style={{ marginLeft: '20px' }}>
                    2 <br />6 2 5 3<br /> 12 3 4 2
                  </ul>
                </p>
                <p>
                  <p>Output: </p>
                  <ul style={{ marginLeft: '20px' }}>
                    YES <br /> NO{' '}
                  </ul>
                </p>
                <p>
                  <strong>Explanation</strong>:
                  <ul style={{ marginLeft: '20px' }}>
                    <li>
                      In the first sample, Covid starts at city 5, then goes to
                      city 1, and then from city 1 to city 3. Thus, it reaches
                      the city that you live in.
                    </li>
                    <li>
                      In the second sample, Covid starts at city 4, goes to city
                      7, then 10, 1, then 4, 7, 10, …, and so on. It never
                      reaches city 2.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Reference: </strong>
                  <ul>
                    <a
                      style={{ textDecoration: 'none' }}
                      href='https://www.codechef.com/OCT20B/problems/CVDRUN'
                    >
                      https://www.codechef.com/OCT20B/problems/CVDRUN
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
