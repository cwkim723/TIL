const express = require('express');
const app = express();
const bodyParser = require('body-parser') // post요청으로 서버에 데이터 전송하고 싶으면 body-parser 필요
app.use(bodyParser.urlencoded({ extended: true }))
const env = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
// console.log(process.env.MONGO_ID);

// app.listen(8080, function () {
//     // 서버띄울 포트번호, 띄운 후 실행할 코드
//     console.log('listening on 8080')
// });

// 누군가가 /pet으로 방문하면 pet 관련된 안내문을 띄워주기
// 함수 안에 함수 = 콜백함수 -> 순차적으로 실행하고싶을 때 사용
app
    .get('/pet', (요청, 응답) => {
        응답.send('펫 용품 쇼핑 페이지입니다.');

    })
    .get('/beauty', function (요청, 응답) {
        응답.send('뷰티 용품 쇼핑 페이지입니다.');
    })
    .get('/', function (요청, 응답) {
        응답.sendFile(__dirname + '/index.html');
    })
    .get('/write', function (요청, 응답) {
        응답.sendFile(__dirname + '/write.html');
    });

// 서버 실행 자동화
// npm install -g nodemon
// nodemon server.js

// post 요청으로 서버에 데이터 전송하고 싶으면 form데이터의 경우 input들에 name 작성하기
app
    .post('/add', function (요청, 응답) {
        응답.send('전송완료');
        console.log(요청.body); // { title: '오늘의 할일', date: '날짜' }
        console.log(요청.body.title); // 오늘의 할일
    })

// REST 원칙
/*
1. Uniform Interface (가장 중요)
    - API 작성 시 간결하고 형식이 일관적이어야 함(하나의 자료는 하나의 URL)
    - URL 하나를 알면 둘을 알 수 있어야 함
    - 요청과 응답은 정보가 충분히 들어있어야 함
2. Client-Server 역할구분
    - 브라우저는 요청만
    - 서버는 응답만
3. Stateless
    - 각 요청들은 서로 독립적이어야 함
4. Cacheable
    - 서버에서 보내주는 정보들은 캐싱이 가능해야 함
    - 캐싱을 위한 버전 같은 것도 관리 잘해야 함(실은 브라우저가 해줌)
5. Layered System
6. Code on Demand
*/

// 좋은 REST API
/*
이름짓기 원칙
-   URL을 명사로 작성 추천
-   하위문서 나타낼 때 / 사용
-   파일확장자(.html) 쓰지말기
-   띄어쓰기는 대시(-)이용
-   자료 하나당 하나의 URL
*/

// console.log(env.MONGO_ID);

// 몽고디비
let db;
MongoClient.connect(`mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PWD}@study.fm9qhqo.mongodb.net/test
`, { useUnifiedTopology: true }, function (에러, client) {
    if (에러) {
        return console.log(에러)
    }
    db = client.db('todoapp');

    // insertOne(추가할 자료, 콜백함수)
    db.collection('post').insertOne({이름: 'John'; _id: 100}, function() {
        console.log('저장완료');
    })

    app.listen(8080, function () {
        console.log('listening on 8080')
    })
})
