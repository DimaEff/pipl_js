import styled from "styled-components";


export let User = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 100px 1fr;
  grid-template-areas: 'anb description';
  border: 3px solid whitesmoke;
  margin: 5px;
  
  :hover {
    background-color: whitesmoke;
  }
`

export let AvatarNameButton = styled.div`
  grid-area: anb;
  
  display: flex;
  flex-flow: column;
  
  img {
    height: 70px;
    width: 70px;
  }
`

export let Description = styled.div`
  grid-area: description;
  
  display: flex;
  justify-content: space-between;
`