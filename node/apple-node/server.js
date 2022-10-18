const express = require('express');
const app = express();
const bodyParser = require('body-parser') // post요청으로 서버에 데이터 전송하고 싶으면 body-parser 필요
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8080, function () {
    // 서버띄울 포트번호, 띄운 후 실행할 코드
    console.log('listening on 8080')
});

// 누군가가 /pet으로 방문하면 pet 관련된 안내문을 띄워주기
// 함수 안에 함수 = 콜백함수 -> 순차적으로 실행하고싶을 때 사용
app
.get('/pet', (요청, 응답) => {
    응답.send('펫 용품 쇼핑 페이지입니다.');
})
.get('/beauty', function(요청, 응답){
    응답.send('뷰티 용품 쇼핑 페이지입니다.');
})
.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
})
.get('/write', function(요청, 응답){
    응답.sendFile(__dirname + '/write.html');
});

// 서버 실행 자동화
// npm install -g nodemon
// nodemon server.js

// post 요청으로 서버에 데이터 전송하고 싶으면 form데이터의 경우 input들에 name 작성하기
app
.post('/add', function(요청, 응답) {
    응답.send('전송완료');
    console.log(요청.body); // { title: '오늘의 할일', date: '날짜' }
    console.log(요청.body.title); // 오늘의 할일
})
