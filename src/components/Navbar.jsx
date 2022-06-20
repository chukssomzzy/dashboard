import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {BsChatLeft} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri"
import {MdKeyboardArrowDown} from "react-icons/md"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import avatar from "../data/avatar.jpg"
import {Cart,Chat,Notification,UserProfile} from "."
import {useGlobalContext} from "../context/context"


const Navbutton =({title,customFunc,icon,color,dotColor})=>{  
    return (
     <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{backgroundColor:dotColor}} className="absolute inline-flex rounded-full  h-2 w-2 right-2 top-2" />
        {icon}
        </button>
        </TooltipComponent>
    )
}


const Navbar = () => {
    const {toggleMenu,handleClick,cart,notification,userProfile,chat} = useGlobalContext()
	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
        <Navbutton title="Menu" customFunc={toggleMenu} color="blue" icon={<AiOutlineMenu/>}/>
            <div className="flex">
<Navbutton title="Cart" customFunc={()=>handleClick("cart")} color="blue" icon={<AiOutlineMenu/>}/>
        <Navbutton title="Chat" dotColor="#03c907" customFunc={()=>handleClick("chat")} color="blue" icon={<BsChatLeft/>}/>
        <Navbutton title="Notifications" dotColor="#03c907" customFunc={()=>handleClick("notification")} color="blue" icon={<RiNotification3Line/>}/>
                  <TooltipComponent content="profile" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray" onClick={()=>handleClick("userProfile")}>
        <img src={avatar} alt="userAvatar" className="rounded-full w-8 h-8" />
        <p>
        <span className="text-gray-400 text-14">Hi,</span>{' '}
        <span className="text-gray-400 font-bold ml-1 text-14">Micheal</span>
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
        </div>
        </TooltipComponent>
           {
            cart && (
               <Cart />
            )
           }
           {
            notification && (
               <Notification />
            )
           }
           {
            userProfile && (
               <UserProfile />
            )
           }
           {
            chat && (
               <Chat />
            )
           }
            </div>
        </div>
	)
}

export default Navbar


