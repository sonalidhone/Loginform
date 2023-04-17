import { Button, Col, Row } from "antd";
import { Calendar } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;

const LoginScreen = () => {
  const { email } = useParams();
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div>
      <div>
        <Row>
          <Col span={8}>
            <Title level={3}>{email}</Title>
          </Col>
          <Col span={8} offset={8}>
            <Link to="/">
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: "22px" }}
              >
                Logout
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{border:"20px solid gray", padding:"20px"}}>
        <Calendar onPanelChange={onPanelChange} />;
      </div>
      <div></div>
    </div>
  );
};

export default LoginScreen;
