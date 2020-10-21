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
    alert('Thank you for your valuable time. Your feeback has received ');
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

          <div className='usrp-fb-1'>
            <i>
              <svg
                className='svg-icon'
                viewBox='0 0 20 20'
                style={{ fill: 'white' }}
              >
                <path d='M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z'></path>
              </svg>
            </i>
            <div
              className='usrp-fb-title'
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
                <h6>Share your thouhts/feedback. We are all ears!</h6>
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
