import React,{useState} from 'react'
import axios from 'axios'
import Hero from './Hero'
import HeroContext from '../Context/HeroContext'
function Search() {
  const [text, setText] = useState("")
  const {dispatch} = React.useContext(HeroContext)
  const handleChange = (e) => setText(e.target.value)
const onSubmit  = () =>  {
  axios
.get(`https://www.superheroapi.com/api.php/[apiToken]/search/${text}`)
.then((res) =>  
dispatch({type:'SET_HERO', payload:res.data.results})
)
dispatch({type:'SET_LOADING'})
}
  return (
    <>
    <div className="S-Hero" >
      <input className='s-Input' type="text" value={text} onChange={handleChange}/>
      <button onClick={onSubmit}>Go</button>
    </div>
    <Hero />
    
    </>
  )
}

export default Search
