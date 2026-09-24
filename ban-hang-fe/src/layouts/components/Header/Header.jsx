import classNames from "classnames/bind";

import { Button, Col, Row } from 'antd';
import { Input } from 'antd';
import { Badge } from 'antd';
import { FaRegUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import AuthModal from "../AuthModal";
import configs from "~/configs"

const cx = classNames.bind(styles);

function Header() {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [openLogin, setOpenLogin] = useState(false);
  // const [count, setCount] = useState(5);

  return (
    <Row className={cx("wrapper")}>

      <AuthModal openLogin={openLogin} setOpenLogin={setOpenLogin} />

      <Col span={6} className={cx("logo")}>
        <Link to={configs.routes.home} className={cx("logo-title")}>TRUNGHIEU</Link>
      </Col>

      <Col span={11} className={cx("search")}>
        <Search
          placeholder="Tìm kiếm sản phẩm..."
          onSearch={onSearch}
          enterButton={
            <Button className={cx("search-button")}>Tìm kiếm</Button>
          }
          allowClear
          size="large"
        />
      </Col>

      <Col span={4} className={cx("user")}>
        <FaRegUser className={cx("icon")} />

        <div className={cx("user-action")}>
          <span onClick={() => setOpenLogin(true)}>Đăng ký/Đăng nhập</span>
          <div className={cx("account")}>
            <span>Tài khoản</span>
            <FaCaretDown className={cx("icon")} />
          </div>
        </div>
      </Col>

      <Col span={3} className={cx("card")}>
        <Badge count={5} offset={[0, 5]}>
          <CgShoppingCart className={cx("icon")} />
        </Badge>
        <span className={cx("title")}>Giỏ hàng</span>
      </Col>
    </Row>
  );
}

export default Header;