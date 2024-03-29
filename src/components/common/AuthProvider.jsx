import {useState} from 'react'
import {getAuth, signinwithPopup} from 'firebase/auth'
import {app, googleAuthProvider } from '../../firebase'

const AuthProvider = ()=>{
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    return user != null 
        ? (user.displayname)
        : (
            <button className="btn">
                Login with Google
            </button>
        )
}

export default AuthProvider