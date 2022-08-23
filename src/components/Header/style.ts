import styled from 'styled-components'

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    max-width: 1440px;
    ${flexCenter}
    justify-content: space-between;
    height: 120px;
    margin: 0 auto;
`
export const Container = styled.header`
    width: 100vw;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
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
