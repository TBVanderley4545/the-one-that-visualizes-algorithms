import classNames from "classnames";
import { useState } from "react";
import styles from "./style.module.scss";

const QuickSort = () => {
  const [vals, setVals] = useState<Array<number>>([
    9, 8, 3, 5, 2, 1, 4, 10, 7, 6,
  ]);

  const [leftPointer, setLeftPointer] = useState<number>(0);

  const [pivotPoint, setPivotPoint] = useState<number>(vals.length - 1);

  const [current, setCurrent] = useState<number>(0);

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const algorithm = async (
    start: number = 0,
    end: number = vals.length - 1,
  ) => {
    if (end - start + 1 <= 1) {
      setVals(vals);
      return;
    }

    const pivot = vals[end];
    let lp = start;

    for (let i = start; i < end; i++) {
      setCurrent(i);

      await sleep(3000);

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

    setLeftPointer(lp);
    setPivotPoint(end);

    await sleep(3000);
    algorithm(start, lp - 1);

    await sleep(3000);
    algorithm(lp + 1, end);

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
                [styles["current"]]: current === idx,
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
