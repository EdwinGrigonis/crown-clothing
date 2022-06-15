import { useState} from 'react'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value})
  }

  return (
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={() => {}}>
            <label>Display Name</label>
            <input 
                type="text" 
                name='displayName' 
                value={displayName} 
                required
                onChange={handleChange} />
            <label>Email</label>
            <input 
                type="email" 
                name='email' 
                value={email}
                required
                onChange={handleChange} />
            <label>Password</label>
            <input 
                type="password" 
                name='password'
                value={password} 
                required
                onChange={handleChange} />
            <label>Confirm Password</label>
            <input 
                type="password" 
                name='confirmPassword' 
                value={confirmPassword} 
                required
                onChange={handleChange} />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm