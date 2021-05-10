import './index.scss';

import {
  GlobalContext
} from '../../contexts';

import {
  useContext
} from 'react';
import Layout from '../../Components/Layout';

export default function List() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <Layout>
      {state.userData.name}
    </Layout>
  );
}
