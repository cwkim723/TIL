/* eslint-disable */

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
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // state 변경하는 법 = 등호로 변경 금지
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    console.log(1);
  }

  // let [logo, setLogo] = useState('ReactBlog'); // 블로그 제목은 자주 바뀌는 데이터가 아니므로 하드코딩으로 해도 괜찮음

  // destructuring 문법
  let num = [1, 2]; // 배열에 있는 것을 변수로 빼고 싶음
  let [a, c] = [1, 2];

  

  /* return() 안에는 병렬로 태그 2개 이상 기입금지 */
  return (
    <div className="App">
      {/* html이 아니라 jsx임 */}
      {/* 데이터 바인딩은 { } 으로 함. id, className 등 다양한 곳에서도 사용 가능
          style도 style = { } 형식으로 작성해야 함
        <h4>{ post }</h4>
        <h4 id={post} style={{color : 'red', fontSize : '16px'}}>블로그임</h4> */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ () => { 
        // 원본 보존을 위해 copy 배열을 만듦
        // state변경함수의 특징: 기존 state == 신규 state인 경우 변경 안해줌
        // array/object 특징: 변수는 ram에 저장된 데이터를 가리키는 주소를 담음
        // 배열 복사를 해도 기존 글제목과 같은 주소를 가짐. -> 기존 state == 신규 state인 경우이므로 변경을 안 해줌
        let copy = [...글제목]; // 새로운 주소를 참조하도록 함
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>🔄</button>
      <button onClick={ () => {
        let arr = [...글제목];
        arr.sort();
        글제목변경(arr);
      }}>정렬</button>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] } <span onClick={ function() { console.log(1) } }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
