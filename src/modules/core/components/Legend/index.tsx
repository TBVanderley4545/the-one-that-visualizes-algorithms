import Bar from "@/modules/core/components/Bar";
import styles from "./style.module.scss";

const Legend = () => (
  <div className={styles.container}>
    <h2 className={styles.headline}>Legend</h2>

    <div className={styles["legend-items"]}>
      <div className={styles["legend-item"]}>
        <Bar
          Value={1}
          IsCurrent={true}
          IsInRange={false}
          IsPointer={false}
          IsPivot={false}
        />

        <p>Current item being evaluated</p>
      </div>

      <div className={styles["legend-item"]}>
        <Bar
          Value={1}
          IsCurrent={false}
          IsInRange={true}
          IsPointer={false}
          IsPivot={false}
        />

        <p>Item in range of items to evaluate</p>
      </div>

      <div className={styles["legend-item"]}>
        <Bar
          Value={1}
          IsCurrent={false}
          IsInRange={false}
          IsPointer={true}
          IsPivot={false}
        />

        <p>Item is referenced by a pointer</p>
      </div>

      <div className={styles["legend-item"]}>
        <Bar
          Value={1}
          IsCurrent={false}
          IsInRange={false}
          IsPointer={false}
          IsPivot={true}
        />

        <p>Item is the pivot point</p>
      </div>
    </div>
  </div>
);

export default Legend;
