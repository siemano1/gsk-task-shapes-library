import styled from 'styled-components';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

const Triangle = (props: IBaseShapeProps) => <StyledTriangle {...props} name="Triangle" />;

const StyledTriangle = styled(BaseShape)`
  width: 0;
	height: 0;
	border-left: 100px solid transparent;
	border-right: 100px solid transparent;
	border-bottom: 200px solid var(--color);
  & > span {
    top: 100px;
  }
`;

export default Triangle;
