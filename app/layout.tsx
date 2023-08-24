/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { Layout, Space, Grid, Button, Menu } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

function CustomFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#F7F9FF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bottom: 0,
        width: "100%",
      }}
    >
      <span>
        Hosted on <a href="https://dappling.network">dAppling</a>
      </span>
    </Footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerHeight = 48;
  const screens = useBreakpoint();

  return (
    <html lang="en">
      <Layout style={{ minHeight: "100vh", backgroundColor: "#F7F9FF" }}>
        <Header
          style={{
            textAlign: "right",
            height: headerHeight,
            backgroundColor: "white",
            lineHeight: `${headerHeight}px`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space size="large">
            friendphone
            {/* <Link href="/">
            <img
              src="https://miro.medium.com/v2/resize:fill:176:176/1*DkTmcsAk4ARPrWCrXZH20Q.png"
              alt="GoGoPool Logo"
              style={{
                color: "red",
                marginTop: "18px",
                height: "36px",
                borderRadius: "50%",
              }}
            />
          </Link> */}
          </Space>
          <Space>
            <Button
              size="large"
              type="text"
              href="https://github.com/alwaysbegrowing/gogopool-dashboard"
              icon={<GithubOutlined />}
            ></Button>
          </Space>
        </Header>
        <Content
          style={{
            paddingTop: "24px",
            paddingRight: screens.sm ? 48 : 16,
            paddingLeft: screens.sm ? 48 : 16,
            height: `calc(100% - ${headerHeight}px)`,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <body>{children}</body>
        </Content>
        <CustomFooter />
      </Layout>
    </html>
  );
}
