import { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

const QuickSort = () => {
  const [vals, setVals] = useState<Array<number>>([
    9, 8, 3, 5, 2, 1, 4, 10, 7, 6,
  ]);

  const [pivot, setPivot] = useState<number>(vals.length - 1);

  const [leftPointer, setLeftPointer] = useState<number>(0);

  return (
    <div className={styles.container}>
      {vals.map((val, idx) => {
        return (
          <div
            style={{ "--val-height": `${val * 2}em` } as React.CSSProperties}
            className={classNames(styles["val-column"], {
              [styles["pivot"]]: pivot === idx,
              [styles["left-pointer"]]: leftPointer === idx,
            })}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default QuickSort;
