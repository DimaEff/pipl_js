import styled from 'styled-components'


const Post = styled.div `
    color: whitesmoke;
    border: 2px solid transparent;

    img {
      height: 70px;
    };
  
    :hover {
        border-color: whitesmoke;
    }
  
    span {
      border: 2px solid transparent;
      
      :hover {
        border-color: black;
      }
    }
`;

const styles = { Post }

export default styles;