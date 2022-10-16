const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('🐳 Docker 실습 테스트 !!! 🐳');
});

app.listen(8080, () => console.log('서버가 실행될거예요'));