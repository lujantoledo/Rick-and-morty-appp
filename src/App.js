import React, { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import { Navbar } from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [paginacion, setPaginacion] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setPaginacion(data.info)
      })
       .catch((error) => console.log(error));
  };


const onPrevious = ()=>{
  fetchCharacters(paginacion.prev);
}

const onNext = ()=>{
  fetchCharacters(paginacion.next);
}

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      
      
      <div className="container">
            <Pagination prev={ paginacion.prev } next={paginacion.next}  onPrevious={onPrevious} onNext={ onNext}/>

           <Characters characters= {characters} />

           <Pagination />
      </div>
    </>
  );
}

export default App;
