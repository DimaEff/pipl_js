import styled from "styled-components";


const Dialogs = styled.div`
  font-size: large;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 
        'users messages';
`;

const styles = {Dialogs}

export default styles;