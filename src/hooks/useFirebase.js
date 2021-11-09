import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // login process with google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            });
    };

    // login process with github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            });
    };

    // observation to user state change when login
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);

    // logout process
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => {
                setError(error.message)
            });
    };

    return {
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }
}

export default useFirebase;