import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [authError, setAuthError] = useState('')


    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)

                saveUser(email, name)

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/')

            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setLoading(false))
    }


    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });

    }, [])

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
        })
            .finally(() => setLoading(false))
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://secure-cove-15905.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        loading,
        authError,
        registerUser,
        logOut,
        loginUser
    }
}

export default useFirebase;