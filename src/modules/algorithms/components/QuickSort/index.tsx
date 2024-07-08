import { useState } from "react";
import styles from "./style.module.scss";
import sleep from "@/modules/core/utils/sleep";
import Bar from "@/modules/core/components/Bar";

const QuickSort = () => {
  const [vals, setVals] = useState<Array<number>>([
    9, 8, 3, 5, 2, 1, 4, 10, 7, 6,
  ]);

  const [leftPointer, setLeftPointer] = useState<number>(0);

  const [pivotPoint, setPivotPoint] = useState<number>(vals.length - 1);

  const [current, setCurrent] = useState<number>(0);

  const [start, setStart] = useState<number>(0);

  const [end, setEnd] = useState<number>(vals.length - 1);

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

      await sleep(1000);

      if (vals[i] < pivot) {
        const tmp = vals[lp];

        vals[lp] = vals[i];
        vals[i] = tmp;

        lp += 1;
        setLeftPointer(lp);
      }
    }

    await sleep(1000);

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
            <Bar
              key={`val-item-${val}`}
              Value={val}
              IsInRange={idx >= start && idx <= end}
              IsCurrent={current === idx}
              IsPointer={leftPointer === idx}
              IsPivot={pivotPoint === idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default QuickSort;
