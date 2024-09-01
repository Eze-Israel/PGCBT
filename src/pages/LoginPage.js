import FullPageLoader from '../components/FullPageLoader.jsx';
import {useState} from 'react';
import { auth } from '../firebase/firebaseConfig.jsx';
import {  createUserWithEmailAndPassword,
       sendPasswordResetEmail,
       signInWithEmailAndPassword, 
       onAuthStateChanged,
      } from "firebase/auth";
      import { useDispatch } from 'react-redux';
      import {setUser} from '../store/usersSlice.jsx';


function LoginPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [loginType, setLoginType] = useState('login');
 const[userCredentials, setuserCredentials] = useState('');
 const[error, setError] = useState('');
  console.log(auth)


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // no need for thenables in handlelogin and signup this will handle it
      dispatch(setUser({id: user.uid, email: user.email }));
      
    } else {
      dispatch(setUser(null));
      
    }
    if(isLoading){
      setIsLoading(false)
    }
  });

   const handlecredentials = (e) => {
    setError(" ");
    setuserCredentials({...userCredentials, [e.target.name]: e.target.value});
    
   }

   const handleSignUp =(e) => {
   e.preventDefault();
    setError(" ");
   createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
  .catch((error) => {
    setError(error.message);
  });
   }

   const handleLogin = (e)=>{
    e.preventDefault();
    setError(" ");
    signInWithEmailAndPassword(auth, userCredentials.email,  userCredentials.password)
   .catch((error) => {
    setError(error.message);
   });
   }

   const handlePasswordReset =() => {
    const email = prompt(" Please enter your email")
    sendPasswordResetEmail(auth, email)
    alert(" Email sent! check your inbox for password reset instructions!");
   }


    return (
      <>
        { isLoading && <FullPageLoader></FullPageLoader> }
        
        <div className="container login-page">
          <section className='section'>
            <h1>Welcome to my CBT APP</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>Email *</label>
                      <input type="text" name="email"
                      placeholder="Enter your email" 
                      onChange={(e) => {handlecredentials(e)}}
                      />
                  </div>
                  <div className="form-control">
                      <label>Password *</label>
                      <input type="password"
                      name="password" 
                      placeholder="Enter your password"
                      onChange={(e) => {handlecredentials(e)}}
                      />
                  </div>
                  {
                    loginType == 'login' ?
                    <button 
                    onClick={(e) => {handleLogin(e)}} 
                    className="active btn btn-block"
                    >Login</button>
                    : 
                    <button
                    onClick={(e) =>{ handleSignUp(e)}} 
                    className="active btn btn-block"
                    >Sign Up</button>
                  }

                  {
                    error  && 
                    <div className='error'>
                      {error}
                     </div>
                  }
                
                  <p onClick={(e)=> {handlePasswordReset(e)}} className="forgot-password">Forgot Password?</p>
                  
              </form>
          </section>
        </div>
      </>
    )
  }
  
  export default LoginPage
  