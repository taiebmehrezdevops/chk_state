import './App.css';
import Person2 from './Component/Person2';
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return(
<div>
<button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Profile" : "show Profile"}
      </button>
      {show && <Person2 />}
      
  </div>
  );
}

export default App;