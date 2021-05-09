import './index.scss';
import axios from 'axios';

import {
  GlobalContext
} from '../../contexts';

import {
  Card,
  Input,
  Button
} from '../../Components';

import {
  useHistory,
  Redirect
} from 'react-router-dom';

import {
  useContext,
  useEffect
} from 'react';

export default function Login() {
  const [state, dispatch] = useContext(GlobalContext);
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    axios(`/login`, {
      data,
      method: 'POST'
    })
      .then((response) => {
        if (response.data.result) {
          // TODO: NOT SECURE! Use SameSite cookie for production.
          window.localStorage.setItem('token', response.data.token);
        } else {
          window.localStorage.removeItem('token');
        }

        return response.data.result;
      })
      .then((result) => {
        if (result) {
          history.replace('/list');
        } else {
          // TODO: Credentials error
        }
      })
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      dispatch({
        payload: {
          jwt: token
        }
      });

      history.replace('/list');
      return true;
    }
  })

  return (
    <Card mid={true}>
      <form onSubmit={onSubmit}>
        <Input placeholder={'example@example.com'} className={'mb-5'} name={'email'}>E-Mail</Input>
        <Input type={'password'} placeholder={'******'} className={'mb-5'} name={'password'}>Password</Input>
        <Button type={'submit'} className={'w-full mb-3'}>Login</Button>
        <Button className={'-transparent w-full'}>Register</Button>
      </form>
    </Card>
  )
}
