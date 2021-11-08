import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

 initializeFirebase();
const useFirebase = () => {


    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();




    const registerUser = (email, password, name, history,location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('') ;
            const newUser = {email, displayName: name}
            
            setUser(newUser)
            // Send name to firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
            
            });
            const destination = location?.state?.from || '/';
            history.replace(destination)
        
          })
          .catch((error) => {
            
           setAuthError(error.message) ;
         
          })
          .finally(()=> setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination)
        setAuthError('') ;
      })
      .catch((error) => {
        setAuthError(error.message) ;
      })
      .finally(()=> setIsLoading(false));

        }
        
        const signInWithGoogle = (location, history) => {
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            const destination = location?.state?.from || '/';
            history.replace(destination)
            setAuthError('')
            
            // ...
          }).catch((error) => {
            setAuthError(error.message) ;
          })
          .finally(()=> setIsLoading(false));
        }

    // Observe user state 
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              
            } else {
             setUser({})
            }

            setIsLoading(false)
          });
          return () => unsubscribe;
          
    },[])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInWithGoogle,
        authError,
        registerUser,
        logout,
        loginUser, 
        
    }
}

export default useFirebase;