import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import svg from "./../../../public/Wavy_Tech-05_Single-01 [Converted] (2).svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log(values);
    if (values.username == "admin") {
      router.push("/tickets-admin");
    } else {
      router.push("/tickets-user");
    }
  };

  return (
    <div className={styles.container}>
      <Image className={styles.image} src={svg} alt=""></Image>
      <div className={styles.formContainers}>
        <h1 style={{ color: "white", padding: "4px" }}>Login</h1>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item className={styles.formItem}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <div>
              Or <Link href="">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
