import { useRef } from "react"
import {firestore} from "../firebase";
import { addDoc, collection } from "firebase/firestore";

 const Home = () => {
let messageRef = useRef();
const ref = collection(firestore, "messages");


const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
}


let data = {
    message:messageRef.current.value,
}

try { 
    addDoc(ref, data);
}catch (e) {
 console.log(e);
}

  return (
    <div>
        <form onSubmit={handleSave}>
        <label>Enter message</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Home