import styles from './Square.module.css';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

type Props = Pick<IBaseShapeProps, 'color' | 'onClick'>;

const Square = (props: Props) => <BaseShape {...props} name="Square" shapeStyles={styles.square} />

export default Square;
