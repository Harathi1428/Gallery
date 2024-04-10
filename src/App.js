import { useState } from 'react';
import axios from 'axios';
import Gal from './Gal';
import './App.css';

function App() {
  const[Word,setWord]=useState("");
  const[Data,setData]=useState("");
  const apikey = '42113559-4b559fc64cf23545d8e1c79f5';
   function wrd(e){
    setWord(e.target.value);
   }
  function ftch(){
  axios.get(`https://pixabay.com/api/?key=${apikey}&q=${Word}&per_page=40`)
  .then((response)=>{
    setData(response.data.hits);
    console.log(response.data);
  })
  .catch((err)=>{
    console.log(err);
  })
  }
  return (
    <div className="App">
     <div className='frm'>
      <input type="text" className='inp' placeholder="search here.." onChange={wrd} value={Word}/>
      <button  className='btn' onClick={ftch}>search</button>
     </div>
     <br></br>
     <div >{Data.length>=1?<Gal data={Data}/>:<h2>No image loaded..!</h2>}</div>
    </div>
  );
}

export default App;
