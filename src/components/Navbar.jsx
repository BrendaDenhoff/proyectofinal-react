import React from 'react'

const Navbar = ({filtrarPorGryffindor, filtrarPorHufflepuff, filtrarPorRavenclaw, filtrarPorSlytherin}) => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light bg-dark" href="#">Harry Potter</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-light bg-dark" aria-current="page" href="indes.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light bg-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Casas
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={filtrarPorGryffindor}>Gryffindor</a></li>
                        <li><a className="dropdown-item" href="#" onClick={filtrarPorSlytherin}>Slytherin</a></li>
                        <li><a className="dropdown-item" href="#" onClick={filtrarPorRavenclaw}>Ravenclaw</a></li>
                        <li><a className="dropdown-item" href="#" onClick={filtrarPorHufflepuff}>Hufflepuff</a></li>
                </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>
     
     );
}
 
export default Navbar;