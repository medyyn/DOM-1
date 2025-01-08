const circles = document.getElementsByClassName("circle")
for (let circle of circles) {
    circle.onclick = () => {
        circle.style.backgroundColor = circle.innerText
        document.getElementById("output").textContent = `Seçdiyiniz rəng: ${circle.innerText}`;
    }
}