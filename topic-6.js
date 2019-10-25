import React, { useState } from "react";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  get isControl() {
    return "value" in this.props;
  }

  get value() {
    return this.isControl ? this.props.value : this.state.value;
  }

  render() {
    return (
      <input
        value={this.value}
        onChange={e => {
          if (this.isControl) {
            this.props.onChange(e);
          } else {
            this.setState({
              value: e.target.value
            });
          }
        }}
      />
    );
  }
}

// 考察受控与非受控组件，运用react的hooks
function App() {
  const [value, setValue] = useState("aaa");
  let defaultValue = "aaa";

  return (
    <div>
      受控组件：
      <InputNumber
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      {value}
      <br />
      非受控组件：
      <InputNumber
        defaultValue={defaultValue}
        onChange={e => {
          defaultValue = e.target.value;
        }}
      />
    </div>
  );
}

export default App;
