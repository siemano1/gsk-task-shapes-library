import styles from './BaseShape.module.css';

export interface IProps {
  color?: string;
  shapeStyles?: string;
  name: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function BaseShape(props: IProps) {
  const {
    color = '#dadada',
    shapeStyles,
    name = 'Shape name',
    onClick
  } = props;

  return (
    <div style={{'--color': color}} className={`${styles.shape} ${shapeStyles}`} onClick={onClick}>
      <span className={styles.label}>{name}</span>
    </div>
  );
}
