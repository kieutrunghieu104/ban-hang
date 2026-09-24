import classNames from "classnames/bind";
import styles from "./ProductsPage.module.scss";

import { Col, Row } from 'antd';
import { Image } from 'antd';
import { FaStar } from "react-icons/fa";
import Quantity from "~/components/Quantity";
import ButtonCustom from "~/components/ButtonCustom";

const cx = classNames.bind(styles);

function ProductsPage() {
  return (
    <div className={cx("wrapper")}>
      <Row className={cx("container")}>
        <Col span={10} className={cx("image-product")}>
          <Image
            className={cx("image-main")}
            // width={200}
            alt="basic"
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />

          <Row>
            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>

            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>

            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>

            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>

            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>

            <Col span={4} className={cx("image-side")}>
              <Image
                alt="basic"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
          </Row>

        </Col>

        <Col span={14} className={cx("content")}>
          <div className={cx("title")}>Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90</div>

          <div className={cx("review")}>
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
            <FaStar className={cx("icon")} />
            <span>| Da ban 1000+</span>
          </div>

          <span className={cx("price")}>200.0000</span>
          <div className={cx("address")}>
            <span>Giao đến </span>
            <span>Xã Hạ Bằng, Thành phố Hà Nội </span>
            <span> - Đổi địa chỉ</span>
          </div>

          <Quantity title="Số lượng" />

          <div className={cx("action")}>
            <ButtonCustom primary>Chọn mua</ButtonCustom>
            <ButtonCustom outline>Mua trả sau</ButtonCustom>
          </div>

        </Col>
      </Row>
    </div >
  );
}

export default ProductsPage;