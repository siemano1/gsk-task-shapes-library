import styled from 'styled-components';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

const Hexagon = (props: IBaseShapeProps) => <StyledHexagon {...props} name="Hexagon" />;

const StyledHexagon = styled(BaseShape)`
  margin-top: 60px;
  width: 208px;
  height: 120px;
  background-color: var(--color);
  border-color: var(--color);
  position: relative;
  display: inline-block;
  &::before {
    content: '';
    width: 0; height: 0;
    border-bottom: 60px solid;
    border-color: inherit;
    border-left: 104px solid transparent;
    border-right: 104px solid transparent;
    position: absolute;
    top: -60px;
  }
  &::after {
    content: '';
    width: 0;
    position: absolute;
    bottom: -60px;
    border-top: 60px solid;
    border-color: inherit;
    border-left: 104px solid transparent;
    border-right: 104px solid transparent;
  }
`;

export default Hexagon;
