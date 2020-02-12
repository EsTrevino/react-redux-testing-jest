import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testThunkAction } from '../redux/actions';

class PokeComponent extends Component {
  componentDidMount() {
    this.props.testThunkAction();
    this.setState({ results: this.props.reduxTestData });
  }

  render() {
    const { reduxTestData } = this.props;
    console.log(reduxTestData);
    return (
      <div>
        {reduxTestData.length > 0 && (
          <ul data-testid="api-list">
            {reduxTestData.map(item => (
              <li data-testid="api-item" key={item.url}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxTestData: state.ExampleReducer.testData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ testThunkAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokeComponent);
