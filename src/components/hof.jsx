import React from 'react';
import '../assets/scss/hof.scss';
import { iiit, india, world } from './hof_Data';

const Hall = () => {
  return (
    <div className="halloffame">
      <div className="cont world">
        <h3>World #1</h3>
        <h4>The ones who knock</h4>
        {world.map((person) => (
          <div key={person.name} className="winner">
            <img
              src={require(`../assets/img/${person.img}`)}
              alt=""
              className="profile"
            />
            <span className="meta" id={person.year}>
              <span>{person.name}</span>
              <br />
              <span>{person.org}</span>
            </span>
            <span className="social">
              <a href={person.linkedin}>
                <img src={require('../assets/img/social_1.svg')} alt="" />
              </a>
              <a href={person.github}>
                <img src={require('../assets/img/social_2.svg')} alt="" />
              </a>
              <a href={person.codechef}>
                <img src={require('../assets/img/social_3.svg')} alt="" />
              </a>
            </span>
          </div>
        ))}
      </div>
      <div className="cont india">
        <h3>India #1</h3>
        <h4>They cook the Bomb</h4>
        {india.map((person) => (
          <div key={person.name} className="winner">
            <img
              src={require(`../assets/img/${person.img}`)}
              alt=""
              className="profile"
            />
            <span id={person.year} className="meta">
              {person.name}
              <br />
              {person.org}
            </span>
            <span className="social">
              <a href={person.linkedin}>
                <img src={require('../assets/img/social_1.svg')} alt="" />
              </a>
              <a href={person.github}>
                <img src={require('../assets/img/social_2.svg')} alt="" />
              </a>
              <a href={person.codechef}>
                <img src={require('../assets/img/social_3.svg')} alt="" />
              </a>
            </span>
          </div>
        ))}
      </div>
      <div className="cont iiitp">
        <h3>IIIT Pune #1</h3>
        <h4>Say their Name</h4>
        {iiit.map((person) => (
          <div key={person.name} className="winner">
            <img
              src={require(`../assets/img/${person.img}`)}
              alt=""
              className="profile"
            />
            <span id={person.year} className="meta">
              {person.name}
              <br />
              {person.org}
            </span>
            <span className="social">
              <a href={person.linkedin}>
                <img src={require('../assets/img/social_1.svg')} alt="" />
              </a>
              <a href={person.github}>
                <img src={require('../assets/img/social_2.svg')} alt="" />
              </a>
              <a href={person.codechef}>
                <img src={require('../assets/img/social_3.svg')} alt="" />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hall;
