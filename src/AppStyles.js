import styled from 'styled-components'


const Wrapper = styled.div`
    width: 1200px;
    
    display: grid;
    grid-template-rows: 60px 500px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-template-areas: 
        'header header'
        'nav content'
        '. content';
`;


const Content = styled.div`
  grid-area: content;
  background-color: darkgreen;
`;

const styles = {Wrapper, Content}

export default styles;