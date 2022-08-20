// api url
var url = 'https://jsonplaceholder.typicode.com/users/1'; 
// 사용자 목록 중 첫 번째를 가져오겠다

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url)
}
// User를 fetchUser로 호출하고 나면 Promise에 User라는 타입이 담겨 있을 것
// fetchUser(); 호출 // => function fetchUser(): any => console.log를 찍기 전까지 반환 결과를 알 수 없음

fetchUser().then(function (response) {
  response.address.city
})


function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].addres.street;

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
