import { StyledAbout } from "./style"
import PhotoPerfil from "../assets/img/jeanimg111.jpg"

export const About = () => {
    return(
        <StyledAbout id="about">
            <img src={PhotoPerfil} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio deserunt, praesentium porro iure odit maiores quasi,
                 quae cum labore facere iste voluptatem incidunt amet ipsum. Sequi quibusdam nihil distinctio atque.</p>

            </StyledAbout>
    )
}