import React, {useEffect,useContext,useReducer,useState} from "react"
import {reducer,initialState} from './reducer.js'

const AppContext = React.createContext(initialState)

export  const AppProvider = (props)=>{
//reducer and 
 const [state,dispatch] = useReducer(reducer,initialState)
//screen size state
 const [screenSize,setScreenSize] = useState(undefined)
//toggle menu
 const toggleMenu =  ()=> dispatch({type:"TOGGLE_MENU"})
//handles click on the navbar
 const handleClick = (type)=> dispatch({type:"TOGGLE_NAV_MENU",payload:type}) 

//Set the useEffect for screen size
useEffect(
    ()=>{
   const handleResize = ()=>setScreenSize(window.innerWidth)
  window.addEventListener("resize",handleResize)
    handleResize()
    return ()=>window.removeEventListener("resize",handleResize)
},[])

  //handles toggling on sidebar screen size change
    useEffect(()=>{
        if(state.activeMenu&&screenSize<=900){
            toggleMenu()
        }else(!state.activeMenu&& screenSize>=900)
        toggleMenu()
        },[screenSize])
   //handle closing of sidebar on navlink or link click on sidebar
    const handleCloseSidebar = ()=>{
      if(state.activeMenu&&screenSize<=900){
            toggleMenu()
        }
        return
    }
    return(
      <AppContext {...props} value={{...state,toggleMenu,handleClick,handleCloseSidebar}}/>
    )
}

export const useGlobalContext = ()=> useContext(AppContext)


