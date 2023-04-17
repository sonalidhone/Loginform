import { conuntry } from "./Country";
import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRegistartion } from "./RegistrationSlice";
import { Typography } from "antd";
const { Title } = Typography;
const { TextArea } = Input;
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((state) => state.Registration.reg);
  console.log(storeData);
  const onFinish = (values) => {
    if (values.password !== values.cpassword) {
      alert("Passwords don't match");
    } else {
      dispatch(addRegistartion(values));
      navigate("/");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
     <Title level={3}>Registration</Title>
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
            label="First Name"
            name="name"
            rules={[
              {
                type: "string",
                required: true,
                message: "Please enter first name !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lname"
            rules={[
              {
                type: "string",
                required: true,
                message: "Please enter last name !",
              },
            ]}
          >
            <Input />
          </Form.Item>

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
            label="Address"
            name="address"
            rules={[
              {
                type: "string",
                required: true,
                message: "Please enter address !",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: "Please select country !",
              },
            ]}
          >
            <Select>
              {conuntry.map((e, i) => {
                return <Select.Option key={i}>{e.name}</Select.Option>;
              })}
            </Select>
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
            label="Confirm Pass"
            name="cpassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group>
              <Space>
                <Radio value="male"> Male </Radio>
                <Radio value="female"> Female </Radio>
                <Radio value="other"> Other </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Phone no"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone no!",
              },
            ]}
          >
            <InputNumber  style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Space>
              <Link to="/">
                <Button type="primary" htmlType="button">
                  Login
                </Button>
              </Link>

              <Button htmlType="submit">Register</Button>
            </Space>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Register;
