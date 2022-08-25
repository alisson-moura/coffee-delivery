import styled from 'styled-components'

export const Product = styled.div`
    margin-top: 10px;
    background: ${props => props.theme['white-300']};
    width: 256px;
    height: 310px;
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
        margin-top: -60px;
    }
    span {
        color: ${props => props.theme['yellow-500']};
        background: ${props => props.theme['yellow-100']};
        padding: 2px 8px;
        font-size: 10px;
        font-weight: 700;
        border-radius: 26px;
    }
    h3 {
        font-size: 20px;
        line-height: 1.3;
    } 
    p {
        color: ${props => props.theme['brown-100']};
        font-size: 14px;
        line-height: 1.3;
        padding: 0 20px;
        text-align: center;
        margin-top: -16px;
    }
`
export const Tags = styled.div`
    display: flex;
    gap: 0.5rem;
`
export const PriceContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    span {
        color: ${props => props.theme['brown-100']};
        font-size: 14px;
        font-weight: 400;
        background: none;
        padding: none;
        b {
            font-size: 1.5rem;
        }
    }
`
export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    button {
        background: none;
        border: none;
        color: ${props => props.theme['purple-500']};
        font-size: 1.5rem;
        img {
            margin: 0;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    div {
        background: ${props => props.theme['white-400']};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border-radius: 8px;
        span {
            font-size: 1.2rem;
            padding: 0 10px;
        }
    }
`
