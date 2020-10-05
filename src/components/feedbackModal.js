import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import '../assets/scss/feedbackModal.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>;
  }
  return null;
}

class FeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      formValid: false,
      validname: false,
      validmessage: false,
      errmessage: {},
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalOpen = this.setModalOpen.bind(this);
  }
  handleSubmit(event) {
    alert('Thank you for your valuable time .Your feeback has received ');
    axios.post(baseUrl + 'feedback', {
      name: this.state.name,
      message: this.state.message,
    });
    event.preventDefault();
  }

  setModalOpen(modalOpen) {
    this.setState({ modalOpen });
  }
  validateForm = () => {
    const { validname, validmessage } = this.state;
    this.setState({
      formValid: validmessage && validname,
    });
  };
  updatename = (name) => {
    this.setState({ name }, this.validatename);
  };
  updatemessage = (message) => {
    this.setState({ message }, this.validatemessage);
  };
  validatename = () => {
    const { name } = this.state;
    let validname = true;
    let errmessage = { ...this.state.errmessage };

    if (name.length < 3) {
      validname = false;
      errmessage.name = 'Must be at least 3 characters long';
    }

    this.setState({ validname, errmessage }, this.validateForm);
  };
  validatemessage = () => {
    const { message } = this.state;
    let validmessage = true;
    let errmessage = { ...this.state.errmessage };

    if (message.length < 3) {
      validmessage = false;
      errmessage.message = 'Must be at least 3 characters long';
    }

    this.setState({ validmessage, errmessage }, this.validateForm);
  };

  render() {
    return (
      <div>
        <>
          {/* <Button
            style={{ backgroundColor: '#32e0c4' }}
            type='button'
            onClick={() => this.setModalOpen(!this.state.modalOpen)}
          >
            Give Feedback
          </Button> */}

          <div class='usrp-fb-1'>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                  clip-rule='evenodd'
                />
              </svg>
            </i>
            <div
              class='usrp-fb-title'
              onClick={() => this.setModalOpen(!this.state.modalOpen)}
            >
              Give Feedback
            </div>
          </div>

          <Modal
            toggle={() => this.setModalOpen(!this.state.modalOpen)}
            isOpen={this.state.modalOpen}
          >
            <div className=' modal-header'>
              <h5 className=' modal-title' id='exampleModalLabel'>
                Feedback
              </h5>

              <button
                aria-label='Close'
                className=' close'
                type='button'
                onClick={() => this.setModalOpen(!this.state.modalOpen)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <ModalBody>
              {' '}
              <div className='col'>
                <h6>Share your thoughts or Report problems</h6>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor='name' md={3}>
                      Name*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={(e) => this.updatename(e.target.value)}
                      />
                      <ValidationMessage
                        valid={this.state.validname}
                        message={this.state.errmessage.name}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor='message' md={3}>
                      Message*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='textarea'
                        id='message'
                        name='message'
                        rows='5'
                        placeholder='Your message'
                        value={this.state.message}
                        onChange={(e) => this.updatemessage(e.target.value)}
                      ></Input>
                      <ValidationMessage
                        valid={this.state.validmessage}
                        message={this.state.errmessage.message}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 10, offset: 3 }}>
                      <Button
                        type='submit'
                        color='primary'
                        disabled={!this.state.formValid}
                      >
                        Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color='secondary'
                type='button'
                onClick={() => this.setModalOpen(!this.state.modalOpen)}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </div>
    );
  }
}

export default FeedbackModal;