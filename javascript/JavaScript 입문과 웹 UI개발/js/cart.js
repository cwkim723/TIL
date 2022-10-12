const carts = localStorage.getItem('cart');
const arr = JSON.parse(carts);

if(arr != null) {
    arr.forEach((cart) => {
        const 템플릿 =
            `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100">
              <h5>${cart}</h5>
            </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', 템플릿)
    })
}

document.querySelector('#cart-delete').addEventListener('click', function(){
    localStorage.removeItem('cart');
    location.reload();
})
