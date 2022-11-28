import React from 'react'
import Spinner from '../assests/Spinner.gif'
import HeroContext from '../Context/HeroContext'
import {Link} from 'react-router-dom'
function Hero() {
   const {hero, loading,dispatch} = React.useContext(HeroContext)
   return  loading ? (
  <img src={Spinner} alt="loading"/>
) : (
  <div className='cardSection'>
  {hero.map((item) => (
<div key={item.id} className="card" >
<img src={item.image.url} alt="heropic" className='heroimg' />
<div className="textInfo">
<h1 className="title">{item.name}</h1>
<p className="name">{item.biography['full-name']}</p>
<p className="dob">{item.biography['place-of-birth']}</p>
<Link to={`/${item.id}`} className="link" onClick={() => dispatch({type:'SET_ID',payload:item.id})
}>Info</Link>
</div>

  </div>
))}
</div>
)  

}

export default Hero