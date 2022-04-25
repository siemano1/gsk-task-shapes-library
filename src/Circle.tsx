import styles from './Circle.module.css';
import BaseShape, { IProps as IBaseShapeProps } from './BaseShape';

type Props = Pick<IBaseShapeProps, "color" | "onClick">;

const Circle = (props: Props) => <BaseShape {...props} name="Circle" shapeStyles={styles.circle} />

export default Circle;
