import styled from 'styled-components'

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const Body = styled.article`
width: 90vw;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
outline: 2px gray dashed;
outline-offset: -20px;
color: black;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`
const Message = styled.span`
padding: 20px;
font-size: larger;
text-align: center;
white-space: pre-line;
`

const Field = styled.section`
display: flex;
align-items: center;
justify-content: center;
width: 100%
`

const Input = styled.input`
width: 80%;
height: 20px;
color: gray;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 16px;
background-color: white;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 800 800'%3E%3Ctitle%3ECopy%3C/title%3E%3Crect x='128' y='128' width='336' height='336' rx='57' ry='57' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/%3E%3Cpath d='M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/%3E%3C/svg%3E");
background-position: 5px 5px; 
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
:hover{
    background-color: rgba(80,242,101,0.5);
    cursor: pointer;
}
`

export{Body, Main, Message, Field, Input}