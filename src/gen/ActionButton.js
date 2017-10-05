import React from "react";
// -- react-native-import
import PropTypes from "prop-types";

class ActionButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleOnClick = e => {
    this.props.onClick(e);
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <Button onPress={this.handleOnClick} title={title} />
      </div>
    );
  }
}

export default ActionButton;
