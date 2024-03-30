import {useState} from 'react'
import {getAuth, signInWithPopup, signOut} from 'firebase/auth'
import {app, googleAuthProvider, githubAuthProvider} from '../../firebase'
import CurrentUser from './CurrentUser'
import SignInButton from './SignInButton'

const AuthProvider = ()=>{
    let [user, setUser] = useState(null)
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

      const startLoginWithGithub = () => {
        auth.onAuthStateChanged((user) => {
          if (user != null) {
            return setUser(user);
          }
    
          signInWithPopup(auth, githubAuthProvider)
            .then((creds) => setUser(creds.user))
            .catch((e) => alert(e));
        });
      };

    //   const signOut = ()=>{
    //     setUser(user = null)
    //     console.log(user)

    //   }


    return user != null ? (
        <>
          <CurrentUser user={user}/>
        </>
      ) : (
        <div>
            <SignInButton login = {startLoginWithGoogle} provider={'google'}/>
            <SignInButton login = {startLoginWithGithub} provider={'github'}/>
        </div>
            

        )

    
}

export default AuthProvider