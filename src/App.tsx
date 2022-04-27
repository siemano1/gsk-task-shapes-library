import styled from 'styled-components';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Hexagon from './Hexagon';

function App() {
  return (
    <StyledWrapper>
      <Square color="blue" />
      <Triangle color="green" />
      <Circle color="red" />
      <Hexagon color="purple" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default App;
