import { Button, Form, Input, Row, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;

const Login = () => {
  const storeData = useSelector((state) => state.Registration.reg);

  const navigate = useNavigate();
  const onFinish = (values) => {
    const checkData = storeData.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (checkData) {
      navigate(`/loginscreen/${values.email}`);

      alert("success");
    } else {
      alert("Login failed");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{marginTop:"14%"}}>
      <Title level={3}>Login</Title>
      <Row type="flex" justify="center" align="center">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter Email !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space>
              {/* <Link to="/loginscreen"> */}
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              {/* </Link> */}
              <Link to="/register">
                <Button htmlType="button">Register</Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Login;
