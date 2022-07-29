import React from 'react'

export const Characters = ({characters}) => {
  return (
    <div className='row'>
        {
            characters.map((item,index) => (
                <div key={index} className="col">
                    <div className="card my-4" style={{minWidth: "200px"}}>
                        <img src={item.image}   alt="" />
                        <div class="card-body my-3">
                            <h5 class="card-title pt-3"> {item.name}</h5>
                            <p class="card-text">Genero: {item.gender}</p>
                            <p class="card-text">Location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }



        
    </div>
  );
};

export default Characters;