import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  // 자료 잠깐 보관할 때 변수 말고도 state 쓸 수 있음
  /*
    state 만드는 법
    1. import { useState }
    2. useState(보관할 자료)
    3. let [a, b]
      a: state에 보관했던 자료
      b: state 변경 도와주는 함수
  */
  // state 쓰는 이유 = state가 변경되면 state 쓰던 html은 자동 재렌더링됨 
  let [글제목, 함수1] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);

  let [logo, setLogo] = useState('ReactBlog'); // 블로그 제목은 자주 바뀌는 데이터가 아니므로 하드코딩으로 해도 괜찮음

  // destructuring 문법
  let num = [1, 2]; // 배열에 있는 것을 변수로 빼고 싶음
  let [a, c] = [1, 2];

  

  /* return() 안에는 병렬로 태그 2개 이상 기입금지
     <div>
     </div> 가능
     <div></div> 불가능 */
  return (
    <div className="App">
      {/* html이 아니라 jsx임 */}
      {/* 데이터 바인딩은 { } 으로 함. id, className 등 다양한 곳에서도 사용 가능
          style도 style = { } 형식으로 작성해야 함
        <h4>{ post }</h4>
        <h4 id={post} style={{color : 'red', fontSize : '16px'}}>블로그임</h4> */}
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
