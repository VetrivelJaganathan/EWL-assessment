import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fetch.css";

function Fetch({url}) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("details") || "[]"));
    useEffect (() => {
        axios.get(url).then((result) => {
            setData(result.data.results);
            console.log(result.data.results);
            localStorage.setItem('details', JSON.stringify(result.data.results))
        })
    },[])
  return (
    <>
    
    <div className=" container d-flex flex-column gap-5">
        {
            (data.length > 0) && data.map((details, index) => (
                <div className="d-flex  flex-row" key={index}>
                    <img src={details.picture.large} className ="img" /><br />
                    <div className="d-flex flex-column p-4">
                        <span>{"Title : "}{details.name.title}<br/>{"First Name : "}{details.name.first}<br/> {"Last Name : "}{details.name.last}</span> <br></br>
                        <span>{"Email : "}{details.email } </span>
                        <span>{"Country : "}{details.location.country}</span>
                    </div>

                </div>
            ))
        }
        {
            (data.length === 0) && <span>No Data</span>
        }
    </div>
   

    
    
    
    
    </>
  )
}

export default Fetch