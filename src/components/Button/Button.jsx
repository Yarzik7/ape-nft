import { classNameJoin } from "@/utils";
import styles from "./Button.module.css";

const Button = ({ content = "", buttonAsLink = false, className = "" }) => {
  return (
    <button className={classNameJoin(styles.button, className)}>
      {content}
    </button>
  );
};

export default Button;
