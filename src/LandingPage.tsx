import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { landigPageDTC } from "./Peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landigPageDTC>({})

    useEffect(() => {
      const timerId = setTimeout(()=>{
        setPeliculas(
          {enCartelera: [
          {
            id: 1, 
            titulo: "Juegos del hambre 1", 
            poster: "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_QL75_UX190_CR0,4,190,281_.jpg"
          },
          {
            id: 2, 
            titulo: "Dragon ball super", 
            poster: "https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_QL75_UX190_CR0,2,190,281_.jpg"
          },
        ],
        proximosEstrenos: [
          {
            id: 1, 
            titulo: "An Inconvenient Love", 
            poster: "https://m.media-amazon.com/images/M/MV5BOTkwYzJiMjQtZDQyOC00MzViLWFlNGEtNWNhMzMzMTExNzdmXkEyXkFqcGdeQXVyMTE5OTM1MjU3._V1_QL75_UY281_CR3,0,190,281_.jpg"
          },
          {
            id: 2, 
            titulo: "El menú", 
            poster: "https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_QL75_UX190_CR0,2,190,281_.jpg"
          },
        ]
      })
      },500)
      return () => clearTimeout(timerId);
    })  
    // const peliculaPrueba: pelicula = {
    //   id: 1, 
    //   titulo: "Juegos del hambre 1", 
    //   poster: "https://www.freepik.es/vector-gratis/fondo-festival-cine-cine_6868399.htm#query=pelicula&position=0&from_view=search&track=sph"
    // }
  
    return(
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>
            <h3>Proximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    )
}