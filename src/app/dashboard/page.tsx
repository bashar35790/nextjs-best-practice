"use client"

import dynamic from 'next/dynamic';
const SimpleCart =  dynamic(() => import('@/components/Chart'),  {
    loading: () => <p>Loading...</p>,
  })
import React, { useState } from 'react'

function Dashboard() {
    const [showChart, setShowChart]= useState<boolean>(false);

  return (
    <div>
        <h1 className='text-5xl text-red-500'>Dashboard</h1>
        <button onClick={()=>setShowChart(!showChart)}>Show chanrt</button>
        {
            showChart && (
                <SimpleCart></SimpleCart>
            )
        }
    </div>
  )
}

export default Dashboard