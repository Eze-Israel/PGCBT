import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.jsx";
import { useDispatch } from 'react-redux';
import {setUser} from '../store/usersSlice.jsx';


function HeaderLog() {
  const dispatch = useDispatch();

  const handleSignOut = ()=> {
      signOut(auth).then(() => {
          dispatch(setUser(null));
      }).catch((error) => {
        console.log(error)
      });
    
  }

    return (
      <>
            <div className="header-btns">
                    <button 
                    className="btn-logout"
                    onClick={handleSignOut}
                    >
                      Logout
                    </button>
                    
            </div>
    
      </>
    )
  }
  
  export default HeaderLog
  