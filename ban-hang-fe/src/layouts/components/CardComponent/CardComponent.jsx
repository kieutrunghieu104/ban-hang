import classNames from "classnames/bind";

import styles from "./CardComponent.module.scss";
import CardCustom from "~/components/CardCustom";

const cx = classNames.bind(styles);

function CardComponent() {
  return (
    <div className={cx("card")}>
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />
      <CardCustom className={cx("card-item")} />

    </div>
  );
}

export default CardComponent;