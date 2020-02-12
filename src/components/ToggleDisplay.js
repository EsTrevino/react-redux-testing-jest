import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { testAction } from '../redux/actions';

class ToggleDisplay extends Component {
  state = {
    message: null
  };

  componentDidMount() {
    this.setState({ message: this.props.message });
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.setState({ message: this.props.message });
    }
  }

  buttonClick = newMessage => {
    this.props.testAction(newMessage);
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <button onClick={() => this.buttonClick('this is my new message')}>
          display message from state
        </button>
        <p>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.ExampleReducer.welcome
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ testAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToggleDisplay);
