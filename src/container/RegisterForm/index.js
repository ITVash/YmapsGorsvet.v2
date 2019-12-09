import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import { RegisterForm as RegisterFormBase } from '../../component';

const RegisterForm = props => {
  const { fetchSignup } = props;
  /*const [ confirm, setConfirm ] = useState(false);
  console.log('confirm', confirm);

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
  };*/
  return (
		<RegisterFormBase
      /*firstPassword={firstPassword}
      nextPassword={nextPassword}
			confirmBlur={confirmBlur}*/
			login={fetchSignup}
		/>
	);
}

export default connect( ({ auth })=>({ auth }), { ...authActions })(RegisterForm);

/*export default ( () => {
  const handleSubmit = () => {
    console.log('Fuck');
  };
})(RegisterFormBase);*/
