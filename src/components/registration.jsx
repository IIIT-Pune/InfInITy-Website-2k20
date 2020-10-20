import React, { Component } from 'react';
import axios from 'axios';
import {countries} from './countries';
import { baseUrl } from '../shared/baseUrl';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      username: '',
      country: '',
      email: '',
      org: '',
      errors: {
        name: '',
        lastname: '',
        username: '',
        country: '',
        email: '',
        org: '',
      },
    };
  }
  checklastdigit(val) {
    if ((val >= "0" && val <= "9") || (val >= "a" && val <= "z")) return true;
    return false;
  }
  checkcodechefusername(value) {
    if (value.length < 4 || value.length > 14) return false;
    if (value[0] !== value[0].toLowerCase()) return false;
    if (this.checklastdigit(value[value.length - 1]) === false) return false;
    for (var i = 0; i < value.length - 1; i++) {
      if (value[i] === '_' && value[i + 1] === '_') return false;
    }
    return true;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'name':
        errors.name =
          value.length < 3
            ? 'First Name must be at least 3 characters long!'
            : '';
        break;
      case 'lastname':
        errors.lastname =
          value.length < 4
            ? 'Last Name must be at least 4 characters long!'
            : '';
        break;
      case 'username':
        errors.username =
          this.checkcodechefusername(value) === false
            ? 'Must start with a lowercase letter from (a-z) ,Must be between 4 to 14 characters long, Must end with a letter (a-z) or number (0-9), Must not contain a sequence of two or more underscores (_), Can contain lowercase letters from (a-z), digits or underscores! '
            : '';
        break;

      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;

      case 'country':
        errors.country =
          value.length < 2 ? 'Country must be at least 4 characters long!' : '';
        break;

      case 'org':
        errors.org =
          value.length < 5
            ? 'Organization must be at least 5 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      alert(
        'Thank you for your valuable time . You have been successfully registered ! '
      );
      axios.post(baseUrl + 'registration', {
        name: this.state.name,
        lastname: this.state.lastname,
        username: this.state.username,
        country: this.state.country,
        email: this.state.email,
        org: this.state.org
      });
      console.info('Valid Form');
    } else {
      alert('Please fill valid details !');
      console.error('Invalid Form');
    }
  };

  render() {
    console.log(typeof(countries[0].name));
    const { errors } = this.state;
    return (
      <div className="registration">
        <div className="form-container">
          <img
            id="reg_typography"
            src={require("../assets/img/registration.png")}
            alt=""
          />
          <span id="one">
            Embark on the code cooking journey off in the far lands of
            CodeChef's turf
          </span>
          <form action="" onSubmit={this.handleSubmit} noValidate>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
              noValidate
            />
            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
              noValidate
            />
            {errors.lastname.length > 0 && (
              <span className="error">{errors.lastname}</span>
            )}
            <input
              id="username"
              name="username"
              type="text"
              placeholder="CodeChef Username"
              onChange={this.handleChange}
              noValidate
            />
            {errors.username.length > 0 && (
              <span className="error">{errors.username}</span>
            )}
            <input
              id="phone"
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
            <div className="select">
              <select name="country" id="country" onChange={this.handleChange}>
                <option value="" selected disabled hidden>
                  Select Country
                </option>
                {countries.map((country) => (
                  <option value={country.name} key={country.code}>{country.name}</option>
                ))}
              </select>
            </div> 
             
            {errors.country.length > 0 && (
              <span className="error">{errors.country}</span>
            )}
            <input
              id="uni"
              name="org"
              type="text"
              placeholder="College/Organisation"
              onChange={this.handleChange}
              noValidate
            />
            {errors.org.length > 0 && (
              <span className="error">{errors.org}</span>
            )}
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
