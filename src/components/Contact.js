import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  }
  
  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameError(true);
    }
  }
  
  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError(true);
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        setEmailError(true);
      }
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
  }
  
  return (
    <div id="portfolio">
      <div className="container">
        <h1 style={{marginTop: '65px'}}>CONTACT</h1>
        <p className="portfolio-sub-description">Send me a message and I will get back to you! </p>
        <hr className="divider-line"/>
        <div className="Contact card" >
          <div className="">
            <form className="form contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <textarea className="form-input form-control" id="name" rows="1" value={name} onBlur={handleNameBlur} onChange={handleNameChange}></textarea>
                {nameError && <div className="error-message text-red">This field is required.</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <textarea className="form-input form-control" id="email" rows="1" value={email} onBlur={handleEmailBlur} onChange={handleEmailChange}></textarea>
                {emailError && <div className="error-message text-red">Please enter a valid email address.</div>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-input form-control" id="message" rows="5"></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
