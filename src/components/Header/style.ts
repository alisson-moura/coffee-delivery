import styled from 'styled-components'

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.header`
    height: 160px;
    max-width: 1440px;
    margin: 0 auto;
    ${flexCenter}
    justify-content: space-between;
`
export const LocationContainer = styled.div`
    ${flexCenter}
    gap: 1rem;
`
export const Location = styled.span`
    padding: 10px;
    background: ${props => props.theme['purple-100']};
    border-radius: 6px;
    color: ${props => props.theme['purple-500']};
    ${flexCenter}
    gap: 8px;
`
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
