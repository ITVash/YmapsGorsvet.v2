import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {
  Form,
  Input,
  Button
} from 'antd';
import md5 from 'md5';

import './style.scss';

const LoginForm = props => {
  window.props = props;
  const { getFieldDecorator } = props.form;
  const { login, isLogin } = props;
  let history = useHistory();
  console.log(`Доступ ${isLogin}`)
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const auth = {
          email: values.email,
          password: md5(values.password)
        };
        login(auth);
        if ( isLogin ) {
          history.push('/');
        }
      } else console.error(`Ошибка авторизации: ${err}`);
    });
  };
  //<h2>Войдите в систему!</h2>
  return (
    <Form className="login-form" onSubmit={ handleSubmit }>
      <center><img src="./logo.png" alt="logo" /></center>
      <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Введите валидный Е-Майл',
              },
              {
                required: true,
                message: 'Введите Е-Майл',
              },
            ],
          })(<Input placeholder="Е-Маил" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Введите пароль!',
              },
            ],
          })(<Input.Password placeholder="Пароль" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти в систему
          </Button>
        </Form.Item>
        <p>Powered by <a href="https://vk.com/slayerakavash">Vash</a> & <a href="https://vk.com/the.zh3ka">Zh3ka</a></p>
        {isLogin && (
          <Redirect to="/" />
        )}
    </Form>
  )
}

export default Form.create({ name: 'login' })(LoginForm);
