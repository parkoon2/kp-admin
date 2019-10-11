import React, { Component } from "react";
import {
  Layout,
  Row,
  Col,
  Icon,
  Button,
  Dropdown,
  Card,
  Table,
  Divider,
  Popconfirm,
  Menu,
  Tag,
  Avatar
} from "antd";

// Components
import SummaryCard from "../components/card/SummaryCard";
import LineGraph from "../components/graph/LineGraph";
import UserTable from "../components/table/UserTable";

// Dummy Data
import { users } from "../data";
import colors from "../constants/colors";

class Home extends Component {
  render() {
    return (
      <div className="dashboard__wrapper">
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <div className="dashboard__summary-container">
            <Row gutter={32} className="summary__row">
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="twitter"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearBlue}
                  title={"Followers"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="twitter"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearRed}
                  title={"Followers"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="twitter"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearGreen}
                  title={"Followers"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
              <Col xs={24} sm={12} xl={6} className="summary__col">
                <SummaryCard
                  icon={
                    <Icon
                      type="twitter"
                      style={{ fontSize: "3rem", color: "#fff" }}
                    />
                  }
                  iconBackground={colors.linearOrange}
                  title={"Followers"}
                  subtitle={"+245"}
                  updated={"just updated"}
                />
              </Col>
            </Row>
          </div>

          <div className="dashboard__graph-container">
            <Row style={{ marginBottom: "12px" }}>
              <Col span={24}>
                <LineGraph
                  title="라인 그래프"
                  dataLabel="일간 방문수"
                  data={[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ]}
                  xAxisLabels={[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30
                  ]}
                />
              </Col>
            </Row>
          </div>

          <div className="dashboard__boards-container">
            <Row gutter={8}>
              <Col lg={12} md={24} className="boards__col">
                <UserTable users={users} pagination={false} pageSize={5} more />
              </Col>
              <Col lg={12} md={24} className="boards__col">
                <UserTable users={users} pagination={false} pageSize={5} more />
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </div>
    );
  }
}

export default Home;
