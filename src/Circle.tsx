import styled from 'styled-components';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

const Circle = (props: IBaseShapeProps) => <StyledCircle {...props} name="Circle" />;

const StyledCircle = styled(BaseShape)`
  width: 200px;
  height: 200px;
  background: var(--color);
  border-radius: 50%;
  & > span {
    top: 20px;
  }
`;

export default Circle;
