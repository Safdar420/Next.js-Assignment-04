'use client'
import React from 'react'
interface TCard{
    name:string,
    rollNo:number,
    day:string
}
export default function Card(props:TCard) {
  return (
    <>
    <div className="bg-slate-200 max-w-80 max-h-52 border-2 border-sky-400 rounded-lg p-6 m-48 hover:shadow-2xl">
      <div className="right absolute left-80 bg-slate-600 border-5 border-sky-400 w-10 h-10 ml-32 hover:bg-blue-400"></div>
     <h1>Name:{props.name}</h1>
     <h1>rollNo:{props.rollNo}</h1>
     <h1>day:{props.day}</h1>
     <h1>Quater-2</h1>
     
    </div>
    </>
  )
}
