import { useEffect, useState } from "react";

export default function EjemploReloj(){
    const [fecha, setFecha] = useState(new Date);
    useEffect(()=>{
      const timerId = setInterval(()=>{
        setFecha(new Date());
      }, 1000);
      return () => clearInterval(timerId);
    });
  
    return (
        <label>la hora es {fecha.toString()}</label>
    )
}