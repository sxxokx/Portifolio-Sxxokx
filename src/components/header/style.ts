import styled from "styled-components"

export const StyledHeader = styled.header `
        height:80px;
        display:flex; 
        justify-content: space-between;
        padding:0rem 1rem 0rem 1rem;
        align-items: center;
    
    
        div{
            display:flex;
            justify-content:space-evenly;
            gap: 1rem;
        }
        a{
            text-decoration:none;
            color: #000;           
        }
        button{
            background-color:transparent;
            border: solid 1px gray;
        }
        div> button{
            background-color:transparent;
            border: solid 1px gray;
            border-radius: 50px;
        }
        @media(min-width: 620px){
            justify-content: space-around;
            align-items: center;
    }

`