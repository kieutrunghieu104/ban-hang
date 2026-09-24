import classNames from "classnames/bind";

import { Modal, Tabs } from "antd";

import styles from "./AuthModal.module.scss";
import Register from "./Register";
import SignIn from "./SignIn";

const cx = classNames.bind(styles);

function AuthModal({ openLogin, setOpenLogin }) {

  return (
    <Modal
      open={openLogin}
      onCancel={() => setOpenLogin(false)}
      footer={null}
      centered
      width={800}
    >
      <div className={cx("wrapper")}>
        <Tabs
          defaultActiveKey="login"
          centered
          items={[
            {
              key: "login",
              label: "Đăng nhập",
              children: <SignIn />
            },

            {
              key: "register",
              label: "Đăng ký",
              children: <Register />
            }
          ]}
        >
        </Tabs>
      </div >
    </Modal >
  );
}

export default AuthModal;

