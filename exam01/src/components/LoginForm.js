import React, { useState, useEffect, useRef } from 'react';

const LoginForm = () => {
  const [form, setForm] = useState({
    userId: '',
    userPw: '',
  });

  const [message, setMessage] = useState(''); // 유효성 검사 실시 --> 에러 메세지

  const countRef = useRef(1);    // 지역 변수 설정 시 useRef() 이용

  const onSubmit = (e) => {
    e.preventDefault(); // 기본 이벤트 동작 제거
    // e.stopPropagation(); // 상위 요소의 전파 제거
    setMessage('');

    countRef.current++;
    console.log(countRef.current);

    try {
      for (const key in form) {
        const message =
          (key === 'userId' ? '아이디' : '비밀번호') + '를 입력하세요.';
        if (!form[key].trim()) {
          throw new Error(message);
        }
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  const { userId, userPw } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

//   let userIdEl = React.createRef();    // ref 만들어서 직접 대입
  let userIdEl = useRef();

  useEffect(() => {
    userIdEl.current.focus();
    // userIdEl.focus();    // 페이지 첫 로딩 시 userIdEl 요소에 커서 위치
  }, [userIdEl]);

  return (
    <form onSubmit={onSubmit}>
      <dl>
        <dt>아이디</dt>
        <dd>
          <input
            // ref={(ref) =>
            //   (userIdEl = ref)
            // } /* 요소 선택 시 부여하는 속성 : ref --> 변수에 ref를 대입 */
            ref={userIdEl}
            type="text"
            name="userId"
            onChange={onChange}
            value={userId}
          />
        </dd>
      </dl>
      <dl>
        <dt>비밀번호</dt>
        <dd>
          <input
            type="password"
            name="userPw"
            onChange={onChange}
            value={userPw}
          />
        </dd>
      </dl>
      {message && <div>{message}</div> /* 간단한 조건식을 대체 */}
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
