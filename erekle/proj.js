







const content = document.getElementById('scroll')
const button = document.getElementById("btn2")


button.addEventListener("click", function () {
    this.classList.toggle("open5")
    content.classList.toggle("open5")
})