import React from 'react';

const Personajes = ({personajes}) => {


    

    return ( 

        <div className="row">
            {personajes.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card rounded-3 bg-secondary overflow-hidden" style={{width: 400  + "px"}}> 
                        <h3 className="card-title ms-3 mt-3">{item.personaje}</h3>
                        <img className="card-img-top mt-3" src={item.imagen} alt="" style={{maxHeight: 25 + "rem"}} />  
                        <div className="card-body">
                            <p className="card-text">Casa de Hogwarts: {item.casaDeHogwarts}</p> 
                            <p className="card-text">Interpretado por: {item.interpretado_por} </p>
                        </div>            
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Personajes;
