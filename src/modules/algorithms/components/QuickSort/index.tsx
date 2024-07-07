import classNames from "classnames";
import { useState } from "react";
import styles from "./style.module.scss";

const QuickSort = () => {
  const [vals, setVals] = useState<Array<number>>([
    9, 8, 3, 5, 2, 1, 4, 10, 7, 6,
  ]);

  const [leftPointer, setLeftPointer] = useState<number>(0);

  const [pivotPoint, setPivotPoint] = useState<number>(vals.length - 1);

  const algorithm = (start: number = 0, end: number = vals.length) => {
    if (end - start + 1 <= 1) {
      setVals(vals);
      return;
    }

    const pivot = vals[end];
    let lp = start;

    setLeftPointer(lp);
    setPivotPoint(end);

    for (let i = start; i < end; i++) {
      if (vals[i] < pivot) {
        const tmp = vals[lp];

        vals[lp] = vals[i];
        vals[i] = tmp;

        lp += 1;
        setLeftPointer(lp);
      }
    }

    vals[end] = vals[lp];
    vals[lp] = pivot;

    setTimeout(() => {
      algorithm(start, lp - 1);
    }, 1000);

    setTimeout(() => {
      algorithm(lp + 1, end);
    }, 1000);

    setVals(vals);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          algorithm();
        }}
      >
        Run Algo
      </button>
      <div className={styles.container}>
        {vals.map((val, idx) => {
          return (
            <div
              key={`val-item-${val}`}
              style={{ "--val-height": `${val * 2}em` } as React.CSSProperties}
              className={classNames(styles["val-column"], {
                [styles["pivot"]]: pivotPoint === idx,
                [styles["left-pointer"]]: leftPointer === idx,
              })}
            >
              {val}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuickSort;
