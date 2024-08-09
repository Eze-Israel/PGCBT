import "../css/Home.css"
import Mydate from './Mydate'

const Header = () => {
  return (
    <div className='Header'>
   <p style={{fontSize: '20px', backgroundColor: 'gray', textAlign: 'center'}}>Built with React.js</p>     
<p className="date"> <h4 style={{color:"brown"}}>Computer Based Test App on JavaScript Proficiency</h4> <Mydate /></p>

    </div>
  )
}

export default Header