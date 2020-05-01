import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

import { toast } from 'react-toastify';

export const Messaging = () => {
  const [ messages ] = React.useState([
    { name: 'chidimo', message: 'Welcome to firebase messaging with React' },
  ]);
  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            toast.success('Submitted succesfully');
          }, 1000);
        }}
      >
        {(prop) => {
          const { handleSubmit, handleChange } = prop;
          return (
            <>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Enter your name"
                  onChange={handleChange('name')}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={handleChange('message')}
                  placeholder="Enter a message"
                />
              </InputGroup>

              <Button variant="primary" onClick={() => handleSubmit()}>
                Submit
              </Button>
            </>
          );
        }}
      </Formik>

      <div className="message-list">
        <h3>Messages</h3>

        {messages.map((m) => {
          const { _id, name, message } = m;
          return (
            <div key={_id}>
              {name}: {message}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
