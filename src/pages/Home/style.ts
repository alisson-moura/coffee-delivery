import styled, { keyframes } from 'styled-components'
import { coffee } from '../../assets'

export const Banner = styled.div`
    display: flex;
    margin-top: 120px;
    padding: 56px 9rem;
    gap: 56px;
    justify-content: space-around;
`
export const ItemsContainer = styled.div`
display: flex;
flex-direction: column;
h1 {
    color: ${props => props.theme['brown-500']};
    font-size: 48px;
    text-align: left;
    line-height: 0.9;
    margin-bottom: 1rem;
}
p {
    color: ${props => props.theme['brown-300']};
    font-size: 20px;
    line-height: 1.3;
}
`
export const Items = styled.div`
    display: grid;
    margin-top: 60px;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    span {
        display: flex;
        justify-content: start;
        align-items: center;
        color: ${props => props.theme['brown-100']};
        font-size: 1rem;
        line-height: 1.3;
        img {
            margin-right: 1rem;
        }
    }
`
export const ProductsContainer = styled.div`
    padding: 0 9rem;
    h2 {
        color: ${props => props.theme['brown-300']};
        font-size: 20px;
        line-height: 1.3;
        font-size: 2rem;
    } 
`
export const Products = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`
const coffeeAnimation = keyframes`
    0%{
        background-position: 0px 140px;
    }
    20%
    {
        background-position: -450px 100px;
    }
    40%{
        background-position: -900px 50px;
    }
    80%{
        background-position: -1350px -40px;
    }
    100%{
        background-position: 0px 140px;;
    }
`
export const LoadAnimation = styled.div`
    height: 140px;
    width: 180px;
    margin: 6rem auto;
    border: 6px solid #e6b54a;
    border-radius: 0px 0px 70px 70px;
    background: url(${coffee});
    box-shadow: 0px 0px 0px 6px white;
    background-repeat: repeat-x;
    background-position: 0px 140px;
    animation: ${coffeeAnimation} 5s infinite;
    div {
    height: 70px;
    width: 40px;
    background-color: transparent;
    border: 6px solid #e6b54a;
    position: relative;
    left: 170px;
    top: 2px;
    border-radius: 0px 25px 80px 0px;
    }
`
