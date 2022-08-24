import { HTMLProps } from 'react'
import styled, { keyframes } from 'styled-components'

interface InputProps {
    col: string
    error?: boolean
}

export const Container = styled.div`
    padding: 0 9rem;
    margin-top: 176px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 32px;
`
export const FormContainer = styled.div`
h2 {
    color: ${props => props.theme['brown-300']};
    font-size: 18px;
    margin-bottom: 16px;
}
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
   span {
        margin-top: 4px;
        color: ${props => props.theme['brown-300']};
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 700;
   }
`

export const Form = styled.form`
 background: ${props => props.theme['white-300']};
    padding: 40px;
    border-radius: 6px;
    p {margin-bottom: 32px;
    font-size: 14px;
    color: ${props => props.theme['brown-300']};
    line-height: 1.3;
    }
`
export const Input = styled.input<InputProps>`
    display: block;
    width: ${props => props.col ? Number(props.col) * 8.3 + '%' : 100 + '%'};
    background: ${props => props.theme['white-500']};
    border:1px solid ${props => props.theme['white-400']};
    padding: 8px;
    border-radius: 6px;
    &:focus {
        outline: 1px solid ${props => props.theme['purple-200']};
    }
    outline: ${props => props.error ? '1px solid' + props.theme['red-200'] + ';' : 'none'} ;
    
`
export const GroupInput = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`

interface PaymentProps {
    error?: boolean
}
export const PaymentContainer = styled.div<PaymentProps>`
    margin-top: 12px;
    padding: 40px;
    background: ${props => props.theme['white-300']};
    border-radius: 6px;
    h2 {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${props => props.theme['brown-300']};
        font-size: 1rem;
    }p {
        color: ${props => props.theme['brown-300']};
        font-weight: 400;
        font-size: 0.9rem;
        margin-top: -16px;
    }
    outline: ${props => props.error ? '1px solid' + props.theme['red-200'] + ';' : 'none'} ;
`

interface BtnPaymentProps extends HTMLProps<HTMLLabelElement> {
    checked?: boolean
}

export const BtnPayment = styled.label<BtnPaymentProps>`
        display: flex;
        flex-grow: 1;
        align-items: center;
        gap: 12px;
        background: ${props => props.checked ? props.theme['purple-100'] : props.theme['white-400']};
        border: ${props => props.checked ? '1px solid ' + props.theme['purple-200'] : '1px solid ' + props.theme['white-400']};
        border-radius: 6px;
        padding: 16px 18px;
        position: relative;
        transition: all ease;
        input {
            opacity: 0;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            cursor: pointer;
        }
`

export const PaymentMethod = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 32px;
`

export const CoffeeCard = styled.div`
 h2 {
    color: ${props => props.theme['brown-300']};
    font-size: 18px;
    margin-bottom: 16px;
}
`
export const Item = styled.div`
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

export const Total = styled.div`
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
    span {
        font-size: 14px;
    }
    b {
        font-size: 20px;
    }
}
button {
        color: ${props => props.theme['white-100']};
        background-color: ${props => props.theme['yellow-200']};
        width: 100%;
        padding: 10px;
        min-height: 45px;
        outline: none;
        border: none;
        border-radius: 6px;
        line-height: 1.6;
        margin-top: 10px;
        position: relative;
    }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Load = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    &:after {
        content: '';
    position: absolute;
    border-radius: 50%;
    border: 4px solid #fff;
    width: 25px;
    height: 25px;
    border-left: 4px solid transparent;
    border-bottom: 4px solid transparent;
    animation: loading1 1s ease infinite;
    z-index: 10
    }
    &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 4px dashed #fff;
    width: 25px;
    height: 25px;
    border-left: 4px solid transparent;
    border-bottom: 4px solid transparent;
    z-index: 5
}
animation: ${rotate} 1s linear infinite;
`
