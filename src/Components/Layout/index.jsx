import './index.scss';
import Sidebar from '../Sidebar';
import {
  useContext,
  useEffect
} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-regular-svg-icons';
import {GlobalContext} from '../../contexts';
import {Button} from '../index';

export default function Layout (props) {
  const [state, dispatch] = useContext(GlobalContext);

  function changeTheme () {
    dispatch({
      payload: {
        dark: !state.dark
      }
    });
  }

  useEffect(() => {
    document.querySelector('html').classList.toggle('dark', state.dark);
  })

  return (
    <div className={'layout'}>
      <Sidebar />
      <div className={'layout__content'}>
        <div className={'layout__top'}>
          <Button onClick={changeTheme}>
            <FontAwesomeIcon icon={state.dark ? faLightbulb : faMoon} />
          </Button>
        </div>
        <div className={'layout__main'}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
