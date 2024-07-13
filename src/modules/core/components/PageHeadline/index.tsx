import { useContext } from "react";
import styles from "./style.module.scss";
import AlgorithmContext from "@/modules/contexts/AlgorithmContext";

type Props = {
  text: string;
};

const PageHeadline = (props: Props) => {
  const algoContext = useContext(AlgorithmContext);

  return (
    <>
      <h1 className={styles.headline}>{props.text}</h1>
      <h2 className={styles.subheadline}>
        Visualizing <strong>{algoContext.algorithmName}</strong>
      </h2>
    </>
  );
};

export default PageHeadline;
