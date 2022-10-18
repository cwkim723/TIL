const express = require('express');
const app = express();

app.listen(8080, function () {
    // 서버띄울 포트번호, 띄운 후 실행할 코드
    console.log('listening on 8080')
});

// 누군가가 /pet으로 방문하면 pet 관련된 안내문을 띄워주기
app
.get('/pet', function(요청, 응답){
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