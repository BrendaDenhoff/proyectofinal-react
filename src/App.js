import Navbar from "./components/Navbar";
import Personajes from "./components/Personajes";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "./components/Footer";




function App() {
  
  const[personajes, setPersonajes] = useState([]);

  const urlInicial = "https://fedeperin-harry-potter-api.herokuapp.com/db";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPersonajes(data.personajes))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(urlInicial);
  }, []);

  const filtrarPorGryffindor = () => {
    const casa = personajes.filter( personaje => personaje.casaDeHogwarts == "Gryffindor")
    setPersonajes(casa)
  };

  const filtrarPorHufflepuff = () => {
    const casa = personajes.filter( personaje => personaje.casaDeHogwarts == "Hufflepuff")
    setPersonajes(casa)
  };

  const filtrarPorRavenclaw  = () => {
    const casa = personajes.filter( personaje => personaje.casaDeHogwarts == "Ravenclaw")
    setPersonajes(casa)
  };
  
  const filtrarPorSlytherin  = () => {
    const casa = personajes.filter( personaje => personaje.casaDeHogwarts == "Slytherin")
    setPersonajes(casa)
  };

  const mostrarTodosLosPersonajes = () => {
    const personajes = fetchCharacters(urlInicial)
    setPersonajes(personajes)
  }


  return (
    <Fragment>
      <Navbar
        filtrarPorGryffindor={filtrarPorGryffindor}
        filtrarPorHufflepuff={filtrarPorHufflepuff}
        filtrarPorRavenclaw={filtrarPorRavenclaw}
        filtrarPorSlytherin={filtrarPorSlytherin}
       />
      

      <div className="container mt-5">
        <Personajes
          personajes={personajes} 
        />

        

      </div>

      <Footer />
    </Fragment>
    
  );
}

export default App;
