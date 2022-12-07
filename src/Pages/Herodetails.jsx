import React from 'react'
import HeroContext from '../Context/HeroContext'
function Herodetails() {
const {hero,id} = React.useContext(HeroContext)
return (
  <>
  {hero.map((item) => (
    
   item.id !== id ?  (<h1 className='htext'>No More Details found</h1>) :(
    <div key={item.id} className="hGrid">
      <img src={item.image.url} alt="heropic" className='heropic' />
<div className="textD">
<h1 className="title">{item.name}</h1>
<p className="name">{item.biography['full-name']}</p>
<p className="name">{item.biography['place-of-birth']}</p>
<p className="name">{item.biography.alignment}</p>
<p className="name">{item.biography['first-appearance']}</p>
<p className="name">{item.biography.publisher}</p>
<p className="name">{item.appearance.gender}</p>
<div className='charts'>
  <p className='name' >Intelligence : {item.powerstats.intelligence}</p>
  <p className='name' >Power : {item.powerstats.power}</p>
  <p className='name' >Strength : {item.powerstats.strength}</p>
  <p className='name' >Durability : {item.powerstats.durability}</p>
  <p className='name' >Combat : {item.powerstats.combat}</p>
</div>
    </div>
    </div>
   )

  ))}
</>
)
}

export default Herodetails