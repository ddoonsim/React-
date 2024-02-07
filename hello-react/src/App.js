function App() {
  // const name = undefined;

  const style = {
    backgroundColor : 'orange',
    fontSize: '3rem',
  };

  const name = "이이름";
  return (
    <>
      <h1 className="title" 
      //style={style}
      >안녕하세요! {name || '홍길동'}</h1>
      {name && <h2>반갑습니다.</h2>}
      {/* name 값이 있으면 <h2>태그 출력 */}

      <input type="text"></input>
      <input type="text"/>
    </>
  );
}

export default App;
