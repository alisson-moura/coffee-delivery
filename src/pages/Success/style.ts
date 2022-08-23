import styled from 'styled-components'

export const Container = styled.div`
margin-top: 120px;
    padding: 0 9rem;
h1 {
    color:  ${props => props.theme['yellow-500']};
}
span {
    font-size: 1.3rem;
}
`

export const Details = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`

export const Items = styled.div`
    span {
        font-size: 1rem;
    }
    display: flex;
    margin-top: 40px;
    padding: 1rem 10rem 1rem 1.5rem;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    background: 
    linear-gradient(${props => props.theme['white-200']}, ${props => props.theme['white-200']}) padding-box,
    linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border-radius: 6px 36px 6px 36px;
    border: 2px solid transparent;
`

export const Item = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`
