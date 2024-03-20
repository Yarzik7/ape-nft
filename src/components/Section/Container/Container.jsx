import { classNameJoin } from "@/utils";
import styles from "./Container.module.css";

const Container = ({ className = "", children }) => {
  return (
    <div className={classNameJoin(styles.container, className)}>{children}</div>
  );
};

export default Container;
