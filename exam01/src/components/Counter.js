import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state; // 비구조화 할당

    // function plus() {
    //     console.log(this);
    // }
    // const plus = () => console.log(this);    // 화살표 함수로 정의하는 경우 this의 범위 : 객체의 자원(Counter)

    return (
      <div>
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => this.setState({ number: number - 1 })}
          // 이벤트가 발생할 때마다(상태가 바뀌므로) 페이지가 새로 로딩됨
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => this.setState({ number: number + 1 })}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
