import { HeaderContainer, LogoIcon } from "./styles"

import { Timer, Scroll} from "phosphor-react"
import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return (
        <HeaderContainer>
            <LogoIcon><Timer size={50}></Timer></LogoIcon>
            <nav>
                <NavLink to="/" title="Timer"><Timer size={24}></Timer></NavLink>
                <NavLink to="/history" title="Historico"><Scroll size={24}></Scroll></NavLink>
            </nav>
        </HeaderContainer>
    )
}