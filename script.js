document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'تيشيرت', price: '50 جنيه', image: 'T550_.jpg' },
        { name: 'بنطلون', price: '100 جنيه', image: 'AC_SX522.jpg' },
        { name: 'فستان', price: '150 جنيه', image: '79.jpg' },
        { name: 'طقم رجالي', price: '80 جنيه', image: 'T550_.jpg' },
        { name: 'جاكيت', price: '200 جنيه', image: '3.png' },
        { name: 'حذاء', price: '120 جنيه', image: 'co1.jpg' },
        { name: 'شورت', price: '30 جنيه', image: 'SX522.jpg' },
        { name: 'ذهب', price: '90 جنيه', image: 'SX5212.jpg' },
        { name: 'اطفال', price: '70 جنيه', image: 'SX575.jpg' },
        { name: 'نظارات شمسية', price: '110 جنيه', image: '2.png' },
    ];

    const productList = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <p>السعر: ${product.price}</p>
                                <button onclick="addToCart('${product.name}', '${product.price}')">أضف إلى السلة</button>`;
        productList.appendChild(productDiv);
    });
});

let cart = [];

function addToCart(name, price) {
    const product = { name, price };
    cart.push(product);
    alert(`تم إضافة ${name} إلى السلة بسعر ${price}`);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;
        cartItemsContainer.appendChild(itemDiv);

        total += parseFloat(item.price.split(' ')[0]);
    });

    document.getElementById('cart-total-price').innerText = `${total} جنيه`;
}
