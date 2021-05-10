import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  useContext
} from 'react';
import {GlobalContext} from '../../contexts';
import {NavLink} from 'react-router-dom';

export default function Sidebar (props) {
  const [state, dispatch] = useContext(GlobalContext);

  function menuToggle() {
    dispatch({
      payload: {
        collapsed: !state.collapsed
      }
    })
  }

  return (
    <div className={`sidebar ${state.collapsed ? '-collapsed' : ''}`}>
      <div className={'sidebar__toggle'} onClick={menuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <aside className={'sidebar__menu'}>
        <NavLink to={'/list'} activeClassName={'-active'}>List</NavLink>
        <NavLink to={'/empty'} activeClassName={'-active'}>Empty Page</NavLink>
        <NavLink to={'/all'} activeClassName={'-active'}>All Assets</NavLink>
      </aside>
    </div>
  );
}
