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

  const [start, setStart] = useState<number>(0);

  const [end, setEnd] = useState<number>(vals.length - 1);

  const sleep = (time: number = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const algorithm = async (
    currStart: number = 0,
    currEnd: number = vals.length - 1,
  ) => {
    setStart(currStart);
    setEnd(currEnd);
    setLeftPointer(currStart);
    setPivotPoint(currEnd);

    if (currEnd - currStart + 1 <= 1) {
      setVals(vals);
      return;
    }

    const pivot = vals[currEnd];
    let lp = currStart;

    for (let i = currStart; i < currEnd; i++) {
      setCurrent(i);

      await sleep();

      if (vals[i] < pivot) {
        const tmp = vals[lp];

        vals[lp] = vals[i];
        vals[i] = tmp;

        lp += 1;
        setLeftPointer(lp);
      }
    }

    vals[currEnd] = vals[lp];
    vals[lp] = pivot;

    await algorithm(currStart, lp - 1);

    await algorithm(lp + 1, currEnd);

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
                [styles["in-range"]]: idx >= start && idx <= end,
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
