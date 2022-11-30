import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  
  return (
    <div className="App">
      {/* html이 아니라 jsx임 */}
      {/* 데이터 바인딩은 { } 으로 함. id, className 등 다양한 곳에서도 사용 가능 */}
      {/* style도 style = { } 형식으로 작성해야 함 */}
      <div className="black-nav">
        <h4 id={post} style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
