import AppHeader from './components/common/AppHeader.jsx';
import { Outlet, useLocation } from 'react-router-dom';


const App = () => (

  <>
    <AppHeader />
    <Outlet />
  </>
);

export default App;
