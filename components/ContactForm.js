import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



class ContactForm extends React.Component {

   state = {
      nameContact: '',
      email: '',
      phone: '',
      stateForm: null
   };

   handleParam = event => {
      this.setState({ [event.target.name]: event.target.value });
   }

   sendContact = async event => {
      event.preventDefault();

      const state = this.state;

      const res = await fetch(`http://localhost:8000/send-contact`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: JSON.stringify(state)
      });
      const data = await res.json();

      if(data.status == 'success'){
         this.setState({
            nameContact: '',
            email: '',
            phone: '',
            stateForm: null
         })
      }

      this.setState({
         stateForm: data.status
      });

   }

   render() {

      return (
         <Container>
            <h1 className="text-center">Add Contact</h1>

            <div>
               <br />
               <br />
               {this.state.stateForm == 'success' &&
                  <Alert variant={ 'success' }>
                     The contact was added correctly
                  </Alert>
               }
               {!this.state.stateForm == 'error' &&
                  <Alert variant={ 'danger' }>
                     An error occurred
                  </Alert>
               }
               <Form action="post" id="form-contact" onSubmit={this.sendContact}>
                  <Form.Group controlId="formName">
                     <Form.Label>Name</Form.Label>
                     <Form.Control name="nameContact" value={this.state.nameContact} onChange={this.handleParam} type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                     <Form.Label>Email</Form.Label>
                     <Form.Control name="email" value={this.state.email} onChange={this.handleParam} type="text" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formPhone">
                     <Form.Label>Phone</Form.Label>
                     <Form.Control name="phone" value={this.state.phone} onChange={this.handleParam} type="text" placeholder="Enter phone" />
                  </Form.Group>
                  <div className="text-right">
                     <Button variant="success" type="submit">Send</Button>
                  </div>
               </Form>


            </div>

         </Container>
      );

   }
}

export default ContactForm;