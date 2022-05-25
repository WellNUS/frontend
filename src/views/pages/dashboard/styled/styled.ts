import styled from "styled-components";

export const Containers = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    border-radius: 10px;
    flex-grow: 1;
`
export const Wrapper = styled.div`
    background-color: ${props => props.theme.main};
    padding: 1rem;
    border-radius: 10px;
    flex-grow: 1;
`
export const ContainerTitle = styled.div`
    font-weight: bold;
    font-size: 1rem;
    color: white;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
`
export const WelcomeTitle = styled.div`
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: bold;
`