import React from 'react'
import {
  Form,
  Input,
  Button
} from 'antd';
import md5 from 'md5';

import './style.scss';

const LoginForm = props => {
  const { getFieldDecorator } = props.form;
  const { login } = props;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const auth = {
          email: values.email,
          password: md5(values.password)
        };
        login(auth);
      } else console.error(`Ошибка авторизации: ${err}`);
    });
  };
  return (
    <Form className="login-form" onSubmit={ handleSubmit }>
      <h2>Войдите в систему!</h2>
      <Form.Item label="Е-Майл">
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
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Пароль" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Введите пароль!',
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'login' })(LoginForm);
