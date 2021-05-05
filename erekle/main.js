function onCl () {
    var main = document.getElementById("main-M");
    main.classList.remove("mn");
    main.classList.add("mn2");
    document.getElementById("sec-manu").style.display="flex";
}

function onCl2 (element) {
    var x = document.getElementById(element).nextElementSibling;
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function onCl3 () {
    var back = document.getElementById("main-M");
    back.classList.remove("mn2");
    back.classList.add("mn");
    document.getElementById("sec-manu").style.display="none";
}

const array = [
    {img:"./resurces/pictures/prodactions/Rectangle42.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle421.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle422.png",PN:"Product Name",PS:"ბრენდის სახელი"},
    {img:"./resurces/pictures/prodactions/Rectangle423.png",PN:"Product Name",PS:"ბრენდის სახელი"},
]



function jscards(cards) {
    const cardsContainer = document.getElementById('mid-topP')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('prod')
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
jscards(array)


function slide() {
    var category = document.querySelectorAll(".sec3")
    category.forEach(item => {
        item.children[1].children[0].addEventListener("click", ()=> {
            item.classList.toggle("active")
        })
    })
}
slide()

function slide2() {
    var category = document.querySelectorAll(".sec3")
    category.forEach(item => {
        item.children[2].children[0].addEventListener("click", ()=> {
            item.classList.toggle("active2")
        })
    })
}
slide2()



const lis = document.querySelectorAll(".container")
const li2 = document.querySelectorAll('li > ul') 
lis.forEach(li => {
    li.addEventListener('click', () =>  {
        lis.forEach(li2 => {
            li2.classList.remove('active3')
        })
        li.classList.add('active3')
    })
})

