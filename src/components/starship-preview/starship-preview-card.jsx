import React from 'react'


function StarshipPreviewCard({starship}) {

    const {name, model, hyperdrive_rating}= starship;
    
  return (
    <article className='starship-card'>
      
         <img  className="starship-img" src="https://starwars-visualguide.com/assets/img/starships/5.jpg" />
      
     
     
      <div className='starship-footer'>
        <h4>{name}</h4>
        <p>model: {model}</p>
        <p>hr: {hyperdrive_rating}</p>  
            
      </div>

    </article>
  )
}

export default StarshipPreviewCard