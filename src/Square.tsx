import styled from 'styled-components';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

const Square = (props: IBaseShapeProps) => <StyledSquare {...props} name="Square" />;

const StyledSquare = styled(BaseShape)`
  width: 200px;
  height: 200px;
  background: var(--color);
  & > span {
    top: 20px;
  }
`;

export default Square;
