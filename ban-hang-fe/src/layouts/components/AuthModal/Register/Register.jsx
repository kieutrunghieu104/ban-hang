import classNames from "classnames/bind";


import { CiMail } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import {
  Typography,
  Form,
  Input,
  Checkbox,
} from "antd";

import ButtonCustom from "~/components/ButtonCustom";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {

  const handleRegister = (values) => {
    console.log("Register:", values);
  };

  return (
    <div className={cx("auth-content")}>
      <Typography.Title level={2}>Tạo tài khoản mới</Typography.Title>

      <Typography.Text type="secondary">
        Chỉ mất vài giây để bắt đầu.
      </Typography.Text>

      <Form
        layout="vertical"
        onFinish={handleRegister}
        className={cx("auth-form")}
      >

        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[
            { required: true, message: "Vui lòng nhập họ tên" },
          ]}
        >
          <Input
            size="large"
            prefix={<FaRegUserCircle />}
            placeholder="Nguyễn Văn A"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
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
            { required: true, message: "Vui lòng nhập mật khẩu" },
            { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<CiUnlock />}
            placeholder="Tạo mật khẩu"
          />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Vui lòng xác nhận mật khẩu" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue("password") === value
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu không khớp")
                );
              }
            }),
          ]}
        >
          <Input.Password
            size="large"
            prefix={<CiUnlock />}
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>

        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                    new Error(
                      "Bạn cần đồng ý với điều khoản"
                    )
                  ),
            },
          ]}
        >
          <Checkbox>
            Tôi đồng ý với{" "}
            <a href="#">Điều khoản sử dụng</a>
          </Checkbox>
        </Form.Item>

        <ButtonCustom primary>Tạo tài khoản</ButtonCustom>

      </Form>

    </div>
  );
}

export default Register;