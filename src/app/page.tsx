import Image from "next/image";
import React from "react"
import Card from "./card";
export default function Home() {
  return (
   <>
    <Card name='SafdarAli' rollNo={123} day='Monday 9am to 12pm'/>
    <Card name='ZafarAli' rollNo={456} day='Monday 2pm to 5pm'/>
    <Card name='AsifAli' rollNo={789} day='Monday 7pm to 10pm'/>
    
    </>
  );
}
 