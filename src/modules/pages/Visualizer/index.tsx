import QuickSort from "@/modules/algorithms/components/QuickSort";
import Legend from "@/modules/core/components/Legend";
import PageHeadline from "@/modules/core/components/PageHeadline";
import styles from "./style.module.scss";
import AlgorithmContext from "@/modules/contexts/AlgorithmContext";
import { useState } from "react";
import InsertionSort from "@/modules/algorithms/components/InsertionSort";

const Visualizer = () => {
  const [algorithmName, setAlgorithmName] = useState("Quicksort");

  return (
    <div className={styles.container}>
      <AlgorithmContext.Provider value={{ algorithmName, setAlgorithmName }}>
        <PageHeadline text={"Algo Visualizer"} />
        <InsertionSort />
        <QuickSort />
        <Legend />
      </AlgorithmContext.Provider>
    </div>
  );
};

export default Visualizer;
