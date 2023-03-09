
import { useEffect, useState } from 'react';
import './App.css';
import Movies from './pages/Movies';

function App() {
  const [list, setList]=useState([]);
  const [searchinput, setsearchinput] =useState("man");
  const [input, setinput] = useState("")

  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?s=${searchinput}&apikey=1f397e09`)
    .then(response=>response.json())
    .then(json=>setList(json.Search))
  },[searchinput])

  return (
    <>
      <div className='inputbox'>
        <input type="text" value={input} onChange={(e)=>{
          setinput(e.target.value)
        }} placeholder="Search Your Favourite Movies"></input>
        <button onClick={()=>setsearchinput(input)}>Search</button>
      </div>
      <h3>Sharing a few of our favourite movies</h3>
      <div className='itemslist'>
        {list.map((item)=><Movies title={item.Title} year={item.Year} poster={item.Poster}/>)}
      </div>
    </>
  );
}

export default App;
