const initialState = {
 chat:false,
    cart:false,
    userProfile:false,
    notification:false,
    activeMenu:false
}

const reducer = (state,action)=>{
    switch(action.type){
        case"TOGGLE_MENU":{
          const {activeMenu} = {...state}
            return {...state,activeMenu:!activeMenu}
        }
        case "TOOGLE_NAV_MENU":{
          const navState = state[action.payload]
            return {...state,[action.payload]:!navState}
        }
        default:{
            throw new Error(`action dispatch of type ${action.type} is not handle in reducer fn`)
        }                                                      
    }
}

export {initialState,reducer}
