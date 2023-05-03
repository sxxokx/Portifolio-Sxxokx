import styled from "styled-components";

export const StyledAbout = styled.div`
    background-color:red;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:50vh;
    p{
        width: 50%;
    }
    img{
        max-height:57%;
        max-width:35%;
        border-radius: 100%;
        object-fit:cover;
    }
    @media(min-width: 620px){
        img{
            height:100%;
            width:100%;
            max-height:250px;
            max-width:250px;
        }
    }
`