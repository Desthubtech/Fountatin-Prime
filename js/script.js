const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showMessage() {
    alert('Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nemo sint magnam dolor quasi libero, incidunt esse, nisi earum rerum odio? Laudantium in, neque perferendis, fugiat placeat minima omnis est at aliquam quaerat amet corporis voluptatem officia suscipit velit molestiae accusantium! Dolorem saepe enim ab est dolorum atque soluta voluptatem!');
}
function showMarketInfo() {
    alert('Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nemo sint magnam dolor quasi libero, incidunt esse, nisi earum rerum odio? Laudantium in, neque perferendis, fugiat placeat minima omnis est at aliquam quaerat amet corporis voluptatem officia suscipit velit molestiae accusantium! Dolorem saepe enim ab est dolorum atque soluta voluptatem!');
}

function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let sign = element.querySelector("span");
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        sign.textContent = "+";
    } else {
        answer.style.display = "block";
        sign.textContent = "-";
    }
}


let index = 0;
        function slideImages() {
            const slider = document.getElementById('slider');
            index++;
            if (index > 2) index = 0; // Adjust based on number of images
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(slideImages, 3000); // Change image every 3 seconds