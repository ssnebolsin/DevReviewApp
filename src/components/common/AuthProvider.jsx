import {useState} from 'react'
import {getAuth, signInWithPopup} from 'firebase/auth'
import {app, googleAuthProvider } from '../../firebase'
import CurrentUser from './CurrentUser'
import SignInButton from './SignInButton'

const AuthProvider = ()=>{
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const startLoginWithGoogle = () => {
        auth.onAuthStateChanged((user) => {
          if (user != null) {
            return setUser(user);
          }
    
          signInWithPopup(auth, googleAuthProvider)
            .then((creds) => setUser(creds.user))
            .catch((e) => alert(e));
        });
      };

    return user != null ? (
        <>
          <CurrentUser user={user}/>
        </>
      ) : (
        <div>
            <SignInButton login = {startLoginWithGoogle}/>
            <SignInButton login = {startLoginWithGoogle}/>
        </div>
            

        )

    
}

export default AuthProvider