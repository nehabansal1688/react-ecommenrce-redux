import React from 'react';
import SignUpForm from '../../components/sign-up-form/signUpForm.component';
import SignInForm from '../../components/sign-in-form/signInForm.component';
import './authentication.style.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
