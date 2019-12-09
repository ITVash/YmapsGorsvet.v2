import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import { LoginForm as LoginFormBase } from '../../component';

const LoginForm = props => {
  const { fetchLogin, isLogin } = props;
  return (
    <LoginFormBase isLogin={ isLogin } login={ fetchLogin } />
  )
}

export default connect( ({ auth })=>({ isLogin: auth.auth }), { ...authActions })(LoginForm);
