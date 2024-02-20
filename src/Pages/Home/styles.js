import styled from 'styled-components'

export const Container = styled.div `
    background-color: #BA55D3;
    padding: 40px;
    border-radius: 10px;

    h1{
        color: #fff;
        font-family: Georgia, 'Times New Roman', Times, serif
    }

    input{
        height: 35px;
        border-radius: 5px;
        border:none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
        font-family: Arial, Helvetica, sans-serif
    }
    
`
 export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background: white;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p{
        text-transform: capitalize;
        font-weight: bold;
    }
 `
 export const TrashButton =styled.button `
    background:transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
 `

 export  const AddButton = styled.button `
    background: #9932CC;
    color: #fff;
    height: 35px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    margin-left: 10px;


 &:hover{
    opacity: 0.8;
 }
`

