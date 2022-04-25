import styles from './Hexagon.module.css';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

type Props = Pick<IBaseShapeProps, 'color' | 'onClick'>;

const Hexagon = (props: Props) => <BaseShape {...props} name="Hexagon" shapeStyles={styles.hexagon} />

export default Hexagon;
