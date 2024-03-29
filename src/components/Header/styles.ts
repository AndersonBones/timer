import styled from "styled-components";


export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        gap: .5rem;

        a{
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;
            color: ${props=>props.theme['gray-100']};

            
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: .2s ease-in-out;

            &:focus{
                box-shadow: none;
                
            }
            &:hover{
                border-bottom: 3px solid ${props=>props.theme['blue-500']};
            }

            &.active{
                border-bottom: 3px solid ${props=>props.theme['blue-500']};
                color: ${props=>props.theme['blue-500']};
            }
        }
    }

`

export const LogoIcon = styled.span`
    color: ${props=>props.theme['blue-500']};
`