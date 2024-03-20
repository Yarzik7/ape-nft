import { classNameJoin } from "@/utils";
import styles from "./Text.module.css";

const Text = ({ text, className = "" }) => {
  return <p className={classNameJoin(styles.text, className)}>{text}</p>;
};

export default Text;
