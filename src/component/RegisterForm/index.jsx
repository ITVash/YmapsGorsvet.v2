import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Cascader,
  message
} from 'antd';
import md5 from 'md5';

import './style.scss';
const access = [
  {
    value: "1",
    label: 'Гость',
  },
  {
    value: "2",
    label: 'Монтер',
  },
  {
    value: "3",
    label: 'Директор',
  },
  {
    value: "4",
    label: 'Диспетчер',
  },
  {
    value: "5",
    label: 'Администратор',
  },
];

const RegisterForm = props => {
  const [ confirm, setConfirm ] = useState(false);
  window.props = props;
  const { getFieldDecorator } = props.form;
  const { login } = props;
  //let history = useHistory();
  const success = () => {
    message.success("Пользователь успешно добавлен!");
  };
  /*const error = () => {
    message.error("Не удалось добавить пользователя!");
  };*/
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const auth = {
          login: values.login,
          email: values.email,
          password: md5(values.password),
          confirmPassword: md5(values.confirmpassword),
          access: Number(values.access[0])
        };        
         login(auth);
         props.form.resetFields();
        //history.push('/');
      } else console.error(`Ошибка авторизации: ${err}`);
    });
  };

  const confirmBlur = e => {
    const { value } = e.target;
    setConfirm(confirm || !!value);
  };

  const firstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Оба пароля не совпадают!');
    } else callback();
  };
  const nextPassword = (rule, value, callback) => {
    const { form } = props;
    if ( value && confirm ) {
      form.validateFields(['confirmpassword'], {force: true })
    }
    callback();
  };

  //<h2>Войдите в систему!</h2>
  return (
    <Form className="login-form" onSubmit={ handleSubmit }>
      <Form.Item>
          {getFieldDecorator('login', {
            rules: [
              {
                required: true,
                message: 'Введите Логин',
              },
            ],
          })(<Input placeholder="Логин" />)}
        </Form.Item>
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
        <Form.Item>
          {getFieldDecorator('access', {
            //initialValue: ['Уровень доступа', 'Гость'],
            rules: [
              {
                type: 'array',
                required: true,
                message: 'Введите уровень доступа',
              },
            ],
          })(<Cascader options={ access } placeholder="Выберете уровень допуска" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Введите пароль!',
              },
              {
                validator: nextPassword,
              },
            ],
          })(<Input.Password placeholder="Пароль" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirmpassword', {
            rules: [
              {
                required: true,
                message: 'Введите пароль!',
              },
              {
                validator: firstPassword,
              },
            ],
          })(<Input.Password placeholder="Повторите пароль" onBlur={ confirmBlur } />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={success}>
            Регистрация в системе
          </Button>
        </Form.Item>
        <p>Вернуться на <Link to="/">Главную</Link></p>
    </Form>
  )
}

export default Form.create({ name: 'Register' })(RegisterForm);
