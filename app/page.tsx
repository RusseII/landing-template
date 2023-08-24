"use client";
import React from "react";
import { Button, Input, Row, Col, Typography, Space } from "antd";

const { Title, Text } = Typography;

const HeroSection = () => {
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        // alignContent: "center",
      }}
    >
      <Title level={1} style={{ paddingTop: 100 }}>
        stay connected with your friends through casual calls
      </Title>
      <Text>
        friend phone makes it easy to stay connected with the people you care
        about
      </Text>
      <Row style={{ width: 100 }}>
        <Input defaultValue="Combine input and button" />
        <Button type="primary">Join Waitlist</Button>
      </Row>
    </div>
  );
};

export default HeroSection;
