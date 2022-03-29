
import './App.css';
import { getUnsplash } from './services/getUnsplash';
import { useEffect, useState} from 'react'

function App() {
  const [unsplashData, setUnsplashData] = useState({})

  useEffect(()=>{
    getUnsplash()
    .then( res =>
      setUnsplashData(res)
    )
  },[])

  console.log(unsplashData.request.response)
  
  return(
    <div className="App">
     
    </div>
  );
}

export default App;
