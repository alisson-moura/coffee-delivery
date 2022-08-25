import styled from 'styled-components'

export const Container = styled.div`
    img {
        width: 64px;
        height: 64px;
    }
    display: flex;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 2px solid ${props => props.theme['white-500']} ;
    margin-bottom: 1rem;
`

export const AmountContainer = styled.div`
    div {
        display: flex;
        gap: 8px;
    }
    display: flex;
    flex-direction: column;
    gap: 2px;
    span {
        color: ${props => props.theme['brown-500']};
        line-height: 1.3;
    }
`

export const TrashButton = styled.button`
            background: none;
            border: none;
            background: ${props => props.theme['white-400']};
            font-size: 16px;
            line-height: 1.6;
            padding: 2px 12px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            img {
                width: 1.5rem;
                height: 1.5rem;
            }
`
export const Amount = styled.div`
    button {
            background: none;
            border: none;
            background: ${props => props.theme['white-400']};
            color: ${props => props.theme['purple-500']};
            font-weight: bold;
            font-size: 1rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 5px 12px;
    height: 36px;
    border-radius: 8px;
    background: ${props => props.theme['white-400']};
    span {
            font-size: 1rem;
            padding: 0 10px;
        }
`
