import styled from 'styled-components';

export interface IProps {
  color?: string;
  className?: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function BaseShape(props: IProps) {
  const {
    color = '#dadada',
    className,
    name = 'Shape name',
    onClick
  } = props;

  return (
    <StyledBaseShape style={{'--color': color}} className={className} onClick={onClick}>
      <span>{name}</span>
    </StyledBaseShape>
  );
}

const StyledBaseShape = styled.div`
  position: relative;
  span {
    opacity: 0;
    transition: all 0.1s;
    background-color: #fff;
    color: black;
    display: inline-block;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
  &:hover span {
    opacity: 1;
  }
`;
