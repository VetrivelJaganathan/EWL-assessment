import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fetch.css";

function Fetch({ url }) {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("details") || "[]"));
    const [searchItems, setSearchItems] = useState("")
    console.log(searchItems)
    


    useEffect(() => {
        axios.get(url).then((result) => {
            result.data.results.forEach(element => {
                element.salary = "$1,0000";
            });
            

            
            setData(result.data.results);
            console.log(result.data.results);
            localStorage.setItem('details', JSON.stringify(result.data.results))
        })
    }, [])
    3
    

    const personDetails = () => {
        let searchData = data.filter((item) => item.name.first == searchItems);
        setData(searchData);
        localStorage.setItem('data',JSON.stringify(searchData));
    }

    return (
        <div>

            <div className='submit'>
                <input type="text" placeholder='Enter the text' className='search bg-light ' onChange={(e)=>setSearchItems(e.target.value)}/>
                <button className='searchs' onClick={()=>personDetails()}>submit</button>
            </div>

            <div className=" container d-flex flex-column">

                {
                    (data.length > 0) && data.map((details, index) => (
                        <div className="d-flex  flex-row" key={index}>
                            <img src={details.picture.large} className="img" /><br />
                            <div className="total d-flex flex-column p-4">
                                <span>{"Title : "}{details.name.title}<br />{"First Name : "}{details.name.first}<br /> {"Last Name : "}{details.name.last}</span> <br></br>
                                <span>{"Email : "}{details.email} </span>
                                <span>{"Country : "}{details.location.country}</span>
                                <span>{"Salary : "}{details.salary}</span>

                            </div>

                        </div>
                    ))
                }
                {
                    (data.length === 0) && <span>{"No Data"}</span>
                }

                

            </div>






        </div>
    )
}

export default Fetch