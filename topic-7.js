import React from "react";
import ReactDOM from "react-dom";

class ConfirmComp extends React.Component {
  render() {
    const { content, onSure, onClose } = this.props;
    return (
      <div className='confirm'>
        <div>{content}</div>
        <div>
          <button
            onClick={e => {
              onSure(e);
            }}
          >
            确认
          </button>
          <button
            onClick={e => {
              onClose(e);
            }}
          >
            取消
          </button>
        </div>
      </div>
    );
  }
}

const Confirm = content => {
  return new Promise((resolve, reject) => {
    const node = document.createElement("div");
    document.body.append(node);
    ReactDOM.render(
      <ConfirmComp
        content={content}
        onSure={e => {
          resolve(true);
        }}
        onClose={e => {
          resolve(false);
        }}
      />,
      node
    );
  });
};

class Demo extends React.Component {
  render() {
    return null;
  }
  async componentDidMount() {
    let res = await Confirm("确定删除吗");
    if (res) {
      console.log("是");
    } else {
      console.log("否");
    }
  }
}

export default Demo;
