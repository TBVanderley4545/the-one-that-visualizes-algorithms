import { ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  children?: ReactNode;
};

const Graph = ({ children }: Props) => (
  <div className={styles.graph}>{children}</div>
);

export default Graph;
