const container = document.querySelector('.container');
const box = document.querySelector('.box');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = "32px"
    div.style.height = "32px"
    div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = "black";
    });
    container.appendChild(div);
}