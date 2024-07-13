import QuickSort from "@/modules/algorithms/components/QuickSort";
import Legend from "@/modules/core/components/Legend";
import PageHeadline from "@/modules/core/components/PageHeadline";
import styles from "./style.module.scss";

const Visualizer = () => {
  return (
    <div className={styles.container}>
      <PageHeadline text={"Algo Visualizer"} />
      <QuickSort />
      <Legend />
    </div>
  );
};

export default Visualizer;
