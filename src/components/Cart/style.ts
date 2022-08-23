import styled from 'styled-components'

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;`

export const Cart = styled.div`
    ${flexCenter}
    position: relative;
    padding: 10px;
    border-radius: 6px;
    background: ${props => props.theme['yellow-100']};
`

export const Badge = styled.div`
    position: absolute;
    right: -8px;
    top: -8px;
    ${flexCenter}
    width: 20px;
    height: 20px;
    background: ${props => props.theme['yellow-500']};
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme['white-100']};
`
