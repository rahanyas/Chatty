import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, updateFeild } from '../features/user/userSlice.js' 
import { useState, useEffect } from 'react'
import '../styles/page/signup.style.scss'

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.isLogedIn) navigate('/home')
  }, [user.isLogedIn, navigate])

  const handleChange = (e) => {
    setErrorMsg('')
    const { name, value } = e.target
    dispatch(updateFeild({ field: name, value }))
  }

  const handleSubmit = () => {
    const { name, mobile, pass, email } = user

    if(confirmPass.length < 0){
        setErrorMsg('please re-enter password to confirm');
        return
    }
    
    if (confirmPass !== pass) {
      setErrorMsg('Passwords do not match')
      setConfirmPass('')
      return
    }


    if (!name || !email || !pass || !mobile) {
      setErrorMsg('Enter all valid fields')
      return
    }

    if (mobile.length !== 10) {
      setErrorMsg('Please enter a valid mobile number')
      return
    }

    if (pass.length < 3) {
      setErrorMsg('Password must be at least 3 characters')
      return
    }

    dispatch(register({ name, email, mobile, pass }))
  }

  return (
    <div className="container">
      {(errorMsg.length > 0 || user.msg.length > 0) && (
        <div className='err-container'>
          <h1 className={user.status === 'success' ? 'success-msg' : 'err-msg'}>
            {errorMsg || user.msg}
          </h1>
        </div>
      )}

      <div className="box1">
        <input type="text" name="name" value={user.name} placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} required />
        <input type="number" name="mobile" value={user.mobile} placeholder="Mobile" onChange={handleChange} required />
        <input type="password" name="pass" value={user.pass} placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPas" value={confirmPass} placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} required />

        <button type="button" onClick={handleSubmit}>Signup</button>
      </div>

      <span  className='span1'>Already have an account? <Link to='/login' className='login-link'>Login</Link></span>
      <span className='span2'>or</span>
      <button className='oauth-btn'>Login with Google</button>
    </div>
  )
}

export default Signup
