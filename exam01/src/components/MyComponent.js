import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };

  static propTypes = {
    age: PropTypes.number,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, age, children } = this.props;
    return (
      <>
        <div>나의 멋진 컴포넌트</div>
        <div>{name}님 안녕하세요🤗</div>
        <div>나이 : {age}</div>
        <div>children : {children}</div>
      </>
    );
  }
}

export default MyComponent;
