const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showMessage() {
    alert('Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nemo sint magnam dolor quasi libero, incidunt esse, nisi earum rerum odio? Laudantium in, neque perferendis, fugiat placeat minima omnis est at aliquam quaerat amet corporis voluptatem officia suscipit velit molestiae accusantium! Dolorem saepe enim ab est dolorum atque soluta voluptatem!');
}