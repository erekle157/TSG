const array2 = [
    {img:"./resurces/pictures/prodactions/Rectangle42.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle421.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle422.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
]



function jscards2(cards) {
    const cardsContainer = document.getElementById('mid-topP2')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('prod2')
        createCard.innerHTML =
        `                                 
            <img src=${curentCard.img} alt="">
            <p>${curentCard.PN}</p>
            <h1>${curentCard.PS}</h1>
            <a href="./prodName.html"><span class="PH">პროდუქტის ნახვა</span></a>
        `
        cardsContainer.appendChild(createCard)
    }
}    
jscards2(array2)

const content = document.getElementById('mid-topP2')
const button = document.getElementById("btn")

button.addEventListener("click", function () {
    this.classList.toggle("open")
    content.classList.toggle("open")
})