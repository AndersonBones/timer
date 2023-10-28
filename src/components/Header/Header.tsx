import { HeaderContainer } from "./styles"
import Logo from '../../assets/Logo.svg'
import { Timer, Scroll} from "phosphor-react"
import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return (
        <HeaderContainer>
            <img src={Logo} alt="logo" />
            <nav>
                <NavLink to="/" title="Timer"><Timer size={24}></Timer></NavLink>
                <NavLink to="/history" title="Historico"><Scroll size={24}></Scroll></NavLink>
            </nav>
        </HeaderContainer>
    )
}