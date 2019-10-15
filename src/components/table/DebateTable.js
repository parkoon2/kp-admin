import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";
import { Table, Tag, Divider, Popconfirm, Icon, Card, Tooltip } from "antd";
import { deleteUser } from "../../actions/users";
import { deleteDebate } from "../../actions/debates";

moment.locale("ko");

const More = () => (
  <Tooltip placement="bottom" title={"더보기"}>
    <Link to="/users">
      <Icon type="more" />
    </Link>
  </Tooltip>
);

class DebateTable extends React.Component {
  columns = [
    {
      title: "번호",
      dataIndex: "index",
      key: "index",
      render: text => <a>{text}</a>
    },
    {
      title: "채널",
      dataIndex: "channel",
      key: "channel"
    },
    {
      title: "상태",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "주제",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "생성일",
      dataIndex: "loggedAt",
      key: "loggedAt",
      render: date => (
        <span>
          {moment.unix(1571034686295 / 1000).format("LLL")}
          <Divider type="vertical" />
          {moment().fromNow(date)}
        </span>
      )
    },
    {
      title: "사회자",
      key: "host",
      dataIndex: "host"
    },
    {
      title: "삭제",
      key: "delete",
      render: (text, debate) => (
        <span>
          {/* <Divider type="vertical" /> */}
          <Popconfirm
            title="삭제 하시겠습니까?"
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
            onCancel={() => {}}
            onConfirm={() => {
              this.props.dispatch(deleteDebate(debate.id));
            }}
            cancelText="취소"
            okText="삭제"
          >
            <a>삭제</a>
          </Popconfirm>
        </span>
      )
    }
  ];

  render() {
    return (
      <Card
        title="토론방 관리"
        bordered={false}
        extra={this.props.more && More()}
      >
        <Table
          columns={this.columns}
          dataSource={this.props.items}
          pagination={this.props.pagination}
          loading={this.props.loading}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  deleteDebate: id => dispatch(deleteDebate(id))
});

export default connect()(DebateTable);