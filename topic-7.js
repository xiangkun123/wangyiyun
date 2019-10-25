import React from "react";
import ReactDOM from "react-dom";

class ConfirmComp extends React.Component {
  render() {
    return <div className="confirm">{this.props.content}</div>;
  }
}

const Confirm = content => {
  return new Promise((resolve, reject) => {
    try {
      const node = document.createElement("div");
      document.body.append(node);
      ReactDOM.render(<ConfirmComp content={content} />, node, () => {
        resolve(true);
      });
    } catch (error) {
      resolve(false);
    }
  });
};

class Demo extends React.Component {
  render() {
    return <div>Demo</div>;
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
