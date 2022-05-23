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
align-items: center;
justify-content: center;
outline: 2px gray dashed;
outline-offset: -30px;
color: gray;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`

export{Body, Main}