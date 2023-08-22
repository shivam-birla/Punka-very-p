import React, { useEffect, useState } from 'react'
import PunkaCard from './PunkaCard'
import SearchBar from './Search'
export default function Punka() {
    const [resp,setResp]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
        const api=async()=>{
        const response= await fetch('https://api.punkapi.com/v2/beers')
        const data=await response.json()
        setResp(data)  
    }
        api()
    },[])
   
useEffect(()=>{
    const searchFunc=async()=>{
       const response=await fetch(`https://api.punkapi.com/v2/beers/${search}`)
       const data=await response.json()
       setResp(data)
    }
    
    searchFunc()
},[search])
console.warn(resp);
  return (
    <>
    <div className="search-bar">
      <input
        type="number"
        placeholder="Search beers..."
        onChange={event => setSearch(event.target.value)}
      />
    </div>
    <div style={{display:'flex ',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}} >
    {resp&&resp.map((item)=><PunkaCard beer={item}  />)
    }
    </div>
    </>
  )
}
