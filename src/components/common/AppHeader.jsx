import AuthProvider from "./AuthProvider";
import {useLocation } from 'react-router-dom';

const AppHeader = () => {

  const currentLocation = useLocation();

      return(
      <>
        <AuthProvider/>
      </>
    )

  // if(currentLocation.pathname != '/login' ){
  //   return(
  //     <>
  //       <AuthProvider/>
  //     </>
  //   )
  // }

};

export default AppHeader;
