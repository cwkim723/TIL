<h2>npm</h2>
라이브러리 설치를 도와주는 도구  

- npm init: npm 셋팅
- npm install express: express 설치

<h4>package.json</h4>
어떤 라이브러리 설치했는지 기록

- npm init하면 자동 생성 
```
Press ^C at any time to quit.
package name: (node) 
version: (1.0.0) 
description: 
entry point: (index.js) server.js
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
```

```
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
 
```