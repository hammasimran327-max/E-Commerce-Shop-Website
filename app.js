{/* <div class="info">
<a href="contact.html">Contact</a>
<a href="error.html">Home</a>
<a href="service.html">Services</a>
<a href="about.html">About</a>
</div> */}
let cartItems = [];

document.body.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.butn')) {
        const productBox = event.target.closest('.box');
        const productName = productBox.querySelector('.photo img').alt || 'Unknown Product';
        const productPrice = productBox.querySelector('.price').textContent || '0';
        
        event.target.textContent = "Purchased";
        event.target.style.backgroundColor = '#a2a2a2';
        event.target.disabled = true;

        cartItems.push({ name: productName, price: productPrice });
        
        alert(productName + ' has been purchased! Price: ' + productPrice);
    }
});

const cartIcon = document.querySelector('.cart');
cartIcon.addEventListener('click', function () {
    let cartDetails = "Items in your cart:\n";
    let totalPrice = 0;

    cartItems.forEach(item => {
        cartDetails += `${item.name}: ${item.price}\n`;
        totalPrice += parseFloat(item.price.replace('$', '').trim());
    });

    cartDetails += `Total Price: $${totalPrice.toFixed(2)}`;
    alert(cartDetails);
});

var typed = new Typed('#element', {
    strings: ['Thank you for your purchase!', 'Thanks'],
    typeSpeed: 20,
    backSpeed: 25,
    loop: true
});

const navItems = document.querySelectorAll('.navbar .name, .navbar .logo-div');
navItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.style.border = '1px solid white';
    });
    item.addEventListener('mouseout', function () {
        item.style.border = '';
    });
});

const searchInput = document.querySelector('.search');
searchInput.addEventListener('focus', function () {
    searchInput.style.border = '2px solid white';
});
searchInput.addEventListener('blur', function () {
    searchInput.style.border = '';
});

const socialIcons = document.querySelectorAll('.help .circle, .help .circle1');
socialIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
        alert('Icon clicked!');
    });
});

const productBoxes = document.querySelectorAll('.shop .box');
productBoxes.forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        box.style.backgroundColor = '#333';
    });
    box.addEventListener('mouseleave', function () {
        box.style.backgroundColor = '#161616';
    });
});
