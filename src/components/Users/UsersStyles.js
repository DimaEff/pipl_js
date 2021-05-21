import styled from "styled-components";


export let Users = styled.div`
  display: flex;
  flex-flow: column;
`

export let Pages = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  
  max-width: 400px;
  width: 400px;
  
  div {
    cursor: pointer;
  }
`

export let Page = styled.div`
  font-weight: ${props => props.currentPage ? 'bolder': 'normal'};
`