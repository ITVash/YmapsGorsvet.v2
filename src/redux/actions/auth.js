import { auth } from '../../api';

const actions = {
  login: items => ({
    type: 'AUTH_LOGIN',
    payload: items
  }),
  logout: items => ({
    type: 'AUTH_LOGOUT',
    payload: items
  }),
  fetchSignup : data => {
    auth.signup(data)
      .then(() => {
        console.log('Пользователь добавлен');
      })
      .catch( err => {
        console.log(`Ошибка при добавлении нового пользователя! ${ err }`);
      });
  },
  fetchAuth: id => dispatch => {
    auth.getAuth( id )
      .then( ({ data }) => {
        dispatch(actions.login( data ));
      })
      .catch( err => {
        console.error(`Нет информации об аккаунте: ${ err }`);
      });
  },
  fetchLogin: data => dispatch => {
    auth.login(data)
      .then( ({data}) => {
        const auth = {
          login: data.login,
          access: data.access
        };
        if ( data.token ) {
          dispatch(actions.login(auth));
          localStorage.setItem('token', data.token);
        }
      })
      .catch( err => {
        console.error(`Ошибка API: ${err}`);
      });
  },
};

export default actions;