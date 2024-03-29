import styled from "styled-components";



export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`






const baseButton = styled.button`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    border-radius: 8px;
    border: 0;
    padding: 1rem;
    font-weight: bold;
    cursor: pointer;
    color: ${props=>props.theme['gray-100']};
    transition: .2s ease-in-out;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
   

`


export const StartButton = styled(baseButton)`
    background: ${props=>props.theme['blue-500']};

    &:not(:disabled):hover{
        background: ${props=>props.theme['blue-700']};
    }
`


export const StopButton = styled(baseButton)`
    background: ${props=>props.theme['red-500']};

    &:not(:disabled):hover{
        background: ${props=>props.theme['red-700']};
    }
    
`