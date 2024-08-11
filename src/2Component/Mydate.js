
const Mydate = () => {
// 
let date = new Date()
let day  = date.getDay()
let yr = date.getFullYear()
let mark = date.getDate()
let mnth =date.getMonth()+1
let arr = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


  return (
    <>

    <div className='DATE'> {arr[day]} {mark} - {mnth} - {yr}  </div>


    </>
  )

}

export default Mydate
