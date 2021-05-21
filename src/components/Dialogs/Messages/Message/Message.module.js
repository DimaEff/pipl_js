import styled from "styled-components";


const Message = styled.div`
  background-color: lightgray;
  border-radius: 20px;
  margin-bottom: 5px;
  padding: 5px;

  align-self: ${props => props.other ? 'flex-start': 'flex-end'};
`;

const styles = {Message}

export default styles;