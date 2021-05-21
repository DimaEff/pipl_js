import styled from 'styled-components'


const Navbar = styled.nav`
  grid-area: nav;
  background-color: cadetblue;
  font-size: larger;
  
  display: flex;
  flex-flow: column;
`;


const Item = styled.div`
  
  a:hover {
      color: darkblue;
  };
  
  a.active {
    color: darkblue;
  };
`;

const styles = {Navbar, Item}

export default styles;