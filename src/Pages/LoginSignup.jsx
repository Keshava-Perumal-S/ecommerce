import React from 'react'
import '../Pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="logsig-cont">
        <h1>Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' name="" id="" />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsig-log"> Already Have An Account <span>Login Here</span></p>
        <div className="loginsig-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing ,i agree the terms of use & privacy policy.</p>

        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
