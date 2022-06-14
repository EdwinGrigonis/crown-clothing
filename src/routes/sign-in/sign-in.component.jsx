import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils" 

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
    }

    return (
        <div>
            <h1>Sign in PAge</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn