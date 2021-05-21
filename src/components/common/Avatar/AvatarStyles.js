import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  flex-flow: column;
  
  a {
    position: absolute;
    width: ${props => props.imgSize || '60px'};
    height: ${props => props.imgSize || '60px'};
  }
  
  img {
    width: ${props => props.imgSize || '60px'};
    height: ${props => props.imgSize || '60px'};
    border-radius: ${props => props.circle && '50%'};
  }
`