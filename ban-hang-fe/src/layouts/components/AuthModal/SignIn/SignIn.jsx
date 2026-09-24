import classNames from "classnames/bind";

import { CiMail } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import {
  Typography,
  Form,
  Input,
  Checkbox,
  Divider
} from "antd";

import ButtonCustom from "~/components/ButtonCustom";
import styles from "./Signin.module.scss";

const cx = classNames.bind(styles);


function SignIn() {

  const handleLogin = (values) => {
    console.log("Login:", values);
  };

  return (
    <div className={cx("auth-content")}>
      <Typography.Title level={2}>Chào mừng trở lại</Typography.Title>

      <Typography.Text type="secondary">Đăng nhập để tiếp tục mua sắm và quản lý đơn hàng.</Typography.Text>

      <Form
        layout="vertical"
        onFinish={handleLogin}
        className={cx("auth-form")}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập email' },
            { type: "email", message: "Email không hợp lệ" }
          ]}
        >
          <Input
            size="large"
            prefix={<CiMail />}
            placeholder="example@gmail.com"
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<CiUnlock />}
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <div className={cx("auth-option")}>
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <ButtonCustom text>Quên mật khẩu?</ButtonCustom>
        </div>

        <ButtonCustom primary>Đăng nhập</ButtonCustom>
        <Divider>Hoặc tiếp tục với</Divider>

        <ButtonCustom
          outline
          leftIcon={<FaGoogle />}
        >
          Google
        </ButtonCustom>

      </Form>
    </div>
  );
}

export default SignIn;