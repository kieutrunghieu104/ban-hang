import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Quantity.module.scss";
import ButtonCustom from "~/components/ButtonCustom";

const cx = classNames.bind(styles);
function Quantity({ title, min = 1, max = 99 }) {

  const [quantity, setQuantity] = useState(min);
  return (
    <div className={cx("wrapper")}>
      {title && <span className={cx("label")}>{title}</span>}

      <div className={cx("quantity")}>
        <ButtonCustom className={cx("icon")}
          onClick={() => setQuantity(prev => prev - 1)}
          disabled={quantity <= min}
        >
          −
        </ButtonCustom>

        <span className={cx("value")}>
          {quantity}
        </span>

        <ButtonCustom className={cx("icon")}
          onClick={() => setQuantity(prev => prev + 1)}
          disabled={quantity >= max}
        >
          +
        </ButtonCustom>
      </div>
    </div>
  );

}

export default Quantity;