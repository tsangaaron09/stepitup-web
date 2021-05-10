import React from "react";

class DropDown extends React.Component {
  render(props) {
    const options = this.props.options;

    // function addDefaultVal() {
    //   return (
    //     <option key="" value="">
    //       {this.props.defaultVal}
    //     </option>
    //   );
    // };

    // componentDidMount() {
    //   var defaultVal = document.createElement('option');
    //   defaultVal.key = "";
    //   defaultVal.value = "";
    //   defaultVal.text = { this: props.defaultVal };
    //   document.querySelector(`{this.props.label}`).appendChild(defaultVal);
    // };

    return (
      <div>
        <select
          label={this.props.label}
          className="ui selection dropdown"
          id={this.props.label}
        >
          {options.map((option) => {
            return (
              <option
                key={options.indexOf(option)}
                value={options.indexOf(option)}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default DropDown;
