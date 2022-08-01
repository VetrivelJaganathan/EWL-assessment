import React , {useState ,useEffect} from 'react'
import Fetch from './Fetch';

function App() {
  const [Url, setUrl] = useState(`https://randomuser.me/api/?results=10`)
  return (
    <div><Fetch url ={Url}/></div>
  )
}

export default App