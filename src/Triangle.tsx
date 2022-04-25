import styles from './Triangle.module.css';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

type Props = Pick<IBaseShapeProps, 'color' | 'onClick'>;

const Triangle = (props: Props) => <BaseShape {...props} name="Triangle" shapeStyles={styles.triangle} />

export default Triangle;
