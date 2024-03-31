import {useState} from 'react'
import {getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../../firebase'
import CurrentUser from './CurrentUser'
import SignInButton from './SignInButton'
import { useNavigate, useLocation  } from "react-router-dom";
import AppButton from './AppButton'



const AuthProvider = ()=>{
    let [user, setUser] = useState(null)
    const auth = getAuth(app)

    let navigate = useNavigate(); 

    const toLoginPage = () =>{ 
        let path = `/login`; 
        navigate(path);
    }
    const toHomePage = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    const currentLocation = useLocation();

    const startLogin = (authProvider) => {
        auth.onAuthStateChanged((user) => {
          if (user != null) {
            return setUser(user);
          }
    
          signInWithPopup(auth, authProvider)
            .then((creds) => setUser(creds.user))
            .catch((e) => alert(e));
        });
      };

    if(user == null && currentLocation.pathname == '/login' ){
        return(
            <div className='flex flex-col flex-wrap'>
                <SignInButton login = {startLogin} provider={'google'}/>
                <SignInButton login = {startLogin} provider={'github'}/>
            </div>     
        )
    } else if (user == null){
        return(
            <AppButton func={toLoginPage} value={'Login'}/>
        )
    } else if(user != null && currentLocation.pathname == '/login'){
        return(
            <div className='flex flex-col flex-wrap'>
                <p className='ml-3 mt-3'>You are successfully logged in</p>
                <AppButton func={toHomePage} value={'Home'}/>
            </div>
        )
    } else if(user != null){
        return(
            <div className='flex flex-col flex-wrap'>
                <CurrentUser userPhotoUrl={user.photoURL} userDisplayName={user.providerData[0].displayName}/>
             </div>  
        )
    }
    
}

export default AuthProvider