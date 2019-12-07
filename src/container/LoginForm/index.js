import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import { LoginForm as LoginFormBase } from '../../component';

const LoginForm = props => {
  const { fetchLogin } = props;
  return (
    <LoginFormBase login={ fetchLogin } />
  )
}

export default connect( ({ auth })=>({ auth }), { ...authActions })(LoginForm);
