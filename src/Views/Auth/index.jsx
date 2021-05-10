import axios from 'axios';

import {
  useContext
} from 'react';

import {
  useHistory,
  useLocation
} from 'react-router-dom';

import {GlobalContext} from '../../contexts';

export default function Auth () {
  const token = window.localStorage.getItem('token');
  const [state, dispatch] = useContext(GlobalContext);
  const history = useHistory()
  const location = useLocation()

  if (token) {
    axios('/current-user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (response.data.result) {
        const {name, email} = response.data;

        dispatch({
          payload: {
            userData: {
              name,
              email
            }
          }
        });

        if (location.state.from) {
          history.replace(location.state.from);
        } else {
          history.replace('/list');
        }
      } else {
        window.localStorage.removeItem('token');
        history.replace('/login');
      }
    })
      .catch(() => {
        window.localStorage.removeItem('token');
        history.replace('/login');
      });
  } else {
    history.replace('/login');
  }

  return (
    // TODO: Loader
    <div/>
  )
}
