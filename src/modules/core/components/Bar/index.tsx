import classNames from "classnames";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

type Props = {
  Value: number;
  IsPivot: boolean;
  IsPointer: boolean;
  IsCurrent: boolean;
  IsInRange: boolean;
};

const Bar = (props: Props) => (
  <motion.div
    layout="position"
    transition={{
      type: "spring",
      damping: 20,
      stiffness: 300,
      duration: 3,
    }}
  >
    <div
      style={{ "--val-height": `${props.Value * 2}em` } as React.CSSProperties}
      className={classNames(styles["val-column"], {
        [styles["pivot"]]: props.IsPivot,
        [styles["left-pointer"]]: props.IsPointer,
        [styles["current"]]: props.IsCurrent,
        [styles["in-range"]]: props.IsInRange,
      })}
    >
      {props.Value}
    </div>
  </motion.div>
);

export default Bar;
