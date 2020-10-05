import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

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
          <Button
            style={{ backgroundColor: '#32e0c4' }}
            type='button'
            onClick={() => this.setModalOpen(!this.state.modalOpen)}
          >
            Give Feedback
          </Button>

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
              <Button color='primary' type='button'>
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </div>
    );
  }
}

export default FeedbackModal;
