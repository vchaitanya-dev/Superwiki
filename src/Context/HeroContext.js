import React, {useReducer} from  'react'
import heroReducer from './HeroReducer'
const HeroContext =  React.createContext()

export const HeroProvider = ({children}) => {
      const intitalState = {
            hero: [],
            loading: true,
            name:"",
            id:0
       }

       const [state, dispatch] = useReducer(heroReducer,intitalState)
return(
<HeroContext.Provider value={{...state,dispatch}}>{children}</HeroContext.Provider>
)

}
export default HeroContext
