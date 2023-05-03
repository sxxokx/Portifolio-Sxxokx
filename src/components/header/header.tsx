import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { StyledHeader } from "./style"

export const HeaderPortfolio = () => {

    const [menuDropDown,setMenuDropDown] = useState(false)
    const [menuRegister,setMenuRegister] = useState(false)
    const handleMenuDropDown = () => {
        setMenuDropDown(!menuDropDown)
      }
      const handleMenuRegister = () => {
        setMenuRegister(!menuRegister)
        setMenuDropDown(false)
      }

    return(
        <StyledHeader>
            <button onClick={()=>{setMenuDropDown(true)}}>
                <AiOutlineMenu/>
            </button>
            <div>
                {menuDropDown?
                 <><a href="#about">Sobre</a><a href="#projects">Projetos</a><a href="#contact">Contato</a> <button onClick={()=>{setMenuDropDown(false)}}>X</button></>:  <></>}
            </div>
                
        </StyledHeader>
    )
}