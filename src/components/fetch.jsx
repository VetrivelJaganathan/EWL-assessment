import React, { useEffect } from 'react';
import axios from 'axios';


function Fetch({url}) {
console.log(url);
    useEffect (() => {
        axios.get(url).then((result) => {
            console.log(result.data);
            localStorage.setItem('details', JSON.stringify(result.data.results))
        })
    })
  return (
    <div>Fetch</div>
  )
}

export default Fetch