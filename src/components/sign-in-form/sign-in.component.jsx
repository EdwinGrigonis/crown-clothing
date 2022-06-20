import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword,
         createUserDocumentFromAuth,
         signInWithGooglePopup,
         signInAuthUserWithEmailAndPassword
       } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
        setCurrentUser();
        resetFormFields();
    } catch(error) {
        switch(error.code) {
            case "auth/wrong-password":
                alert("incorrect password");
                break
                case "auth/user-not-found":
                    alert("no user with such email");
                    break
                default:
                    console.log(error);
        }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value})
  }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Email"
                type='email' 
                name='email' 
                value={email}
                required
                onChange={handleChange} 
            />
            <FormInput
                label="Password"
                type='password' 
                name='password'
                value={password} 
                required
                onChange={handleChange} 
            />
            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm