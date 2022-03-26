import React, {useState, useEffect } from 'react'

const Statewise = () => {
    const [data,setData]= useState([]);
    
         const getCovidData =async()=>{
         const res =   await fetch("https://data.covid19india.org/data.json");
         
         const realData = await res.json();
         console.log(realData.statewise);
         setData(realData.statewise);
        }

        useEffect(()=>{
        getCovidData();
        },[]);
    


  return (
    <>
        
        <div className='container-fluid mt-5'>
            <div className='main-heading'>
                <h1 className='mb-2 text-center'><span className='font-weight-bold'></span>Covid19 Tracker Dashboard</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                    
                        <tr>
                             <td>STATES</td>
                            <td>ACTIVE CASES</td>
                            <td>CONFIRMED</td>
                            <td>DEATHS</td>
                            <td>RECOVERED</td>
                            <td>UPDATED</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((curElem, ind)=>{
                            return(
                                <tr key={ind}>
                            <td>{curElem.state}</td>
                            <td>{curElem.active}</td>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.recovered}</td>
                            <td>{curElem.lastupdatedtime}</td>
                        </tr>
                            )

                        })
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Statewise