import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../components/Login/Firebase/firebase.init'


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                setUser(result.user)
            })
            .finally(()=> setIsLoading(false))

    }
    // here observer 

    useEffect( () =>{
       const unSubscribed= onAuthStateChanged(auth, (user)=>{

            if(user){ // if user exsist then set it 
                setUser(user) 
            }else{
                 setUser({})  //otherwise set empty
            }
            setIsLoading(false)
        })
        return () => unSubscribed
    }, [])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
         .then(() =>{ })
         .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        googleSignIn,
        logOut
    }
}

export default useFirebase