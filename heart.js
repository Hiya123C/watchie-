let count = 0;

const heartButton = document.getElementById("heart");
const heartCount = document.getElementById("heart-count");

heartButton.addEventListener("click", (event) => {
    event.stopPropagation();
    count += 1;
    heartCount.textContent = count;

    if (count % 100 === 0) {
        heartCount.style.color = "#ADD8E6";
    } else {
        heartCount.style.color = "#FFFFFF";
    }
});