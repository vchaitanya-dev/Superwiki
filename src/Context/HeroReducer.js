const heroReducer = (state, action) => {
      switch(action.type){
            case 'SET_HERO':
                  return{
                        ...state,
                        hero:action.payload,
                        loading : false,
                  }
            case 'SET_LOADING':
                  return{
                        ...state,
                        loading:true
                  }
            case 'SET_ID':
                  return{
                        ...state,
                        id:action.payload,
                  }
            default:
                  return state;
      }
}

export default heroReducer