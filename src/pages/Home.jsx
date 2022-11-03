import React, { useEffect } from 'react'

export default function Home() {

    useEffect (()=>{
        console.info(import.meta.env.VITE_SECRETKEY)
    },[])

  return (
    <div className='App'>Home</div>
  )
}
