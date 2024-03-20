import { classNameJoin } from "@/utils";
import styles from "./Button.module.css";

const Button = ({ caption = "", buttonAsLink = false, className = "" }) => {
  return (
    <button className={classNameJoin(styles.button, className)}>
      {caption}
    </button>
  );
};

export default Button;
