import styles from "./style.module.scss";

type Props = {
  text: string;
};

const PageHeadline = (props: Props) => (
  <h1 className={styles.headline}>{props.text}</h1>
);

export default PageHeadline;
