import './index.scss';

import {
  GlobalContext
} from '../../contexts';

import {
  useContext
} from 'react';

export default function List() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div>
      {state.userData.name}
    </div>
  );
}
